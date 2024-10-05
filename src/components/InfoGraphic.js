import React from 'react'
import '../styling/InfoGraphic.css'



const InfoGraphic = ({ mapData }) => {
    const getColor = (key) => {
        if (mapData.get(key) === 'full') return 'red';
        else return 'white';
    };
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {Array.from(mapData.keys()).map((key) => (
                    <div key={key} style={{ backgroundColor: getColor(key), border: '1px solid black', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {key}
                    </div>
                ))}
            </div>
            <div className="footnote">
                <div className="footnote-item">
                    <div className="footnote-color" style={{ backgroundColor: 'red' }}></div>
                    <span style={{ color: 'red' }}>Reserved</span>
                </div>
                <div className="footnote-item">
                    <div className="footnote-color" style={{ backgroundColor: 'white' }}></div>
                    <span>Empty</span>
                </div>
            </div>
        </div>
    );
};

export default InfoGraphic;