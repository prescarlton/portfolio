import { CustomMDX } from "app/components/mdx"
import { readMDXFile } from "utils"

export default function Page() {
  const { content } = readMDXFile("app/resume/content.mdx")
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">resume</h1>
      <article className="markdown max-w-4xl">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
