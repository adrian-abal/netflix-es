import './App.scss'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import Promo from './components/Promo/Promo'
import Mediahub from './components/Mediahub/Mediahub'
import Pricing from './components/Pricing/Pricing'
import Faq from './components/Faq/faq'

function App() {

  return (
    <>
      <Header />
      <main className="Main">
        <Intro />
        <Promo />
        <Mediahub />
        <Pricing />
        <Faq />
      </main>
    </>
  )
}

export default App
