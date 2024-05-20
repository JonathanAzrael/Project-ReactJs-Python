import React,  { useState } from "react"
import Logo from "../assets/logo-b2.svg"


// Página inicial - Tela de Login
const HomePage: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(
    <section>
      <div className="bg-bg w-full h-screen flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl w-[438px] h-[534px] flex flex-col items-center justify-center gap-8">
          <img 
            alt="logo"
            src={Logo}
            className="w-[310px]"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">E-mail</h1>
              <input className="bg-gray-200 rounded-lg pl-4 w-[385px] h-[55px]" placeholder="@gmail.com" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Senha</h1>
              <input className="bg-gray-200 rounded-lg pl-4 w-[385px] h-[55px]" placeholder="***************" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <a href="/register" className="text-black hover:text-yellow-500">
            Não tem uma conta ainda? Clique aqui!
          </a>
          <a href="/profile">
            <button className="h-[54px] w-[385px] bg-blue-950 rounded-lg hover:bg-yellow-500">
                <span className="text-white font-semibold">Acessar</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePage