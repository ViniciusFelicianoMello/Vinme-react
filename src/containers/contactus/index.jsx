import Button from '../../components/button';
import FormField from '../../components/formField';
import Title from '../../components/title'
import useOnScreen from '../../config/viewOnScreen';
import { vinme_infos } from '../../utils/data';
import { Link } from 'react-router-dom'
import './contactUs.sass'
import { useState } from 'react';

const ContactUs = () => {
  const [isOnScreen, ref] = useOnScreen({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'DUVIDA',
    message: ''
  });

  // Atualizar os campos do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Enviar os dados do formulário para o Formspree
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://formspree.io/f/xblrvjro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          alert('Mensagem enviada com sucesso!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          alert('Houve um erro ao enviar a mensagem.');
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao enviar o formulário');
      });
  };

  return (
    <section className='contact' id='contact'>
      <Title start="Entre em" span="contato" end="conosco!" url="/contact" />

      <div className="contact_content">
        <div className={`contact_box ${isOnScreen ? 'visible' : ''}`} ref={ref}>
          <form onSubmit={handleSubmit} id='contact_form' className='contact_form'>
            <h3>Envie-nos um <span>email</span>!</h3>
            <FormField input type="text" labelFor="name" label="Nome" icon="fa-solid fa-user" value={formData.name} onChange={handleChange} />
            <FormField input type="email" labelFor="email" label="Email" icon="fa-solid fa-envelope" value={formData.email} onChange={handleChange} />
            <FormField select labelFor="subject" label="Assunto" icon="fa-solid fa-hashtag" value={formData.subject}
                  options={[
                    { value: 'DUVIDA', label: 'Dúvida' },
                    { value: 'ORCAMENTOS', label: 'Orçamento' },
                    { value: 'PROJETOS', label: 'Projeto' },
                    { value: 'FEEDBACK', label: 'Feedback' },
                    { value: 'SUGESTAO', label: 'Sugestão' },
                    { value: 'BUG', label: 'Bug' },
                    { value: 'OUTROS', label: 'Outros' }
                ]} onChange={handleChange} /> 
            <FormField textarea type="text" labelFor="message" label="Mensagem" icon="fa-solid fa-comment" value={formData.message} onChange={handleChange} />

            <div className="flex">
              <Button type='reset' classe="link">
                Limpar
              </Button>
              <Button type='submit' classe="button">
                Enviar
              </Button>
            </div>
          </form>

          <div className="contact_infos">
            <ul>
              {vinme_infos.map(link => (
                <li key={link.id}>
                  <Link to={link.url} target={link.target}>
                    <i className={link.icon}></i>
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
