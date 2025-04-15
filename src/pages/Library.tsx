
import { useState } from "react";
import { Search, Filter, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import StoryLibrary from "@/components/StoryLibrary";

const ageRanges = ["All Ages", "3-5", "6-8", "9-12"];
const categories = ["All", "Animals", "Adventure", "Fantasy", "Science", "History", "Nature"];

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Story Library</h1>
            <Button variant="outline" className="border-storyscape-purple/30 hover:bg-storyscape-purple/10">
              <BookOpen className="mr-2 h-5 w-5" />
              My Collection
            </Button>
          </div>
          
          <div className="relative mb-6">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input 
              placeholder="Search stories..." 
              className="pl-10 py-6 bg-storyscape-purple/5 border-storyscape-purple/20 focus-visible:ring-storyscape-purple"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <Tabs defaultValue="all" className="w-full">
              <h3 className="font-semibold mb-2">Age Range</h3>
              <TabsList className="bg-storyscape-purple/10 p-1 w-full grid grid-cols-2 md:grid-cols-4">
                {ageRanges.map((range) => (
                  <TabsTrigger 
                    key={range} 
                    value={range.toLowerCase().replace(/\s+/g, '-')}
                    className="data-[state=active]:bg-storyscape-purple data-[state=active]:text-white"
                  >
                    {range}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
          
          <div className="mb-8">
            <h3 className="font-semibold mb-2">Categories</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button 
                  key={category} 
                  variant="outline" 
                  className="border-storyscape-purple/30 hover:bg-storyscape-purple/10 [&.active]:bg-storyscape-purple [&.active]:text-white"
                  onClick={() => {}}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          <StoryLibrary title="All Stories" />
        </div>
      </main>
      
      <footer className="bg-storyscape-purple/10 py-6">
        <div className="container px-4 mx-auto text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} StoryScape AR. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Library;
