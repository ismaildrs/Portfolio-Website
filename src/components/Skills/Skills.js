import React from 'react';
import styles from './Skills.module.css';
import { FaHashtag } from "react-icons/fa6";
import Item from "./components/Item";
import { FaHtml5, FaCss3Alt, FaReact, FaPython, FaPhp } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { SiFirebase, SiDjango, SiJavascript } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

export default function Skills() {
  return (
    <div className={styles.skills} id='skills'>
      <div className={styles.title_section}><FaHashtag /><span>Skills</span></div>
      <div className={styles.desc_section}>
        <Item title="Web Development:" skills={[
          { name: "HTML", icon: <FaHtml5 /> },
          { name: "CSS", icon: <FaCss3Alt /> },
          { name: "Javascript", icon: <SiJavascript /> },
          { name: "ReactJS", icon: <FaReact /> }
        ]} />
        <Item title="Mobile Development:" skills={[
          { name: "Flutter", icon: <RiFlutterFill /> },
          { name: "Firebase", icon: <SiFirebase /> }
        ]} />
        <Item title="Software Development:" skills={[
          { name: "C/C++", icon: <TbBrandCpp /> }
        ]} />
        <Item title="Scripting Languages:" skills={[
          { name: "Python", icon: <FaPython /> }
        ]} />
        <Item title="Database Management:" skills={[
          { name: "PHP", icon: <FaPhp /> },
          { name: "Django", icon: <SiDjango /> }
        ]} />
        <Item title="Concepts and Paradigms:" skills={[
          { name: "OOP", icon: null },
          { name: "Data structures / Algorithms", icon: null }
        ]} />
      </div>
    </div>
  )
}
