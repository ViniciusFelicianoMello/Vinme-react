import AboutUs from '../../containers/aboutus'
import Banner from '../../containers/banner'
import ContactUs from '../../containers/contactus'
import Projects from '../../containers/projects'
import Services from '../../containers/services'
import './home.sass'

const Home = () => {
  return (
    <main>
      <Banner />
      <AboutUs />
      <Services />
      <Projects />
      <ContactUs />
    </main>
  )
}

export default Home
