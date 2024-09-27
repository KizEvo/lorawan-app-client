import { useState } from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  getDocs,
  where,
  query,
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
let initialDoc = null
// let sensorDataCache = []
let coll
let ignore = 0

const firstId = 'collection-metadata'

export const initDatabase = async () => {
  if (ignore >= 1) {
    ignore = 0
    return
  }
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig)
  firebaseDb = getFirestore(firebaseApp)

  // Get date
  const date = new Date()
  const dateString = date.toDateString().replaceAll(' ', '')
  // Get document reference

  coll = 'sensorDataCollection' + dateString
  const firstDocRef = doc(firebaseDb, coll, firstId)
  try {
    initialDoc = await getDoc(firstDocRef)
  } catch (error) {
    initialDoc = null
  }
  ignore++
}

export const useFetchSensorData = () => {
  const [sensorDataCache, setSensorDataCache] = useState([])

  const fetchSensorData = async () => {
    if (initialDoc === null) {
      // Haven't init db
      return true
    }
    if (!initialDoc.exists()) {
      // Data is not ready
      return false
    }
    const firstDocRef = doc(firebaseDb, coll, firstId)
    initialDoc = await getDoc(firstDocRef)
    const data = initialDoc.data()
    const tmpCache = []
    try {
      console.log(data)
      const inst = data.count - 3 < 0 ? 0 : data.count - 3
      console.log(inst)
      const q = query(collection(firebaseDb, coll), where('inst', '>=', inst))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        tmpCache.push(doc.data())
      })
      setSensorDataCache(tmpCache)
    } catch (error) {
      return false
    }
    return true
  }
  return [sensorDataCache, fetchSensorData]
}
