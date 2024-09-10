import './history.sass'
import useOnScreen from '../../config/viewOnScreen'
import Title from '../../components/title';
import HistorySplit from './components/history_split';
import { history } from '../../utils/data';

const History = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    return (
        <section className='history' id='history'>
            <Title start="Descubra um pouco da nossa" span="história" />
            <div className={`history_time ${isOnScreen ? 'visible' : ''}`} ref={ref}>

                <div className="history_start">
                    <h3>Início</h3>
                    <div className="history_start_info">
                        <h4 className="history_start_info_title">2024</h4>
                        <p className="history_start_info_text">Iniciamos nossa jornada</p>
                    </div>
                </div>

                <div className="history_content">
                    <HistorySplit events={history} />
                </div>

            </div>
        </section>
    )
}

export default History
