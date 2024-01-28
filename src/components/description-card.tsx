import Card from "./card"

const DescriptionCard = () => {
  return (
    <Card className="flex flex-col gap-2 h-48 relative lg:col-span-4 lg:row-span-3">
      <h1 className="text-4xl font-bold">software dev from CHS</h1>
      <h3 className="opacity-60">
        I've been coding professionally for 5+ years, and as a hobby since 4th
        grade. Always learning, always growing.
      </h3>
    </Card>
  )
}
export default DescriptionCard
