// HomePage.tsx
import React, { useState } from 'react';
import { loginUser } from '../api'; 

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await loginUser(username, password);
      console.log('Login success:', response);
      // Adicione a lógica para redirecionar o usuário ou mostrar informações
    } catch (error) {
      console.error('Login failed:', error);
      // Adicione a lógica para lidar com falha de login
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
