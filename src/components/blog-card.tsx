import dayjs from "dayjs"
import Card from "./card"
import { ChevronRight } from "lucide-react"

const BlogCard = () => {
  const posts = [
    {
      id: 4,
      title: "Deploying a Next.js 14 app with Vercel",
      date: "2024-01-10",
    },
    {
      id: 3,
      title: "How not to build a public-facing API",
      date: "2024-01-07",
    },
    {
      id: 2,
      title: "Codeium in Neovim",
      date: "2024-01-04",
    },
    {
      id: 1,
      title: "Going back to Sass Modules",
      date: "2024-01-01",
    },
  ]
  return (
    <Card header="posts" className="lg:col-span-2 lg:row-span-6 lg:col-start-5">
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col gap-2 group cursor-pointer"
          >
            <p className="opacity-60 border-2 border-transparent border-l-sky-500/60 pl-2">
              {dayjs(post.date).format("MMM D, 'YY")}
            </p>
            <p className="font-medium group-hover:text-sky-500">{post.title}</p>
            <button className="flex items-center gap-1 group-hover:text-sky-500 group-hover:gap-3 transition-all">
              view post <ChevronRight className="text-sky-500 " />
            </button>
          </div>
        ))}
      </div>
    </Card>
  )
}
export default BlogCard
