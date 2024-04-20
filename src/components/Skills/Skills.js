import React from 'react';
import styles from './Skills.module.css';
import { FaHashtag } from "react-icons/fa6";
import Item from "./components/Item";

export default function Skills() {
  return (
    <div className={styles.skills} id='skills'>
      <div className={styles.title_section}><FaHashtag /><span>Skills</span></div>
      <div className={styles.desc_section}>
        <Item title= "Web Development:" skills={["HTML", "CSS", "Javascript", "PHP", "Laravel", "ReactJS", "Django"]} />
        <Item title= "Mobile Development:" skills={["Flutter"]} />
        <Item title= "Software Development:" skills={["C/C++, Python"]} />
        <Item title= "Database Management:" skills={["PHP"]} />
      </div>
    </div>
  )
}
