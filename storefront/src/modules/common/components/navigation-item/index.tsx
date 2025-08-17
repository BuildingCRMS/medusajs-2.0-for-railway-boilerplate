import { cn } from '@lib/util/cn'
import LocalizedClientLink from '@modules/common/components/localized-client-link'
import { forwardRef } from 'react'

interface NavigationItemProps {
  href: string
  variant?: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
  'data-testid'?: string
}

const NavigationItem = forwardRef<HTMLAnchorElement, NavigationItemProps>(
  ({ href, variant = 'primary', className, children, ...props }, ref) => {
    const variantClasses = {
      primary: 'text-basic-primary hover:text-basic-primary/80',
      secondary: 'text-secondary hover:text-secondary/80',
    }

    return (
      <LocalizedClientLink
        ref={ref}
        href={href}
        className={cn(
          'transition-colors duration-200',
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </LocalizedClientLink>
    )
  }
)

NavigationItem.displayName = 'NavigationItem'

export { NavigationItem }
