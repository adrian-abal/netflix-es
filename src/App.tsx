import './App.scss'
import Promo from './components/Promo/Promo'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Mediahub from './components/Mediahub/Mediahub'

function App() {

  return (
    <>
      <Header />
      <main className="Main">
        <Intro />
        <Promo />
        <Mediahub />
      </main>
    </>
  )
}

export default App
