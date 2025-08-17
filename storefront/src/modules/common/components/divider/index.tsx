import { cn } from '@lib/util/cn'

interface DividerProps {
  alignment?: 'horizontal' | 'vertical'
  variant?: 'primary' | 'secondary'
  className?: string
}

const Divider = ({ alignment = 'horizontal', variant = 'primary', className }: DividerProps) => {
  const alignmentClasses = {
    horizontal: 'w-full h-px',
    vertical: 'h-full w-px',
  }

  const variantClasses = {
    primary: 'bg-border-basic-primary',
    secondary: 'bg-border-secondary',
  }

  return (
    <div
      className={cn(
        alignmentClasses[alignment],
        variantClasses[variant],
        className
      )}
    />
  )
}

export default Divider
