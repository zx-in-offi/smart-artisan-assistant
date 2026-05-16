import { motion } from "framer-motion"

import Navbar from "../components/Navbar"

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-white px-6">
      <Navbar />

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-cyan-400 text-center"
      >
        Smart Artisan Assistant
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl text-slate-300 text-center max-w-2xl"
      >
        Track production, earnings, materials and get AI-powered
        product improvement suggestions.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="/login"
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold"
        >
          Login
        </a>

        <a
          href="/register"
          className="border border-cyan-400 px-6 py-3 rounded-xl font-semibold"
        >
          Register
        </a>
      </motion.div>
    </div>
  )
}

export default LandingPage