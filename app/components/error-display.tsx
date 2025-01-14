import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface ErrorDisplayProps {
  message: string
}

export function ErrorDisplay({ message }: ErrorDisplayProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Alert variant="destructive" className="mt-8">
        <AlertCircle className="h-5 w-5" />
        <AlertTitle className="text-lg font-semibold">Error</AlertTitle>
        <AlertDescription className="mt-2">{message}</AlertDescription>
      </Alert>
    </motion.div>
  )
}

