import React from 'react';
import styles from './Projects.module.css';
import ProjectItem from './components/ProjectItem';
import { MdConstruction } from "react-icons/md";
import project1 from "../../assets/project_1.png";
import project2 from "../../assets/project_1_1.png";
import project3 from "../../assets/project_1_2.png";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.title_section}><MdConstruction /><span>Projects</span></div>
        <ProjectItem title="Personal Portfolio" img={project1} />
        <ProjectItem title="Game Video: Tetris" img={project2} />
    </div>
  )
}
