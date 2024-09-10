/* eslint-disable react/prop-types */
import './about_infos.sass'
import useOnScreen from '../../../../config/viewOnScreen'

const AboutInfos = ({ icon, text, highlight, our }) => {
  const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  return (
    <div className={`about_infos_box ${isOnScreen ? 'visible' : ''}`} ref={ref}>
      <i className={icon}></i>
      <p>{our} <span>{highlight}</span> {text}</p>
    </div>
  )
}

export default AboutInfos
