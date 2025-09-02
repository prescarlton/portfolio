import { CustomMDX } from "app/components/mdx"
import { readMDXFile } from "utils"

export default function AppsPage() {
  const { content } = readMDXFile("app/apps/content.mdx", {
    parseFrontmatter: false,
  })
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">apps</h1>
      <article className="markdown max-w-4xl">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
