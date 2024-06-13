import { BlogPosts } from "app/components/posts"

export const metadata = {
  title: "Preston Carlton | Blog",
  description: "See what I'm up to",
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl tracking-tighter">blog</h1>
      <h2 className="text-xl mb-8 text-gray-500">
        absolutely 0 promises about what I'll post here. might be about tech /
        software, might be about food. maybe even a few camping trips.
      </h2>
      <BlogPosts />
    </section>
  )
}
