import { useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  orderBy,
  getDocs,
  query,
  limit,
  where,
} from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MSG_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
  measurementId: process.env.REACT_APP_FB_MEASUREMENT_ID,
}

let firebaseDb
let coll
let ignore = 0

export const initDatabase = async () => {
  if (ignore >= 1) {
    ignore = 0
    return
  }
  // Initialize Firebase
  try {
    const firebaseApp = initializeApp(firebaseConfig)
    firebaseDb = getFirestore(firebaseApp)
  } catch (error) {
    console.log(
      'Something went wrong while trying to init Firebase App, check environment files',
      error
    )
  }

  // Get date
  const date = new Date()
  const dateString = date.toDateString().replaceAll(' ', '')

  coll = 'sensorDataCollection' + dateString
  ignore++
}

export const useFetchSensorData = (fport) => {
  const [sensorDataCache, setSensorDataCache] = useState([])

  const fetchSensorData = async () => {
    try {
      const collRef = collection(firebaseDb, coll)
      if (fport == 1) {
        const queryCondition = query(
          collRef,
          where('fport', '==', fport),
          orderBy('time_ms', 'desc'),
          limit(3)
        )
        const querySnapshot = await getDocs(queryCondition)
        const documents = querySnapshot.docs.map((doc) => doc.data())
        setSensorDataCache(documents)
      }
    } catch (error) {
      setSensorDataCache([])
      return false
    }
    return true
  }
  return [sensorDataCache, fetchSensorData]
}
