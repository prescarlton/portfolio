import Card from "./card"

const SkillCarouselCard = () => {
  const list = ["hiker", "dog dad", "coder", "christ follower"]
  return (
    <Card className="lg:col-span-2 lg:col-start-3 lg:row-start-4 items-center">
      <div className="flex gap-2 ">
        {list.map((item) => (
          <>
            {list[list.length - 1] === item ? (
              <p>{item}</p>
            ) : (
              <div className="flex gap-2">
                <p>{item}</p>
                <p className="text-lg font-bold text-sky-500">{`//`}</p>
              </div>
            )}
          </>
        ))}
      </div>
    </Card>
  )
}
export default SkillCarouselCard
