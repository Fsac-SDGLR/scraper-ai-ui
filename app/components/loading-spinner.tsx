import { motion } from 'framer-motion'

export function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <motion.div
        className="h-16 w-16 border-4 border-primary border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
      <motion.p
        className="mt-4 text-lg font-semibold text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Scraping data...
      </motion.p>
    </div>
  )
}

