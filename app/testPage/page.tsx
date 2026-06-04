import { BasicCard } from "@/components/sections/basic-card"
import { BlogCard } from "@/components/sections/blog-card"
import { InputComponent } from "@/components/sections/input-component"

export default function TestPage() {
  return (
    <main className="min-h-screen bg-surface">
      <section
        aria-label="Test page"
        className="relative mx-auto min-h-[1427px] w-full max-w-[720px] bg-surface md:max-w-[1260px]"
      >
        <BlogCard className="absolute left-1/2 top-[64px] -translate-x-1/2 md:top-[135px]" />
        <InputComponent className="absolute left-1/2 top-[442px] -translate-x-1/2 md:top-[538px]" />
        <BasicCard className="absolute left-1/2 top-[570px] -translate-x-1/2 md:top-[639px]" />
      </section>
    </main>
  )
}
