import React from 'react'
import { cn } from '../../lib/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'default', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none'
  const variantClass = variant === 'ghost' ? 'bg-transparent border border-slate-300 text-slate-700 hover:bg-slate-100' : 'bg-sky-600 text-white hover:bg-sky-700'

  return (
    <button ref={ref} className={cn(base, variantClass, className)} {...props} />
  )
})

Button.displayName = 'Button'

export default Button
