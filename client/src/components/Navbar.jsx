function Navbar() {
  return (
    <div className="w-full p-4 bg-slate-800 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">
        Artisan AI
      </h1>

      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </div>
  )
}

export default Navbar