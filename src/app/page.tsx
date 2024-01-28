import AppHeader from "@/components/app-header"
import HomepageGrid from "@/components/homepage-grid"

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col py-4 px-6 gap-6 lg:px-36 lg:gap-12 lg:items-center lg:justify-center
  dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]
      "
    >
      <AppHeader />
      <HomepageGrid />
    </main>
  )
}
