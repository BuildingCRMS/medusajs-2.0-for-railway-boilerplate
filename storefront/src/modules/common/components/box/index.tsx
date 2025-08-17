import { cn } from '@lib/util/cn'
import { forwardRef } from 'react'

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements
  children?: React.ReactNode
}

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('', className)}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Box.displayName = 'Box'

export { Box }
