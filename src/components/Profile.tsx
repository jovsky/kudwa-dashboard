import React from "react"
import { FiUser } from "react-icons/fi"

export const Profile: React.FC = () => {
  return (
    <div
      className={`
        flex 
        items-center 
        cursor-pointer 
        shadow-soft-left
        border-2
        border-kudwa-brown-400
        bg-kudwa-light
        rounded-3xl
        py-1
        pl-4
        pr-2
        md:pr-1
        select-none
        md:gap-4 gap-2
        `}
    >
      {
        <div className="text-right">
          <p className={`font-medium text-kudwa-dark md:text-base text-sm`}>Hello, User</p>
          <p className="text-xs text-gray-500">user@kudwa.com</p>
        </div>
      }

      <div
        className={`flex items-center justify-center bg-gray-400 text-white rounded-full 
        md:w-10 md:h-10 w-8 h-8`}
      >
        <FiUser size={20} />
      </div>
    </div>
  )
}

export default Profile
