// ListUsersButton.tsx
import React from 'react';
import { listarUsuarios } from '../api'; // Ajuste o caminho conforme necessário

const ListUsersButton: React.FC = () => {
  const handleClick = async () => {
    try {
      const usuarios = await listarUsuarios();
      console.log('Usuários carregados:', usuarios);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  return (
    <button onClick={handleClick} className='h-[54px] w-[385px] bg-blue-950 rounded-lg hover:bg-yellow-500 text-white'>Carregar Usuários</button>
  );
};

export default ListUsersButton;
