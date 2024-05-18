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
    <button onClick={handleClick} className='w-[200px] h-[80px] bg-green-300'>Carregar Usuários</button>
  );
};

export default ListUsersButton;
