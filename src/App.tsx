import './index.css'
import { Header, Hero, Vehicle, Chauffeur, Services, Booking, Footer } from './components'

function App() {
  return (
    <div className="bg-[#09111d]">
      <Header />
      <Hero />
      <Vehicle />
      <Chauffeur />
      <Services />
      <Booking />
      <Footer />
    </div>
  )
}

export default App
