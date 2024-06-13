import { BlogPosts } from "app/components/posts"
import dayjs from "dayjs"

export default function Page() {
  // lmao calculate years of experience
  const yoe = dayjs("2019-02-01").fromNow(true)

  return (
    <section>
      <div className="flex gap-2 items-center mb-8">
        <h1 className=" text-2xl font-semibold tracking-tighter">
          hey, I'm Preston
        </h1>
      </div>
      <p className="mb-4">{`I'm a software engineer with around ${yoe} of experience. I've worked on all kinds of different things, from aquarium kiosks to e-learning platforms to government health websites. When I'm not busy coding another SAAS I'll never launch, I spend most of my time hiking, backpacking, and camping. Sometimes I dabble in photography.`}</p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
