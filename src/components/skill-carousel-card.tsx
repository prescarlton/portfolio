import Card from "./card"
import SkillCarouselItem from "./skill-carousel-item"

const SkillCarouselCard = () => {
  const list = ["hiker", "dog dad", "coder", "christ follower"]
  return (
    <Card className="lg:col-span-2 lg:col-start-3 lg:row-start-4 items-center relative flex-row overflow-x-hidden gap-2 justify-center">
      <div className="flex gap-2 items-center justify-center animate-marquee whitespace-nowrap">
        {list.map((item) => (
          <SkillCarouselItem key={item} label={item} />
        ))}
      </div>
      <div className="absolute ml-2.5 flex gap-2 items-center justify-center animate-marquee2 whitespace-nowrap">
        {list.map((item) => (
          <SkillCarouselItem key={item + "b"} label={item} />
        ))}
      </div>
    </Card>
  )
}
export default SkillCarouselCard
