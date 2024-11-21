import georgia from "./georgia.jpg"
import nevada from "./nevada.jpg"
import rocky from "./rocky.jpg"
import saltFlats from "./salt_flats.jpg"
import yosemite from "./yosemite.jpg"
import uhwarrie from "./uhwarrie.jpg"
import Image from "next/image"

export default function Page() {
  const imageClassName = "rounded-lg shadow-lg h-64 w-full object-cover"
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">photos</h1>
      <p className="mb-8">
        just a random assortment of pictures I've taken that I really like.
        Working on a better way to display these, with more context and better
        organization.
      </p>
      <Image src={nevada} alt="nevada" className={imageClassName + " mb-4"} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <Image src={georgia} alt="georgia" className={imageClassName} />
        <Image src={rocky} alt="rocky" className={imageClassName} />
        <Image src={saltFlats} alt="salt flats" className={imageClassName} />
        <Image src={yosemite} alt="yosemite" className={imageClassName} />
        <Image src={uhwarrie} alt="uhwarrie" className={imageClassName} />
      </div>
    </section>
  )
}
