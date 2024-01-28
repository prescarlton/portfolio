import Image from "next/image"
import Card from "./card"

const WorkCard = () => {
  const jobs = [
    {
      dateRange: "May 2022 - Present",
      title: "Lead of Engineering",
      company: "CODE/+/TRUST",
      logoPath: "code-and-trust.png",
    },
    {
      dateRange: "October 2020 - May 2022",
      title: "Software Developer",
      company: "TIAG",
      logoPath: "tiag.png",
    },
    {
      dateRange: "February 2019 - October 2020",
      title: "Junior Software Developer",
      company: "MOONDOG Animation",
      logoPath: "moondog.jpeg",
    },
  ]
  return (
    <Card
      header="work"
      className="lg:col-span-2 lg:row-span-3 lg:col-start-3 lg:row-start-5 border"
    >
      <ul className="flex flex-col gap-4">
        {jobs.map((job) => (
          <li className="flex flex-col gap-2" key={job.company}>
            <p className="opacity-60">{job.dateRange}</p>
            <div className="flex items-center gap-2">
              <img
                src={`./${job.logoPath}`}
                className="w-12 h-12 rounded-md"
                alt={`${job.company}`}
              />
              <div>
                <p>{job.title}</p>
                <p className="opacity-60">{job.company}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
export default WorkCard
