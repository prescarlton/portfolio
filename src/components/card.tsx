import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface CardProps {
  children: ReactNode
  header?: string
  className?: string
  onClick?: () => void
}
const Card = ({ children, header, className, onClick }: CardProps) => {
  return (
    <div
      className={twMerge(
        `border border-white/10 rounded-xl lg:rounded-2xl p-4 flex flex-col shadow-md hover:shadow-lg transition-all backdrop-blur-md bg-black/40`,
        className,
      )}
      onClick={onClick}
    >
      {header && <h2 className={`font-medium text-2xl mb-2`}>{header}</h2>}
      {children}
    </div>
  )
}
export default Card
