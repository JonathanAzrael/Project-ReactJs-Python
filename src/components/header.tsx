import Logo from "../assets/logo-b2.svg"


const HeaderBar = () => {
  return(
    <div className="w-full h-[70px] absolute bg-white flex items-center justify-between px-20">
      <img
        alt="logo"
        src={Logo} 
        className="w-[80px]"
      />
      <a href="/">
        <button className="bg-blueb2 h-[44px] w-[272px] rounded-lg">
          <span className="text-white font-semibold">Logout</span>
        </button>
      </a>
    </div>
  )
}

export default HeaderBar