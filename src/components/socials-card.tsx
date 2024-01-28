import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import Card from "./card"

const SocialsCard = () => {
  const socials = [
    {
      alt: "GitHub",
      icon: <Github />,
      link: "https://github.com/prescarlton",
    },
    {
      alt: "LinkedIn",
      icon: <Linkedin />,
      link: "https://www.linkedin.com/in/prescarlton",
    },
    {
      alt: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/prescarlton",
    },
    {
      alt: "X",
      icon: <Twitter />,
      link: "https://x.com/prescarlton",
    },
  ]
  return (
    <Card className="lg:col-span-2 lg:col-start-5 lg:row-start-7">
      <div className="flex flex-row gap-6 items-center justify-center">
        {socials.map((social) => (
          <a href={social.link} key={social.alt} target="_blank">
            {social.icon}
          </a>
        ))}
      </div>
    </Card>
  )
}
export default SocialsCard
