import React from "react"
import { FiUser } from "react-icons/fi"

interface ProfileProps {
  showProfileData?: boolean
  size?: "sm" | "md"
}

export const Profile: React.FC<ProfileProps> = ({ showProfileData = true, size = "md" }) => {
  const iconSize = size === "sm" ? 16 : 20

  const avatarSize = size === "sm" ? "w-8 h-8" : "w-10 h-10"
  const nameSize = size === "sm" ? "text-sm" : "text-base"
  const gapSize = size === "sm" ? "gap-2" : "gap-4"

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
        p-2
        pl-4
        select-none
        ${gapSize}
        `}
    >
      {showProfileData && (
        <div className="text-right">
          <p className={`font-medium text-kudwa-dark ${nameSize}`}>Hello, User</p>
          <p className="text-xs text-gray-500">user@kudwa.com</p>
        </div>
      )}

      <div className={`flex items-center justify-center bg-gray-400 text-white rounded-full ${avatarSize}`}>
        <FiUser size={iconSize} />
      </div>
    </div>
  )
}

export default Profile
