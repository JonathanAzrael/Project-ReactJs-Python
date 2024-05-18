import React from "react"
import Logo from "../assets/logo-b2.svg"
import UserManagement from "components/UserManager";



// const data = {
//   user: {
//     id: 4,
//     name: "Cliente",
//     email: "cliente@youdrive.com",
//     is_active: true,
//     avatar: null,
//     type: "StoreUser",
//     created: "2023-09-20T11:42:54.515946-03:00",
//     modified: "2024-04-26T11:45:26.768591-03:00",
//     role: "OWNER"
//   },
//   tokens: {
//     refresh: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTc0Njg4MTc0NywiaWF0IjoxNzE1MzQ1NzQ3LCJqdGkiOiIyMTRkOTEyNmJhYWY0YzY1ODMwYzcxODU4ZWNkYjdiNSIsInVzZXJfaWQiOjR9.22g5QzHO5SoN92dNYQV67oWVN8uV42Q8-c4qT_3lrHs",
//     access: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NDMyMTQ3LCJpYXQiOjE3MTUzNDU3NDcsImp0aSI6IjAyZTBmZTY2YmQ2MDRkMmY5MjJhNGRiMzIxNmFiYzU2IiwidXNlcl9pZCI6NH0.L4H2FEKlhM5RXeqX0o0xiszBYe5uH7SyEABAnhOSf1A"
//   }
// };


const HomePage: React.FC = () => {
  return(
    <section className="">
      <div className="bg-bg w-full h-screen flex items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl w-[438px] h-[534px] flex flex-col items-center justify-center gap-10">
          <img 
            alt="logo"
            src={Logo}
            className="w-[310px]"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">E-mail</h1>
              <input className="bg-gray-200 rounded-lg pl-4 w-[385px] h-[55px]" placeholder="@gmail.com"></input>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Password</h1>
              <input className="bg-gray-200 rounded-lg pl-4 w-[385px] h-[55px]" placeholder="***************"></input>
            </div>
          </div>
          <UserManagement />
          <a href="/profile">
            <button className="h-[54px] w-[385px] bg-blue-950 rounded-lg">
                <span className="text-white font-semibold">Sign In</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomePage