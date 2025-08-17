import { cn } from '@lib/util/cn'
import { useState } from 'react'

interface AccordionProps {
  type?: 'single' | 'multiple'
  collapsible?: boolean
  className?: string
  children: React.ReactNode
}

interface AccordionItemProps {
  value: string
  className?: string
  children: React.ReactNode
}

interface AccordionTriggerProps {
  className?: string
  children: React.ReactNode
  'data-testid'?: string
}

interface AccordionContentProps {
  className?: string
  children: React.ReactNode
}

export function Accordion({ type = 'single', collapsible = false, className, children }: AccordionProps) {
  return (
    <div className={cn('w-full', className)}>
      {children}
    </div>
  )
}

export function AccordionItem({ value, className, children }: AccordionItemProps) {
  return (
    <div className={cn('border-none', className)}>
      {children}
    </div>
  )
}

export function AccordionTrigger({ className, children, ...props }: AccordionTriggerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button
      className={cn(
        'flex w-full items-center justify-between transition-all',
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      {children}
    </button>
  )
}

export function AccordionContent({ className, children }: AccordionContentProps) {
  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {children}
    </div>
  )
}
