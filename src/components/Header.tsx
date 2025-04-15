
import { Link } from "react-router-dom";
import { Menu, Sparkles, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 bg-storyscape-purple rounded-full flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white animate-float" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-storyscape-purple to-storyscape-purple-dark bg-clip-text text-transparent">
            StoryScape
          </h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="font-medium hover:text-storyscape-purple transition-colors">
            Home
          </Link>
          <Link to="/library" className="font-medium hover:text-storyscape-purple transition-colors">
            Library
          </Link>
          <Button className="bg-storyscape-purple hover:bg-storyscape-purple-dark">
            <Book className="mr-2 h-4 w-4" />
            My Stories
          </Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
