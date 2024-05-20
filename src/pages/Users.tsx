import ListUsersButton from "components/ListButton"
import HeaderBar from "../components/header"
import SideBar from "components/Sidebar"
import UserManagement from "components/UserManager"

const Users = () => {
  return(
    <section>
      <HeaderBar />
      <SideBar />
      <div className="bg-bg2 w-full h-screen flex items-center justify-center">
        <div className="bg-bg flex flex-col w-[850px] items-center justify-between p-8 h-[315px]">
          <UserManagement />
          
          <ListUsersButton />
        </div>
      </div>
    </section>
  )
}

export default Users