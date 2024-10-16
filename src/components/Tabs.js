import React, { useState, useEffect } from 'react'
import InfoGraphic from '../components/InfoGraphic'
import { useFetchSensorData } from '../db/Database'
import { myMap1, myMap2, map1Keys, map2Keys } from '../db/SlotsStatus'
import '../styling/Tabs.css'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1') // Default to 'tab1'
  const [sensorDataCache, fetchSensorData] = useFetchSensorData()

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSensorData()
    }, 1000 * 10)

    return () => clearInterval(interval)
  }, [])

  if (sensorDataCache) {
    map1Keys.forEach((key, idx) => {
      myMap1.set(key, sensorDataCache.floor.f1[idx])
    })
    map2Keys.forEach((key, idx) => {
      myMap2.set(key, sensorDataCache.floor.f2[idx])
    })
  }

  const renderContent = () => {
    if (activeTab === 'tab1') {
      return (
        <div>
          <h2>Parking Spaces Status - Floor B1</h2>
          <InfoGraphic mapData={myMap1} />
        </div>
      )
    } else if (activeTab === 'tab2') {
      return (
        <div>
          <h2>Parking Spaces Status - Floor B2</h2>
          <InfoGraphic mapData={myMap2} />
        </div>
      )
    }
  }

  return (
    <div>
      <div className='tab-buttons'>
        <button
          className={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => setActiveTab('tab1')}
        >
          B1/-1F
        </button>
        <button
          className={activeTab === 'tab2' ? 'active' : ''}
          onClick={() => setActiveTab('tab2')}
        >
          B2/-2F
        </button>
      </div>
      <div className='tab-content'>{renderContent()}</div>
    </div>
  )
}

export default Tabs
