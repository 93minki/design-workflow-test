import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

type InputComponentProps = {
  placeholder?: string
  buttonLabel?: string
  className?: string
}

export function InputComponent({
  placeholder = "Email",
  buttonLabel = "Subscribe",
  className,
}: InputComponentProps) {
  return (
    <div className={cn("flex items-center md:gap-sm", className)}>
      <Input
        aria-label={placeholder}
        className="h-9 w-full max-w-[320px] rounded-md border-border bg-background px-3 py-1 text-body-md leading-body-md tracking-body-md text-muted-foreground shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] placeholder:text-muted-foreground md:text-body-md"
        placeholder={placeholder}
        type="email"
      />
      <Button
        className="hidden h-9 rounded-lg border-border bg-background px-4 py-2 text-sm font-medium leading-5 text-foreground shadow-[0_1px_1px_rgba(0,0,0,0.1)] hover:bg-background md:inline-flex"
        variant="outline"
      >
        {buttonLabel}
      </Button>
    </div>
  )
}
