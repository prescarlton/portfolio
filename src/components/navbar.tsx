const Navbar = () => {
  return (
    <div
      className="fixed bottom-4 lg:top-4 left-4 right-4 lg:mx-auto bg-white dark:bg-gray-600/40
      rounded-full h-12 flex items-center justify-between px-8 backdrop-blur-sm shadow-sm border
      dark:border-white/10
      lg:max-w-xl"
    >
      <div className="text-sky-500 font-medium border-b-2 border-sky-500">
        home
      </div>
      <div>about</div>
      <div>projects</div>
      <div>contact</div>
    </div>
  )
}
export default Navbar
