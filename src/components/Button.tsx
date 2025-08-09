import React, { PropsWithChildren } from "react"
import { IconType } from "react-icons"

interface ButtonProps {
  icon?: IconType
  text?: string | React.ReactNode
  onClick?: () => void
  size?: "sm" | "md"
  variant?: "primary" | "secondary" | "ghost" | "danger"
  disabled?: boolean
  className?: string
  textClassName?: string
  "aria-label"?: string
  iconPosition?: "left" | "right"
  style?: React.CSSProperties
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  text,
  icon: Icon,
  onClick,
  size = "md",
  variant = "primary",
  disabled = false,
  className = "",
  textClassName = "",
  "aria-label": ariaLabel,
  iconPosition = "left",
  style,
}) => {
  const sizeClass = size === "sm" ? "btn-sm" : "btn-md"
  const variantClass = variant === "secondary" ? "btn-secondary" : variant === "ghost" ? "btn-ghost" : "btn-primary"

  const rightPaddingAdjustment = text && (!Icon || iconPosition === "left") ? (size === "sm" ? "pr-1.5" : "pr-2") : ""

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`btn-base
        ${sizeClass} 
        ${variantClass} 
        ${rightPaddingAdjustment} 
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
