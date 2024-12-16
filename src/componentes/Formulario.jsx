import React from 'react';
import { useForm } from 'react-hook-form';
import './Formulario.css';

function Formulario() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Aqui você pode enviar os dados para um servidor ou realizar outra ação

    // Limpar os campos após o envio
    reset();
  };

  return (
    <section className='form_section'>
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
    </section>
  );
}

export default Formulario;
