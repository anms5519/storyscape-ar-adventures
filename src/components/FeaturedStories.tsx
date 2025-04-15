
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import StoryCard from "./StoryCard";

// Sample featured stories data
const featuredStories = [
  {
    id: "forest-friends",
    title: "Forest Friends Adventure",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "3-6",
  },
  {
    id: "ocean-wonders",
    title: "Ocean Wonders",
    coverImage: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "4-8",
  },
  {
    id: "safari-adventure",
    title: "Safari Adventure",
    coverImage: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "5-9",
  }
];

const FeaturedStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  return (
    <section className="py-8">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Stories</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="rounded-full border-storyscape-purple/20 hover:bg-storyscape-purple/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="rounded-full border-storyscape-purple/20 hover:bg-storyscape-purple/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {featuredStories.map((story) => (
              <div key={story.id} className="min-w-full px-0">
                <StoryCard 
                  id={story.id}
                  title={story.title}
                  coverImage={story.coverImage}
                  ageRange={story.ageRange}
                  featured={true}
                  className="w-full h-[40vh] md:h-[50vh]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStories;
