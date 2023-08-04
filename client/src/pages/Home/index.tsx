import ChooseUs from './components/ChooseUs'
import Feature from './components/Feature'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonial from './components/Testimonial'
import './styles.css'


const Home = () => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <ChooseUs />
      <Feature />
      <Testimonial />
    </>
  )
}

export default Home
