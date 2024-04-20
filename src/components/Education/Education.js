import React from 'react';
import styles from './Education.module.css';
import { FaGraduationCap } from "react-icons/fa";
import Item from './components/Item';

export default function Education() {
  return (
    <div className={styles.education} id='education'>
      <div className={styles.title_section}><FaGraduationCap /><span>Education</span></div>
      <div className={styles.desc_section}>
        <div className={styles.design}>
        </div>
        <div className={styles.section_items}>
          <Item time="Sep 2023 - Today" desc="Software and Distributed Computer Systems Engineering" more_infos="ENSET Mohammmedia"/>
          <Item time="Sep 2021 - Jul 2023" desc="DEUST" more_infos="FST Fès"/>
        </div>
      </div>
    </div>
  )
}
