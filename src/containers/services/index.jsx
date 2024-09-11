import './services.sass'
import Title from '../../components/title';
import useOnScreen from '../../config/viewOnScreen';
import ServiceBox from './components/serviceBox';

const Services = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    return (
        <section className='services' id='services'>
        <Title start="Quais os" span="serviços" end="que fornecemos?" url="/services"/>
        <div className="services_bg">
            <span className={`services_background ${isOnScreen ? 'visible' : ''}`} ref={ref}></span>
            <span className={`services_background ${isOnScreen ? 'visible' : ''}`} ref={ref}></span>
        </div>

        <div className="services_content">
            <ServiceBox />
        </div>
        </section>
    )
}

export default Services
