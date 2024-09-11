import React, { useState, useEffect } from 'react';
import useOnScreen from '../../../../config/viewOnScreen';
import { services } from '../../../../utils/data';
import './serviceBox.sass';

const ServiceBox = () => {
  const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  const [activeModal, setActiveModal] = useState(null);

  // Função para abrir o modal
  const abrirModal = (index) => {
    setActiveModal(index);
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

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      {services.map((service, index) => (
        <React.Fragment key={service.id}>
          <div className={`services_box ${isOnScreen ? 'visible' : ''}`} ref={ref}>
            <i className={`${service.icon} services_box_icon`}></i>
            <h3>{service.title}</h3>
            <span className="vermais" onClick={() => abrirModal(index)}>Ver mais <i className="fa-solid fa-circle-right"></i></span>
          </div>

          {activeModal === index && (
            <div className="services_modal">
              <div className={`services_modal_card ${isOnScreen ? 'visible' : ''}`} ref={ref}>
                <span className="services_modal_close" onClick={fecharModal}> &times;</span>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <i className={service.icon}></i>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

export default ServiceBox;
