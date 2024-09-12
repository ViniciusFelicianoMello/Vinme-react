import { useState } from 'react';
import './projects.sass';
import Title from '../../components/title';
import { projects } from '../../utils/data';
import useOnScreen from '../../config/viewOnScreen';

const Projects = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

  return (
    <section className='projects' id='projects'>
        <Title start="Nossos" span="projetos" end="já realizados!" url="/projects" />

        <div className={`projects_bg ${isOnScreen ? 'visible' : ''}`} ref={ref}>
            <span className="project_background"></span>
        </div>

        <div className="project_tabs">
            <div className="tab_buttons">
                <button className={`tab_button ${isOnScreen ? 'visible' : ''} ${activeTab === 'tab1' ? 'active' : ''}`} ref={ref} onClick={() => handleTabClick('tab1')}>
                    Desenvolvimento Web
                </button>
                <button className={`tab_button ${isOnScreen ? 'visible' : ''} ${activeTab === 'tab2' ? 'active' : ''}`} ref={ref} onClick={() => handleTabClick('tab2')}>
                    Design Gráfico
                </button>
                <button className={`tab_button ${isOnScreen ? 'visible' : ''} ${activeTab === 'tab3' ? 'active' : ''}`} ref={ref} onClick={() => handleTabClick('tab3')}>
                    Desenvolvimento Back-end
                </button>
            </div>

            <div className="tab_content">
            {activeTab === 'tab1' && (
                <div className={`project_content ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                    <div className="project_img" style={{ backgroundImage: `url(${projects[0].image})` }}></div>
                </div>
            )}
            {activeTab === 'tab2' && (
                <div className={`project_content ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                    <div className="project_img" style={{ backgroundImage: `url(${projects[1].image})` }}></div>
                </div>
            )}
            {activeTab === 'tab3' && (
                <div className={`project_content ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                    <div className="project_img" style={{ backgroundImage: `url(${projects[2].image})` }}></div>
                </div>
            )}
            </div>
        </div>
    </section>
  );
};

export default Projects;
