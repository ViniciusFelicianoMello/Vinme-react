import { info_boxes } from '../../../utils/data';
import useOnScreen from '../../../config/viewOnScreen';
import './banner_infos.sass'

const BannerInfos = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    return (
        <>
            {info_boxes.map(info => (
                <div className={`banner_infos_box ${isOnScreen ? 'visible' : ''}`} ref={ref} key={info.id}>
                    <div className="banner_infos_img">
                        <div className="banner_infos_ovl">
                            <img src={info.img} alt={info.alt} />
                            <div className="bannner_infos_icon">
                                <i className={info.icon}></i>
                            </div>
                            <h3>{info.title}</h3>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BannerInfos
