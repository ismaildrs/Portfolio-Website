import React from 'react';
import styles from './Skills.module.css';
import { FaHashtag } from "react-icons/fa6";
import Item from "./components/Item";

export default function Skills() {
  return (
    <div className={styles.skills} id='skills'>
      <div className={styles.title_section}><FaHashtag /><span>Skills</span></div>
      <div className={styles.desc_section}>
        <Item title= "Web Development:" skills={["HTML", "CSS", "Javascript", "ReactJS"]} />
        <Item title= "Mobile Development:" skills={["Flutter", "Firebase"]} />
        <Item title= "Software Development:" skills={["C/C++"]} />
        <Item title= "Scripting Languages:" skills={["Python"]} />
        <Item title= "Database Management:" skills={["PHP", "Django"]} />
        <Item title= "Concepts and Paradigms:" skills={["OOP", "Data structures / Algorithms"]} />
      </div>
    </div>
  )
}
