/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import useOnScreen from '../../config/viewOnScreen'
import './title.sass'

const Title = ({ to, start, span, end, url }) => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    if (to) {
        return (
            <div className='title'>
                <h2 className={` section_title ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                    {start} <Link to={url}>{span}</Link> {end}
                </h2>
            </div>
        )
    }


    return (
        <div className='title'>
            <h2 className={` section_title ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                {start} <span>{span}</span> {end}
            </h2>
        </div>
    )
    }

export default Title
