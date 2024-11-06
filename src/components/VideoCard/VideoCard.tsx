"use client"

import * as React from "react"
import { VideoCard } from "./VidC"

const videos = [
  {
    id: "1",
    title: "Getting Started with Web Development",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F99f0f6cd43b04c818a8276c512c7d07f?w=800&auto=format&fit=crop&q=60",
    duration: "12:34",
    description: "Learn the fundamentals of web development in this comprehensive guide.",
    views: "1.2K"
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F99f0f6cd43b04c818a8276c512c7d07f?w=800&auto=format&fit=crop&q=60",
    duration: "15:45",
    description: "Master advanced React patterns and improve your application architecture.",
    views: "856"
  },
  {
    id: "3",
    title: "Building Modern UIs",
    thumbnail: "https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F99f0f6cd43b04c818a8276c512c7d07f?w=800&auto=format&fit=crop&q=60",
    duration: "20:18",
    description: "Create beautiful and responsive user interfaces with modern techniques.",
    views: "2.1K"
  },
  {
    id: "4",
    title: "State Management Deep Dive",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=6https://cdn.builder.io/api/v1/image/assets%2Fcfdade1741a141b6a543d6f07cefe0a0%2F99f0f6cd43b04c818a8276c512c7d07f?w=800&auto=format&fit=crop&q=60s",
    duration: "18:22",
    description: "Explore different state management solutions for React applications.",
    views: "1.5K"
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </main>
    </div>
  )
}