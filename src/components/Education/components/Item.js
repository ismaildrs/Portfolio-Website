import React,{} from 'react'
import styles from './Item.module.css';

export default function Item({time, desc, more_infos}) {
  return (
    <div className={styles.item}>
      <p className={styles.time}>{time}</p>
      <p className={styles.desc}>{desc}</p>
      <p className={styles.more_info}>{more_infos}</p>
    </div>
  )
}
