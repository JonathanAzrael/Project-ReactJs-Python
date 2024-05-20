import SideBar from "components/Sidebar"
import HeaderBar from "../components/header"

import Person1 from "../assets/person1.jpg"
import Person2 from "../assets/person2.jpg"

const ProfilePage = () => {
  return(
    <section>
      <HeaderBar />
      <SideBar />
      <div className="bg-bg2 w-full h-screen flex items-center justify-center">
        <div className="bg-bg flex flex-col w-[1000px] items-start justify-between p-8 h-[600px]">
          <div className="flex flex-col items-start gap-10">
            <h1 className="text-black font-semibold text-2xl">Usuários:</h1> 

            {/* Perfis */}

            {/* Perfil 1 */}
            <div className="flex items-center gap-10">
              <img 
                alt=""
                src={Person1}
                className="w-[100px] h-[100px] rounded-full shadow-lg"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-semibold">Usuário</h1>
                  <h2 className="bg-gray-200 rounded-lg pl-4 w-[296px] h-[44px] text-black font-semibold">José Oliveira</h2>
                </div>
                <div>
                  <h1 className="text-black font-semibold">E-mail</h1>
                  <h2 className="bg-gray-200 rounded-lg pl-4 w-[296px] h-[44px] text-black font-semibold">joseoliveira@gmail.com</h2>
                </div>
              </div>
            </div>

            {/* Perfil 2 */}
            <div className="flex items-center gap-10">
              <img 
                alt=""
                src={Person2}
                className="w-[100px] h-[100px] rounded-full shadow-lg"
              />
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <h1 className="text-black font-semibold">Usuário</h1>
                  <h2 className="bg-gray-200 rounded-lg pl-4 w-[296px] h-[44px] text-black font-semibold">Marcos Nonato</h2>
                </div>
                <div>
                  <h1 className="text-black font-semibold">E-mail</h1>
                  <h2 className="bg-gray-200 rounded-lg pl-4 w-[296px] h-[44px] text-black font-semibold">nonatomarcos@gmail.com</h2>
                </div>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage