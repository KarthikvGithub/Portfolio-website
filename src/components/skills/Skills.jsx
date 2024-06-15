import React from 'react';
import "./skills.css";
import Frontend from './Frontend';
import Backend from './Backend';
import Electrical from './Electrical';
import Others from './Others';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Technical Knowledge</span>
        
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
            <Electrical />
            <Others />
        </div>
    </section>
  )
}

export default Skills;