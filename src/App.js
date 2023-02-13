import About from './components/About/About'
import Storage from './components/Storage/Storage'
import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <main>
        <About />
        <Storage />
      </main>
    </div>
  )
}

export default App
