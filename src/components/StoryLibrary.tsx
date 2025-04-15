
import StoryCard from "./StoryCard";

// Sample stories data
const stories = [
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
  },
  {
    id: "arctic-explorers",
    title: "Arctic Explorers",
    coverImage: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "4-7",
  },
  {
    id: "woodland-wonders",
    title: "Woodland Wonders",
    coverImage: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "3-6",
  },
  {
    id: "jungle-journey",
    title: "Jungle Journey",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "5-8",
  }
];

interface StoryLibraryProps {
  title?: string;
  limit?: number;
}

const StoryLibrary = ({ title = "All Stories", limit }: StoryLibraryProps) => {
  const displayStories = limit ? stories.slice(0, limit) : stories;

  return (
    <section className="py-8">
      <div className="container px-4">
        {title && <h2 className="text-2xl font-bold mb-6">{title}</h2>}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {displayStories.map((story) => (
            <StoryCard
              key={story.id}
              id={story.id}
              title={story.title}
              coverImage={story.coverImage}
              ageRange={story.ageRange}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryLibrary;
