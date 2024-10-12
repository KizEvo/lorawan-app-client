import React, { useState, useEffect } from 'react'
import InfoGraphic from '../components/InfoGraphic'
import { useFetchSensorData } from '../db/Database'
import { Map1, Map2 } from '../db/SlotsStatus'

import '../styling/Tabs.css'

const Tabs = () => {
    // const [sensorDataCache, fetchSensorData] = useFetchSensorData()
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //       fetchSensorData()
    //     }, 1000 * 60)
    
    //     return () => clearInterval(interval)
    //   }, [])

    const [myMap1, setMyMap1] = useState(Map1)
    useEffect(() => {
        const interval = setInterval(() => {
            setMyMap1((prevMap) => {
                const newMap = new Map(prevMap);
                newMap.set('A1', newMap.get('A1') === 'empty' ? 'full' : 'empty'); //toggle state of A1
                return newMap;
            });
        }, 1000);   //toggle every 1s
        
        return () => clearInterval(interval);
    }, []);

    const [activeTab, setActiveTab] = useState('tab1'); // Default to 'tab1'
    const renderContent = () => {
        if (activeTab === 'tab1') {
            return (
                <div>
                    <h2>Parking Spaces Status - Floor B1</h2>
                    <InfoGraphic mapData={myMap1}/> {/*Dynamic Map*/}
                </div>
            );
        } else if (activeTab === 'tab2') {
            return (
                <div>
                    <h2>Parking Spaces Status - Floor B2</h2>
                    <InfoGraphic mapData={Map2}/> {/*Static Map*/}
                </div>
            );
        }
    };

    return (
        <div>
            <div className="tab-buttons">
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
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Tabs;