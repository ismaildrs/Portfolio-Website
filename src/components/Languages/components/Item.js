import React from 'react'
import styles from './Item.module.css';

export default function Item({lang, desc, ratio}) {
  return (
    <div className={styles.language_item}>
      <p className={styles.title}>{lang} - {desc}</p>
      <div className={styles.ratio} style={{width: `${ratio*100}%`}}></div>
    </div>
  )
}
