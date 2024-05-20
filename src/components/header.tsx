


const HeaderBar = () => {
  return(
    <div className="w-full h-[70px] absolute bg-white flex items-center justify-end px-20">
      <a href="/">
        <button className="bg-blueb2 hover:bg-yellow-500 h-[44px] w-[272px] rounded-lg">
          <span className="text-white font-semibold">Logout</span>
        </button>
      </a>
    </div>
  )
}

export default HeaderBar