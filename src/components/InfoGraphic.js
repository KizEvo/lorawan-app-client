import React from 'react';

const InfoGraphic = ({ mapData }) => {
    const getColor = (key) => {
        return mapData.get(key) === 'full' ? 'red' : 'white';
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', rowGap: '30px', columnGap: '100px'}}>
                {Array.from(mapData.keys()).map((key) => (
                    <div key={key} style={{ backgroundColor: getColor(key), border: '1px solid black', width: '100px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {key}
                    </div>
                ))}
            </div>
            {/* Below is Foot Note */}
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
                <div style={{ display: 'inline-block', marginRight: '20px' }}>
                    <div style={{ backgroundColor: 'red', width: '50px', height: '25px', display: 'inline-block', verticalAlign: 'middle' }}></div>
                    <span style={{ marginLeft: '10px', color: 'red' }}>Already full</span>
                </div>
                <div style={{ display: 'inline-block' }}>
                    <div style={{ backgroundColor: 'white', width: '50px', height: '25px', display: 'inline-block', verticalAlign: 'middle', border: '1px solid black' }}></div>
                    <span style={{ marginLeft: '10px', color: 'black' }}>Empty</span>
                </div>
            </div>
        </div>
    );
};

export default InfoGraphic;