import './faq.sass'
import Title from '../../components/title'
import { faqs } from '../../utils/data'
import useOnScreen from '../../config/viewOnScreen';
import { useState } from 'react';

const Faq = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    const [expandedFaq, setExpandedFaq] = useState(null);

    const toggleFaq = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index);
    };
    return (
        <section className='faq' id='faq'>
            <Title start="Quais são as" span="perguntas mais frequentes" end="?"/>

            <div className="faq_content">
                <div className="faq_question">
                    {faqs.map((faq, index) => (
                        <div key={faq.id} className={`faq_box ${isOnScreen ? 'visible' : ''} ${expandedFaq === index ? 'expanded' : ''}`} ref={ref}  onClick={() => toggleFaq(index)}>
                            <h3 className="faq_ask">
                                <span>{ faq.question }</span>
                                <span className="fa-solid fa-caret-down faq_dropdown_seta"></span>
                            </h3>
                            <div className="faq_answer">
                                <p>{ faq.answer }</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq
