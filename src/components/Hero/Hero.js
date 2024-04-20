import React from 'react';
import styles from './Hero.module.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { RiPagesFill } from "react-icons/ri";
import logo from "../../assets/ismail.png";

export default function Hero() {
  return (
    <div className={styles.hero} id="about">
      <div className={styles.profile_img}>
        <img  src={logo} alt="ismail"></img>
      </div>
      <div className={styles.hero_infos}>
        <div className={styles.title_section}>
          <p className={styles.title}>Hey, I am Ismail</p>
          <p className={styles.title_state}>Open to internship</p>
        </div>
        <div className={styles.desc_section}>
          <p className={styles.desc}>Motivated, disciplined and adaptable engineering student. Passionate Software Developper.</p>
        </div>
        <div className={styles.btn_section}>
          <button><a href='https://www.linkedin.com/in/ismaildrs/'><FaLinkedin className={styles.icons}/><span>Linkedin</span></a></button>
          <button><a href='https://github.com/ismaildrs'><FaGithub className={styles.icons}/><span>Github</span></a></button>
          <button><IoMdMail className={styles.icons}/><span>drissiisismail@gmail.com</span></button>
          <button><a href='../../assets/' download='ismail_drissi_cv.pdf'><RiPagesFill className={styles.icons}></RiPagesFill><span>CV</span></a></button>
        </div>
      </div>
    </div>
  )
}
