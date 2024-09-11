import AboutUs from '../../containers/aboutus'
import Banner from '../../containers/banner'
import Services from '../../containers/services'
import './home.sass'

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Services />
    </main>
  )
}

export default Home
