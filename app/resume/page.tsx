import { CustomMDX } from "app/components/mdx"
import { getResumeData } from "utils"

export default function Page() {
  const content = getResumeData()
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">resume</h1>
      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
