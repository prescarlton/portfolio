import { BlogPosts } from "app/components/posts"

export const metadata = {
  title: "Preston Carlton | Blog",
  description: "See what I'm up to",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blog</h1>
      <BlogPosts />
    </section>
  )
}
