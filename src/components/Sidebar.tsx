import Logo from "../assets/logo-b2.svg"


const SideBar = () => {
  return(
    <div className="w-[250px] h-screen absolute z[999] bg-white flex flex-col items-center p-5">
      <img
        alt="logo"
        src={Logo} 
        className="w-[50] flex pb-20"
      />
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-blue-950 font-bold text-lg">Cental de Controle</h1>
        <a href="/profile">
            <span className="text-blue-950 font-semibold hover:text-yellow-500">Perfil</span>
        </a>
        <a href="/users">
          <span className="text-blue-950 font-semibold hover:text-yellow-500">Usuários</span>
      </a>
      </div>
    </div>
  )
}

export default SideBar