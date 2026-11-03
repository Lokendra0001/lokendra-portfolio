import { cn } from '@/lib/utils'

/** Screenshot that swaps to `imageDark` in dark theme when one is provided. */
export function ThemedImage({
  image,
  imageDark,
  alt,
  className,
}: {
  image: string
  imageDark?: string
  alt: string
  className?: string
}) {
  /* eslint-disable @next/next/no-img-element */
  if (!imageDark) return <img src={image} alt={alt} className={className} loading="lazy" />
  return (
    <>
      <img src={image} alt={alt} className={cn(className, 'dark:hidden')} loading="lazy" />
      <img src={imageDark} alt={alt} className={cn(className, 'hidden dark:block')} loading="lazy" />
    </>
  )
  /* eslint-enable @next/next/no-img-element */
}

export function ProjectCardVisual({ image, imageDark, title }: { image: string; imageDark?: string; title: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-surface select-none">
      <ThemedImage
        image={image}
        imageDark={imageDark}
        alt={title}
        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  )
}
