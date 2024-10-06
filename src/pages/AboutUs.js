import React from 'react';
import '../styling/AboutUs.css';

const teamMembers = [
    { name: 'Đức Phú', role: 'Leader', image: '/avatar_Phu.jpg' },
    { name: 'Duy Mạnh', role: 'Device Sensor', image: '/avatar_Manh.jpg' },
    { name: 'Cẩm Ly', role: 'Device Sensor', image: '/avatar_Ly.jpg' },
    { name: 'Ngọc Long', role: 'Web Designer', image: '/avatar_Long.jpg' },
];

const AboutUs = () => {
    return (
        <div className="team-container">
            {/* <div> <h1>Group 15 Members</h1> */}
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
            {/* </div> */}
        </div>
    );
};

export default AboutUs;