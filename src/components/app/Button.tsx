import { cva, VariantProps } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';



const ButtonVariants = cva(
    // focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-400
    'px-2 py-2 font-bold active:scale-95 inline-flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50 disabled:pointer-events-none duration-300 cursor-pointer shadow-2xl',
    {
        variants: {
            variant: {
                default: 'bg-gradient-to-br from-[#540123] via-[#FE679B] to-[#F0D8D9]',
                ghost: "bg-transparent hover:bg-slate-200 shadow-none text-transparent hover:text-black",
                error: "bg-gradient-to-br from-red-200 via-red-500 to-amber-900",
                success: "bg-gradient-to-br from-green-300 via-green-500 to-green-900",
                info: "bg-gradient-to-br from-teal-300 via-teal-500 to-teal-900",
                warning: "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-900",
            },
            size: {
                default: "h-10 px-4 text-sm ",
                sm: "h-8 px-2 text-xs",
                lg: "h-12 px-6 text-sm"
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
)


export interface ButtonElement extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
    isLoading?: boolean
}





const Button: FC<ButtonElement> = ({ children, className, variant, isLoading, size, ...props }) => {
    return (
        <button {...props} className={cn(ButtonVariants({
            variant, size, className
        }))} disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin h-4 w-4 mr-2" /> : null}
            {children}
        </button>
    )
}

export default Button;
