import React from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

export default function About({ main, isPro }) {
  // const result = clsx({
  //   link: true,
  //   'link-primary': false,
  // })

  const style = clsx(styles.button, {
    [styles.pro]: isPro,
  })

  return <button className={style}>Learn more</button>
}
