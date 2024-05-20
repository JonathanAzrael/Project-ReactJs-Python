import SideBar from "components/Sidebar"
import HeaderBar from "../components/header"

const ProfilePage = () => {
  return(
    <section>
      <HeaderBar />
      <SideBar />
      <div className="bg-bg2 w-full h-screen flex items-center justify-center">
        <div className="bg-bg flex flex-col w-[356px] items-center justify-between p-8 h-[315px]">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-black font-medium">Profile Picture</h1> 
            <img 
              alt=""
              // src={}
              className="w-[56px] h-[56px] rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-black font-semibold">Your Name</h1>
            <input className="bg-gray-200 rounded-lg pl-4 w-[296px] h-[44px] text-black" placeholder="Your Name"></input>
          </div>
          <div>
            <h1 className="text-black font-semibold">Your E-mail</h1>
            <input className="bg-gray-200 rounded-lg pl-4 w-[296px] h-[44px] text-black" placeholder="Your Name"></input>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage