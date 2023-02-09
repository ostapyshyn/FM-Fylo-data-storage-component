import styles from './About.module.scss'
import upload from '../../assets/icon-upload.svg'
import doc from '../../assets/icon-document.svg'
import folder from '../../assets/icon-folder.svg'
import logo from '../../assets/logo.svg'

export default function About() {
  return (
    <section className={styles.fylo}>
      <img src={logo} alt="logo" className={styles.logo} />
      <div className={styles.images}>
        <div className={styles.image}>
          <img src={doc} alt="doc" />
        </div>
        <div className={styles.image}>
          <img src={folder} alt="folder" />
        </div>
        <div className={styles.image}>
          <img src={upload} alt="upload" />
        </div>
      </div>
    </section>
  )
}
