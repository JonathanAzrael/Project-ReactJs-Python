import React, { useState, useEffect } from 'react';
import { criarUsuario, listarUsuarios, atualizarUsuario, excluirUsuario } from '../api';
import { Usuario } from '../types';

const UserManagement: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Record<string, Usuario>>({});
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUsuarios = async () => {
      const data = await listarUsuarios();
      setUsuarios(data);
    };
    fetchUsuarios();
  }, []);

  const handleCriarUsuario = async () => {
    await criarUsuario(id, nome, email);
    const data = await listarUsuarios();
    setUsuarios(data);
  };

  const handleAtualizarUsuario = async (id: string) => {
    await atualizarUsuario(id, nome, email);
    const data = await listarUsuarios();
    setUsuarios(data);
  };

  const handleExcluirUsuario = async (id: string) => {
    await excluirUsuario(id);
    const data = await listarUsuarios();
    setUsuarios(data);
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1 className=" font-bold text-lg">Gerenciamento de Usuários</h1>
      {/* <div>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleCriarUsuario}>Criar Usuário</button>
      </div> */}
      <ul>
        {Object.keys(usuarios).map((key) => (
          <li key={key}>
            <div className='flex flex-col gap-4 font-bold'>
              ID: {usuarios[key].id}, 
              Nome: {usuarios[key].nome}, 
              Email: {usuarios[key].email}
            </div>
            <div className='flex gap-4 items-center justify-between'>
              <button onClick={() => handleAtualizarUsuario(key)} className='w-[100px] h-[30px] bg-blue-950 rounded-lg text-white'>Atualizar</button>
              <button onClick={() => handleExcluirUsuario(key)} className='w-[100px] h-[30px] bg-blue-950 rounded-lg text-white'>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
