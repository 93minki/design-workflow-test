import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type BasicCardProps = {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  className?: string
}

function BasicCardIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[16px] w-[32px] text-primary-shade-s2"
      fill="none"
      viewBox="0 0 32 16"
    >
      <path
        d="M7.5 7.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        fill="currentColor"
      />
      <path
        d="M1 15.25c.34-3.36 3.14-5.88 6.5-5.88s6.16 2.52 6.5 5.88H1Z"
        fill="currentColor"
      />
      <path
        d="M23.5 7.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5Z"
        fill="currentColor"
      />
      <path
        d="M17 15.25c.34-3.36 3.14-5.88 6.5-5.88s6.16 2.52 6.5 5.88H17Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BasicCard({
  title = "Membership Organizations",
  description = "Our membership management software provides full automation of membership renewals and payments.",
  icon = <BasicCardIcon />,
  className,
}: BasicCardProps) {
  return (
    <article
      className={cn(
        "flex w-full max-w-[208px] flex-col items-center rounded-md border border-border-muted bg-surface px-[33px] py-[15px] text-center md:max-w-[343.333px] md:gap-xs md:rounded-lg md:p-[33px]",
        className
      )}
    >
      <div className="flex h-[64px] w-[48px] flex-col items-start pb-md">
        <div className="flex size-[48px] items-center justify-center rounded-[12px] bg-primary/20 text-primary-shade-s2">
          {icon}
        </div>
      </div>
      <div className="pb-sm">
        <h3 className="max-w-[160px] text-headline-4 font-semibold leading-headline-4 tracking-headline-4 text-text-heading md:max-w-[260px] md:text-headline-3 md:font-bold md:leading-headline-3 md:tracking-headline-3">
          {title}
        </h3>
      </div>
      <p className="w-[146px] text-body-sm font-normal leading-body-sm tracking-body-sm text-primary-shade-s2 md:w-auto md:max-w-[286px] md:font-medium">
        {description}
      </p>
    </article>
  )
}
