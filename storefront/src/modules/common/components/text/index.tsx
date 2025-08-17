import { cn } from '@lib/util/cn'
import { forwardRef } from 'react'

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: keyof JSX.IntrinsicElements
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: React.ReactNode
}

const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Component = 'p', size = 'md', className, children, ...props }, ref) => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    }

    return (
      <Component
        ref={ref}
        className={cn(
          'text-basic-primary',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Text.displayName = 'Text'

export { Text }
