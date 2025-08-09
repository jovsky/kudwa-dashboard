import React, { PropsWithChildren } from "react"
import { IconType } from "react-icons"

interface ButtonProps {
  icon?: IconType
  text?: string | React.ReactNode
  onClick?: () => void
  size?: "sm" | "md"
  variant?: "primary" | "secondary" | "tertiary" | "ghost" | "danger"
  disabled?: boolean
  className?: string
  "aria-label"?: string
  iconPosition?: "left" | "right"
  style?: React.CSSProperties
}

const sizeClassOptions = {
  sm: "btn-sm",
  md: "btn-md",
}
const variantClassOptions = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  tertiary: "btn-tertiary",
  ghost: "btn-ghost",
  danger: "btn-danger",
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  text,
  icon: Icon,
  onClick,
  size = "md",
  variant = "primary",
  disabled = false,
  className = "",
  "aria-label": ariaLabel,
  iconPosition = "left",
  style,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`btn-base
        ${sizeClassOptions[size]} 
        ${variantClassOptions[variant]} 
        ${className}`}
      style={style}
    >
      {Icon && iconPosition === "left" && <Icon />}
      {text}
      {Icon && iconPosition === "right" && <Icon />}
    </button>
  )
}

export default Button
