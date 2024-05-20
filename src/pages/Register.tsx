import React, { useState } from 'react';
import { criarUsuario, atualizarUsuario } from '../api'; 
import Logo from "../assets/logo-b2.svg"

interface Props {
  userId?: string; 
}

const Register: React.FC<Props> = ({ userId }) => {
  const [id, setId] = useState(userId || '');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (userId) {
      await atualizarUsuario(id, nome, email);
    } else {
      await criarUsuario(id, nome, email);
    }
  };

  return (
    <div className='bg-bg w-full h-screen flex items-center justify-center'>
      <div className='bg-white shadow-2xl rounded-2xl w-[438px] h-[534px] flex flex-col items-center justify-center gap-10'>
        <img 
            alt="logo"
            src={Logo}
            className="w-[310px]"
          />
        <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
          <label className='text-black font-semibold flex flex-col'>
            Nome:
            <input className="bg-gray-200 rounded-lg pl-4 w-[385px] h-[55px]" placeholder='Digite seu nome' type="text" value={nome} onChange={e => setNome(e.target.value)} />
          </label>
          <label className='text-black font-semibold flex flex-col'>
            Email:
            <input className="bg-gray-200 rounded-lg pl-4 w-[385px] h-[55px]" placeholder='Digite seu e-mail' type="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </form>
        <a href='/' className='text-black hover:text-yellow-500'>Já tem uma conta? Acesse agora!</a>
        <a href='/'>
          <button className="h-[54px] w-[385px] bg-blue-950 rounded-lg hover:bg-yellow-500 text-white" type="submit">{userId ? 'Atualizar' : 'Criar'}</button>
        </a>
      </div>
    </div>
  );
};

export default Register;
