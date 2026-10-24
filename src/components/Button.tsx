import React from 'react'

export const Button = ({ children, styles, type = "primary", handleClick }: { children: React.ReactNode; styles?: string; type?: "primary" | "secondary" ; handleClick:()=>void}) => {
  const isPrimary = type === "primary"
  return (
    <button onClick={handleClick} className={`cursor-pointer rounded-lg ${isPrimary?"bg-brand text-white p-3 hover:bg-brand-hover": "border-border border-2 p-3 hover:bg-[#F7F7F7]"}  transition ${styles} `}>
      {children}
    </button>
  )
}
