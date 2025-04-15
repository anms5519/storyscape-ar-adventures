
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoryCardProps {
  id: string;
  title: string;
  coverImage: string;
  ageRange: string;
  featured?: boolean;
  className?: string;
}

const StoryCard = ({ id, title, coverImage, ageRange, featured = false, className }: StoryCardProps) => {
  return (
    <Link to={`/story/${id}`} className={cn(
      "story-card group block", 
      featured ? "aspect-[4/3]" : "aspect-[3/4]",
      className
    )}>
      <img 
        src={coverImage} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
        <div className="absolute top-4 right-4 bg-white/90 text-xs font-semibold px-2 py-1 rounded-full">
          Ages {ageRange}
        </div>
        <h3 className="text-white font-bold text-lg md:text-xl">{title}</h3>
        <div className="flex items-center mt-2 text-white/90 text-sm gap-2">
          <Eye className="w-4 h-4" />
          <span>View Story</span>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
