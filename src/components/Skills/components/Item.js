import React from 'react';
import styles from './Item.module.css';

export default function Item({ title, skills }) {
  return (
    <div className={styles.skills_item}>
      <p className={styles.title}>{title}</p>
      <div className={styles.skills}>
        {skills.map((element, index) => 
          <span className={styles.skill_title} key={index}>
            {element.icon}
            <span>{element.name}</span>
          </span>
        )}
      </div>
    </div>
  );
}
