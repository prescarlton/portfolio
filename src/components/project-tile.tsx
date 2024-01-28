import Card from "./card"

interface ProjectTileProps {
  name: string
  logoPath: string
  selected: boolean
  onClick: () => void
}

const ProjectTile = ({
  name,
  logoPath,
  selected,
  onClick,
}: ProjectTileProps) => {
  return (
    <Card
      className={`p-0 overflow-hidden w-16 h-16 flex items-center justify-center hover:border-sky-500/60 ${selected ? "border-2 border-sky-500/60" : ""} cursor-pointer`}
      onClick={onClick}
    >
      <img src={logoPath} alt={name} />
    </Card>
  )
}
export default ProjectTile
