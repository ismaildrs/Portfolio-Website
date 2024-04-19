import React from 'react';
import { IoLanguageSharp } from "react-icons/io5";
import styles from './Languages.module.css';
import Item from './components/Item';

export default function Languages() {
  return (
    <div className='languages'>
      <div className={styles.title_section}><IoLanguageSharp /><span>Languages</span></div>
      <div className={styles.desc_section}>
        <Item lang="English" desc="Full Proficiency" ratio={0.7} />
        <Item lang="French" desc="Professional Proficiency" ratio={0.5} />
        <Item lang="Arabic" desc="Native" ratio={1} />
      </div>
    </div>
  )
}
