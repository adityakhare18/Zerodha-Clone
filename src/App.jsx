import './App.css'
import Footer from './Component/Footer'
import HomePage from './Component/HomePage'
import Navigation from './Component/Navigation'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import SmallContent from './Component/SmallContent'

function App() {

  return (
    <>
      <Navigation />
      <HomePage />
      <Section2 />
      <Section3 />
      <SmallContent
      heading = "Open a Zerodha account"
      para = "Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades." 
      />
      <Footer />
    </>
  )
}

export default App
