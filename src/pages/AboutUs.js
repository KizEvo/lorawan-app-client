import React from 'react';
import '../styling/AboutUs.css';
import model_3d from '../assets/model3D.mp4'

const teamMembers = [
    { name: 'Đức Phú', role: 'Leader/Advisor', image: '/avatar_Phu.jpg' },
    { name: 'Duy Mạnh', role: 'MC Programmer', image: '/avatar_Manh.jpg' },
    { name: 'Cẩm Ly', role: 'Sensor Device', image: '/avatar_Ly.jpg' },
    { name: 'Ngọc Long', role: 'Web Designer', image: '/avatar_Long.jpg' },
];

const AboutUs = () => {
    return (
        <div>
            <div className="team-container">
                <header>
                    <h1>Group 15</h1>
                </header>
                <p>Topic: "LoraWAN's Application in IoT" - Dependable Parking Lot</p>
                <h2 className="header">Members</h2>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img
                                src={member.image}
                                alt={`${member.name}'s avatar`}
                                className="avatar"
                            />
                            <div className="member-info">
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="header">Prototype Model</h2>
                <video className="video-model" controls width="650px">
                    <source src={model_3d} type="video/mp4" />
                </video>
                <p className="dynamic-margin"> DPL is an IoT model for parking lot management.
                    Through the website, we can know the status of the parking lot,
                    vacant spaces and reserved spaces. Our SPL system is built with
                    STM microcontroller adapted with HC-SR04 ultrasonic sensor,
                    data is transmitted through LoRa module and synchronized with
                    the website database.
                </p>
                
            </div>
        </div>
    );
};

export default AboutUs;