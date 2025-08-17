import { cn } from '@lib/util/cn'
import { forwardRef } from 'react'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements
  children: React.ReactNode
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ as: Component = 'div', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'mx-auto max-w-[1440px] px-6 small:px-14',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    )
  }
)

Container.displayName = 'Container'

export { Container }
