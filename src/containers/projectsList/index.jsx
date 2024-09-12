import useOnScreen from '../../config/viewOnScreen';
import React, { useState, useEffect } from 'react';
import './projectList.sass'
import { projectsList } from '../../utils/data';

const ProjectList = () => {
    const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
    const [activeModal, setActiveModal] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    // Função para abrir o modal
    const abrirModal = (index) => {
        setActiveModal(index);
        setSelectedImageIndex(0);
    };

    // Função para fechar o modal
    const fecharModal = () => {
        setActiveModal(null);
    };

    // Fechar modal ao pressionar "Esc"
    useEffect(() => {
        const handleEsc = (event) => {
        if (event.key === "Escape" || event.key === "Esc") {
            fecharModal();
        }
        };

        document.addEventListener("keydown", handleEsc);
        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, []);

     // Função para atualizar a imagem principal do carrossel
     const updateCarrouselItem = (project) => {
        return project.images[selectedImageIndex];
    };

    // Função para selecionar a imagem
    const selectImage = (index) => {
        setSelectedImageIndex(index);
    };

    // Evento para botão "prev"
    const handlePrevClick = (project) => {
        let newIndex = selectedImageIndex - 1;
        if (newIndex < 0) newIndex = project.images.length - 1;
        selectImage(newIndex);
    };

    // Evento para botão "next"
    const handleNextClick = (project) => {
        let newIndex = selectedImageIndex + 1;
        if (newIndex >= project.images.length) newIndex = 0;
        selectImage(newIndex);
    };

    return (
        <section className='projectList' id='projectsList'>
            <div className={`projects_bg_2 ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                <span className="project_background"></span>
            </div>

            <div className={`projectList_list ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                {projectsList.map((project, index) => (
                    <React.Fragment key={project.id}>
                        <div key={project.id} className="projectList_item">
                            <div className="projectList_box" style={{ backgroundImage: `url(${project.image})` }}>
                                <span className="vermais" onClick={() => abrirModal(index)}>Ver mais <i className="fa-solid fa-circle-right"></i></span>
                            </div>
                        </div>
                        {activeModal === index && (
                            <div className="projectList_modal">
                                <div className={`projectList_carrousel ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                                    <span className="projectList_modal_close" onClick={fecharModal}>&times;</span>
                                    <div className="projectList_carrousel_item" style={{ backgroundImage: `url(${updateCarrouselItem(project)})` }}></div>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <i className="fa-solid fa-link"></i> Visitar
                                    </a>
                                </div>

                                <div className="projectList_carrousel_images visible">
                                    {project.images.map((image, imgIndex) => (
                                        <div 
                                            key={imgIndex} 
                                            className={`projectList_carrousel_img ${selectedImageIndex === imgIndex ? 'selected' : ''}`} 
                                            style={{ backgroundImage: `url(${image})` }}
                                            onClick={() => selectImage(imgIndex)}
                                        ></div>
                                    ))}
                                </div>

                                <div className="carrousel_btn">
                                    <button id="prev_carrousel" onClick={() => handlePrevClick(project)}><i className="fa-solid fa-angle-left"></i></button>
                                    <button id="next_carrousel" onClick={() => handleNextClick(project)}><i className="fa-solid fa-angle-right"></i></button>
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}

export default ProjectList