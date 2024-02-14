interface SkillCarouselItemProps {
  label: string
}
const SkillCarouselItem = ({ label }: SkillCarouselItemProps) => {
  return (
    <div className="flex gap-2 items-center">
      <p>{label}</p>
      <p className="text-lg font-bold text-sky-500">{`//`}</p>
    </div>
  )
}
export default SkillCarouselItem
