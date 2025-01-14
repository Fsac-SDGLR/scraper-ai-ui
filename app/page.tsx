'use client'

import { useState } from 'react'
import axios from 'axios'
import { ScraperForm } from './components/scraper-form'
import { ResultsDisplay } from './components/results-display'
import { LoadingSpinner } from './components/loading-spinner'
import { ErrorDisplay } from './components/error-display'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<any[] | null>(null)
  const [activeTab, setActiveTab] = useState('input')

  const handleSubmit = async (website: string, userPrompt: string, keywords: string[]) => {
    setIsLoading(true)
    setError(null)
    setResults(null)

    try {
      const response = await axios.post('http://127.0.0.1:8000/scrape/', {
        website,
        user_prompt: userPrompt,
        keywords,
      })
      setResults(response.data.events)
      setActiveTab('results')
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'An error occurred while fetching the data. Please try again.')
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Web Scraper UI</CardTitle>
              <CardDescription className="text-center">
                Scrape event data from websites with ease
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="input">Input</TabsTrigger>
                  <TabsTrigger value="results" disabled={!results && !isLoading}>Results</TabsTrigger>
                </TabsList>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TabsContent value="input">
                      <ScraperForm onSubmit={handleSubmit} />
                    </TabsContent>
                    <TabsContent value="results">
                      {isLoading && <LoadingSpinner />}
                      {error && <ErrorDisplay message={error} />}
                      {results && <ResultsDisplay events={results} />}
                    </TabsContent>
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

