import React, { useState } from 'react'; 
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'; // Importando EmailJS
import './Formulario.css';

function Formulario() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controle da mensagem de sucesso
  const [isSending, setIsSending] = useState(false); // Estado para controle do envio
  const [isError, setIsError] = useState(false); // Estado para controle de erro no envio

  const onSubmit = (data) => {
    if (isSending) return;  // Impede múltiplos envios

    setIsSending(true);  // Marca que o envio está em andamento
    setIsSubmitted(false); // Reseta a mensagem de sucesso
    setIsError(false); // Reseta o erro antes de tentar enviar novamente

    // Enviar os dados via EmailJS
    emailjs
      .send(
        "service_5u8zprk", // Substitua pelo seu Service ID
        "template_mvhlqru", // Substitua pelo seu Template ID
        {
          nome: data.nome,
          telefone: data.telefone,
          email: data.email,
          mensagem: data.mensagem,
        },
        "Tg_Eaw7lbzth2tLyA" // Substitua pelo seu User ID
      )
      .then(
        (result) => {
          console.log('E-mail enviado com sucesso:', result.text);
          setIsSubmitted(true); // Exibe a mensagem de sucesso
          reset(); // Limpa os campos
        },
        (error) => {
          console.error('Erro ao enviar e-mail:', error.text);
          setIsError(true); // Exibe a mensagem de erro
        }
      )
      .finally(() => {
        setIsSending(false); // Permite novos cliques após o envio
      });
  };

  return (
    <section className='form_section' id='contato'>
      <h1>Formulário de contato</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register('nome', { required: true })}
          placeholder="Digite seu nome completo"
        />
        <input
          type="tel"
          {...register('telefone', { required: true })}
          placeholder="Digite seu telefone"
        />
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Digite seu email principal"
        />
        <textarea
          {...register('mensagem', { required: true })}
          placeholder="Escreva sua mensagem"
        />
        <button type="submit" disabled={isSending}>Enviar</button>  {/* Desabilita o botão enquanto o envio está em andamento */}
      </form>

      {isSending && <p>Enviando...</p>} {/* Exibe a mensagem de "Enviando..." enquanto o envio está em andamento */}

      {isSubmitted && !isError && (
        <p className="success-message">
          Formulário enviado com sucesso! Sua resposta chegará em aproximadamente 48h úteis.
        </p>
      )}

      {isError && (
        <p className="error-message">
          Ocorreu um erro ao enviar o formulário. Tente novamente.
        </p>
      )}
    </section>
  );
}

export default Formulario;
