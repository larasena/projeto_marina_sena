import React, { useState } from 'react'; // Importando useState
import { useForm } from 'react-hook-form';
import './Formulario.css';

function Formulario() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false); // Agora está correto

  const onSubmit = (data) => {
    console.log(data);
    // Atualiza o estado para exibir a mensagem de sucesso
    setIsSubmitted(true);

    // Limpar os campos após o envio
    reset();
    
    // Limitar o tempo de exibição da mensagem de sucesso
    setTimeout(() => setIsSubmitted(false), 5000);
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
        <button type="submit">Enviar</button>
      </form>

      {isSubmitted && (
        <p className="success-message">
          Formulário enviado com sucesso! Sua resposta chegará em aproximadamente 2 dias úteis.
        </p>
      )}
    </section>
  );
}

export default Formulario;
