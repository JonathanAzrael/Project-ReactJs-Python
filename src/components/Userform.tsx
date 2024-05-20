// UserForm.tsx
import React, { useState } from 'react';
import { criarUsuario, atualizarUsuario } from '../api'; // Ajuste os caminhos conforme necessário

interface Props {
  userId?: string; // Se userId for fornecido, estamos atualizando um usuário existente
}

const UserForm: React.FC<Props> = ({ userId }) => {
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
    <form onSubmit={handleSubmit}>
      <label>
        ID:
        <input type="text" value={id} onChange={e => setId(e.target.value)} disabled={!!userId} />
      </label>
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </label>
      <button type="submit">{userId ? 'Atualizar' : 'Criar'}</button>
    </form>
  );
};

export default UserForm;
