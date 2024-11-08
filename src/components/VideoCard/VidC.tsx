"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  description: string;
}

export function VideoCard({ id, title, thumbnail, duration, description }: VideoCardProps) {
  return (
    <Card className="group overflow-hidden rounded-lg transition-all hover:shadow-lg">
      <Link href={`/videos/${id}`}>
        <div style={{ position: 'absolute', width: '100%', height: '400px' }}>
          <Image
            src={thumbnail}
            alt={title}
            width={800}  // Specify width
            height={400} // Specify height
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-4">
            <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
              <Play className="h-12 w-12 text-white" />
            </div>
            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded bg-black/70 px-2 py-1 text-sm text-white">
              <Clock className="h-3 w-3" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="mb-2 line-clamp-1 text-lg font-semibold">{title}</h3>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <Button variant="secondary" size="sm" className="w-full" asChild>
          <Link href={`/videos/${id}`}>Watch Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
