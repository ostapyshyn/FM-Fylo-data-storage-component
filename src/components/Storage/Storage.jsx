import React from 'react'
import styles from './Storage.module.scss'

export default function Storage({ main, isPro }) {
  return (
    <section className={styles.storage}>
      <p className={styles.used}>
        You’ve used <span>815 GB</span> of your storage
      </p>
      <div className={styles.bar}>
        <div className={styles.space}>
          <div className={styles.dot}></div>
        </div>
      </div>
      <div className={styles.range}>
        <span>0 GB</span>
        <span>1000 GB</span>
      </div>
      <div className={styles.alert}>
        <p className={styles.number}></p>
        <span className={styles.gb}>GB LEFT</span>
      </div>
    </section>
  )
}
