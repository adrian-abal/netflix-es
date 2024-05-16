import './App.scss'
import Promo from './components/Promo/Promo'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'

function App() {

  return (
    <>
      <Header />
      <main className="Main">
        <Intro />
        <Promo />
      </main>
    </>
  )
}

export default App
