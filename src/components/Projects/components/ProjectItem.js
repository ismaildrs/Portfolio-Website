import React from 'react'
import styles from './ProjectItem.module.css'

export default function ProjectItem({title, img}) {
  return (
    <div className={styles.project_item}>
        <p className={styles.title}>{title}</p>
        <div className={styles.image_box}>
         
            <div className={styles.gradient}></div>
            <img className={styles.project_img} src={img} alt="Project"/>
       
        </div>
    </div>
  )
}
