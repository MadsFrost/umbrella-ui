import React from 'react'

export interface KbdProps {
    children: React.ReactNode | string;
    className?: string;
}
export const Kbd: React.FC<KbdProps> = ({ children, className }) => {
  return (
    <kbd className={`${className} min-w-min px-2 py-1.5 text-xl font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg`}>{children}</kbd>
  )
};