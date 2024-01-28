import Link from "next/link"

const AppHeader = () => {
  return (
    <nav className="flex justify-between items-center fixed top-4 left-4 right-4">
      <Link href="/" className="font-medium text-xl">
        PRESTON
      </Link>
    </nav>
  )
}
export default AppHeader
