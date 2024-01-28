import Card from "./card"

const DescriptionCard = () => {
  return (
    <Card className="flex gap-2 relative lg:col-span-4 lg:row-span-3">
      <div className="flex flex-row gap-2">
        <img src="me.jpg" className="h-24 lg:h-32 rounded-lg object-cover" />
        <div>
          <h1 className="text-4xl font-bold">software dev from CHS</h1>
          <h3 className="opacity-60 hidden lg:flex">
            I've been coding professionally for 5+ years, and as a hobby since
            4th grade. Always learning, always growing.
          </h3>
        </div>
      </div>
      <h3 className="opacity-60 lg:hidden">
        I've been coding professionally for 5+ years, and as a hobby since 4th
        grade. Always learning, always growing.
      </h3>
    </Card>
  )
}
export default DescriptionCard
