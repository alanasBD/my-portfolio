import React from 'react';
import about from '../icons/about.png';
import Skill from './Skill';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-lg-6">
                        <h2 className='mb-3'>About MySelf</h2>
                        <p>I am a self-taught MERN Stack web developer. I have Skills in web technology and I developed Full-Stack websites and applications using MongoDB, Express, React.js, Node.js with Firebase Authentication. I have a passion for building user-friendly responsive websites and applications. I actively seek out new technologies and stay up-to-date on industry trends and advancements.</p>
                    </div>
                    <div className="col-lg-6 text-center mt-2">
                        <img style={{width:"400px"}} src={about} alt="" />
                    </div>
                </div>
                <Skill></Skill>
            </div>
        </div>
    );
};

export default About;