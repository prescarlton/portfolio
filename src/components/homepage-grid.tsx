import BlogCard from "./blog-card"
import DescriptionCard from "./description-card"
import ProjectsCard from "./projects-card"
import SkillCarouselCard from "./skill-carousel-card"
import SocialsCard from "./socials-card"
import WorkCard from "./work-card"

const HomepageGrid = () => {
  return (
    <div className="flex gap-4 flex-col pb-16 pt-16 lg:pt-0 lg:grid lg:grid-cols-6 lg:grid-rows-10">
      <DescriptionCard />
      <BlogCard />
      <SkillCarouselCard />
      <ProjectsCard />
      <WorkCard />
      <SocialsCard />
    </div>
  )
}
export default HomepageGrid
