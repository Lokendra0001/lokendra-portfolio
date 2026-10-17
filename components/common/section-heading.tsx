import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Heading = 'h2',
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <Heading id={id} className="text-2xl font-semibold leading-tight text-foreground sm:text-3xl 2xl:text-4xl">
        {title}
      </Heading>
      {description && <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">{description}</p>}
    </div>
  )
}
