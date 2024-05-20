import ListUsersButton from "components/ListButton"
import HeaderBar from "../components/header"
import SideBar from "components/Sidebar"
import UserInfo from "components/UserInfo"

const Users = () => {
  return(
    <section>
      <HeaderBar />
      <SideBar />
      <div className="bg-bg2 w-full h-screen flex items-center justify-center">
        <div className="bg-bg flex flex-col w-[1000px] items-start justify-between p-8 h-[700px]">
          <h3  className="text-black font-semibold text-2xl">Gerenciamento de Usuários</h3>
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <UserInfo 
                user={{
                  id: 1,
                  name: "José Oliveira",
                  email: "joseoliveira@example.com",
                  is_active: true,
                  avatar: null,
                  type: "Admin",
                  created: "2021-01-01T00:00:00Z",
                  modified: "2021-01-02T00:00:00Z",
                  role: "Administrator"
                }} 
              />
              <button className="h-[54px] w-full text-white bg-blue-950 rounded-lg hover:bg-yellow-500">Deletar Usuário</button>
            </div>
            <div className="flex flex-col items-center">
              <UserInfo 
              user={{
                id: 1,
                name: "Marcos Nonato",
                email: "nonatomarcos@gmail.com",
                is_active: true,
                avatar: null,
                type: "Admin",
                created: "2021-01-01T00:00:00Z",
                modified: "2021-01-02T00:00:00Z",
                role: "Administrator"
                }} 
              />
              <button className="h-[54px] w-full text-white bg-blue-950 rounded-lg hover:bg-yellow-500">Deletar Usuário</button>
            </div>
          </div>
          <ListUsersButton />
        </div>
      </div>
    </section>
  )
}

export default Users