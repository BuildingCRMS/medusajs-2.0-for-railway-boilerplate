import { cn } from '@lib/util/cn'
import { forwardRef } from 'react'

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: React.ReactNode
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Component = 'h1', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-medium text-basic-primary',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Heading.displayName = 'Heading'

export { Heading }
