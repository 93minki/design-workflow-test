import type { ReactNode } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type BlogCardProps = {
  title?: ReactNode
  ctaLabel?: string
  href?: string
  imageAlt?: string
  imageSrc?: string
  className?: string
}

export function BlogCard({
  title = (
    <>
      What are your
      <br />
      safeguarding
      <br />
      responsibilities and how
      <br />
      can you manage them?
    </>
  ),
  ctaLabel = "Readmore",
  href = "#",
  imageAlt = "People seated in a meeting room facing large city windows",
  imageSrc = "/blog-card-image.png",
  className,
}: BlogCardProps) {
  return (
    <article
      className={cn(
        "relative h-[286px] w-[343.333px] max-w-full md:h-[334px]",
        className
      )}
    >
      <div className="relative h-[286px] overflow-hidden rounded-lg">
        <Image
          alt={imageAlt}
          className="object-cover"
          fill
          sizes="343px"
          src={imageSrc}
        />
      </div>
      <div className="absolute left-1/2 top-[214px] flex h-[72px] w-[calc(100%-36px)] max-w-[308.983px] -translate-x-1/2 flex-col rounded-lg bg-blog-card-panel p-lg md:top-[134px] md:h-[200px] md:gap-md">
        <div className="hidden h-[112px] w-full flex-col items-center justify-center md:flex">
          <h3 className="max-w-[234px] text-center text-headline-4 font-semibold leading-headline-4 tracking-headline-4 text-blog-card-heading">
            {title}
          </h3>
        </div>
        <div className="flex h-[24px] w-full items-center justify-center gap-sm">
          <Button
            asChild
            className="h-6 gap-sm p-0 text-body-md font-normal leading-body-md tracking-body-md text-blog-card-link no-underline hover:no-underline"
            variant="link"
          >
            <a href={href}>
              {ctaLabel}
              <ArrowRight aria-hidden="true" className="size-md" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  )
}
