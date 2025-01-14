'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Globe, MessageSquare, Tag, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScraperFormProps {
  onSubmit: (website: string, userPrompt: string, keywords: string[]) => void
}

export function ScraperForm({ onSubmit }: ScraperFormProps) {
  const [website, setWebsite] = useState('')
  const [userPrompt, setUserPrompt] = useState('')
  const [keywords, setKeywords] = useState<string[]>([])
  const [currentKeyword, setCurrentKeyword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await onSubmit(website, userPrompt, keywords)
    setIsSubmitting(false)
  }

  const addKeyword = () => {
    if (currentKeyword && !keywords.includes(currentKeyword)) {
      setKeywords([...keywords, currentKeyword])
      setCurrentKeyword('')
    }
  }

  const removeKeyword = (keyword: string) => {
    setKeywords(keywords.filter((k) => k !== keyword))
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div className="space-y-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }}>
        <Label htmlFor="website" className="text-lg font-semibold flex items-center gap-2">
          <Globe className="w-5 h-5" />
          Website URL
        </Label>
        <Input
          id="website"
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
          placeholder="https://example.com"
          className="text-lg p-6"
        />
      </motion.div>
      <motion.div className="space-y-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
        <Label htmlFor="userPrompt" className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare className="w-5 h-5" />
          User Prompt
        </Label>
        <Textarea
          id="userPrompt"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
          required
          placeholder="Scrape events from the website"
          className="text-lg p-4 min-h-[100px]"
        />
      </motion.div>
      <motion.div className="space-y-2" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
        <Label htmlFor="keywords" className="text-lg font-semibold flex items-center gap-2">
          <Tag className="w-5 h-5" />
          Keywords
        </Label>
        <div className="flex space-x-2">
          <Input
            id="keywords"
            value={currentKeyword}
            onChange={(e) => setCurrentKeyword(e.target.value)}
            placeholder="Add a keyword"
            className="text-lg p-6"
          />
          <Button type="button" onClick={addKeyword} size="lg">
            Add
          </Button>
        </div>
        <AnimatePresence>
          <motion.div className="mt-2 flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <motion.span
                key={keyword}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center"
              >
                {keyword}
                <button
                  type="button"
                  onClick={() => removeKeyword(keyword)}
                  className="ml-2 text-xs hover:bg-primary-foreground hover:text-primary rounded-full w-4 h-4 flex items-center justify-center"
                >
                  ×
                </button>
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
        <Button type="submit" size="lg" className="w-full text-lg" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scraping...
            </>
          ) : (
            'Start Scraping'
          )}
        </Button>
      </motion.div>
    </motion.form>
  )
}

