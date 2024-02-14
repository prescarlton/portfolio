"use client"
import AppHeader from "@/components/app-header"
import HomepageGrid from "@/components/homepage-grid"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { useEffect, useState } from "react"
import { particleConfig } from "./particleConfig"
import { loadBasic } from "@tsparticles/basic"

export default function Home() {
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadBasic(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  return (
    <main className="flex min-h-screen flex-col py-4 px-6 gap-6 lg:px-36 lg:gap-12 lg:items-center lg:justify-center">
      {init && <Particles options={particleConfig} />}
      <AppHeader />
      <HomepageGrid />
    </main>
  )
}
