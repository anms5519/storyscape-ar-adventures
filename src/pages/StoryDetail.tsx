
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Camera, Calendar, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import ARViewer from "@/components/ARViewer";

// Mock story data
const stories = {
  "forest-friends": {
    id: "forest-friends",
    title: "Forest Friends Adventure",
    description: "Join Fox and Rabbit as they explore the magical forest and help their friends solve puzzles and overcome challenges. This interactive story teaches children about friendship, problem-solving and the importance of nature.",
    coverImage: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "3-6",
    author: "Emily Woods",
    publishDate: "2023-08-15",
    rating: 4.8,
    pages: 24,
    previewImages: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "ocean-wonders": {
    id: "ocean-wonders",
    title: "Ocean Wonders",
    description: "Dive deep into the ocean with Marina the Mermaid and her friend Otto the Octopus as they discover the wonders of underwater life. Learn about sea creatures, coral reefs, and ocean conservation in this enchanting AR story.",
    coverImage: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "4-8",
    author: "Leo Horizon",
    publishDate: "2023-09-22",
    rating: 4.9,
    pages: 20,
    previewImages: [
      "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "safari-adventure": {
    id: "safari-adventure",
    title: "Safari Adventure",
    description: "Embark on an exciting safari with Zara the Zebra and her animal friends. Discover exotic animals and their habitats while learning about wildlife conservation and the circle of life.",
    coverImage: "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "5-9",
    author: "Nathan Savannah",
    publishDate: "2023-07-10",
    rating: 4.7,
    pages: 28,
    previewImages: [
      "https://images.unsplash.com/photo-1501286353178-1ec881214838?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  },
  "arctic-explorers": {
    id: "arctic-explorers",
    title: "Arctic Explorers",
    description: "Join Penny the Penguin and her friends on an icy adventure through the Arctic. Learn about polar animals, glaciers, and the importance of protecting our planet's frozen regions.",
    coverImage: "https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ageRange: "4-7",
    author: "Sophia Frost",
    publishDate: "2023-10-05",
    rating: 4.6,
    pages: 22,
    previewImages: [
      "https://images.unsplash.com/photo-1441057206919-63d19fac2369?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ]
  }
};

const StoryDetail = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [arActive, setArActive] = useState(false);
  
  // Find the story or use a default
  const story = stories[id as keyof typeof stories] || {
    id: "not-found",
    title: "Story Not Found",
    description: "We couldn't find the story you're looking for.",
    coverImage: "https://via.placeholder.com/800",
    ageRange: "N/A",
    author: "Unknown",
    publishDate: "N/A",
    rating: 0,
    pages: 0,
    previewImages: []
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {arActive ? (
        <ARViewer storyId={id} onClose={() => setArActive(false)} />
      ) : (
        <main className="flex-1 py-8">
          <div className="container px-4 mx-auto">
            <Link to="/library" className="inline-flex items-center text-storyscape-purple hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Library
            </Link>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                <img 
                  src={story.coverImage} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <div className="inline-block bg-storyscape-purple/10 text-storyscape-purple rounded-full px-3 py-1 text-sm font-medium mb-2">
                  Ages {story.ageRange}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h1>
                
                <div className="flex items-center gap-6 mb-4 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{story.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{story.publishDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-500 fill-yellow-500" />
                    <span>{story.rating}</span>
                  </div>
                </div>
                
                <p className="mb-6 text-gray-700">{story.description}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="ar-button flex-1" onClick={() => setArActive(true)}>
                    <Camera className="mr-2 h-5 w-5" />
                    Start AR Experience
                  </Button>
                  <Button variant="outline" className="border-storyscape-purple/30 hover:bg-storyscape-purple/10 flex-1">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Read Story
                  </Button>
                </div>
                
                <div className="bg-storyscape-purple/5 rounded-lg p-4 flex justify-between items-center">
                  <div className="text-gray-700">
                    <div className="font-semibold">Story Details</div>
                    <div className="text-sm mt-1">{story.pages} pages · Interactive AR experience</div>
                  </div>
                  <Button variant="ghost" className="hover:bg-storyscape-purple/10 text-storyscape-purple">
                    Download Offline
                  </Button>
                </div>
              </div>
            </div>
            
            <Tabs defaultValue="preview" className="mb-12">
              <TabsList className="bg-storyscape-purple/10 p-1">
                <TabsTrigger 
                  value="preview"
                  className="data-[state=active]:bg-storyscape-purple data-[state=active]:text-white"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger 
                  value="ar-features"
                  className="data-[state=active]:bg-storyscape-purple data-[state=active]:text-white"
                >
                  AR Features
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="data-[state=active]:bg-storyscape-purple data-[state=active]:text-white"
                >
                  Reviews
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="preview" className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Story Preview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {story.previewImages.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-sm">
                      <img 
                        src={image} 
                        alt={`${story.title} preview ${index + 1}`} 
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="ar-features" className="mt-6">
                <h2 className="text-2xl font-bold mb-4">AR Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-storyscape-yellow rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">3D Characters</h3>
                    <p className="text-gray-600">Watch the main characters pop out of the pages and come to life in your room.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-storyscape-peach rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Interactive Elements</h3>
                    <p className="text-gray-600">Tap on characters and objects to hear sounds and see animations.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-storyscape-green rounded-full flex items-center justify-center mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Mini Games</h3>
                    <p className="text-gray-600">Play along with the story through fun mini-games that appear in AR.</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Reviews</h2>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-storyscape-purple/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">P</span>
                      </div>
                      <div>
                        <div className="font-bold">Parent of 5-year-old</div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">My daughter absolutely loves this story! The AR feature is amazing and keeps her engaged. Highly recommend!</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-storyscape-green/20 rounded-full flex items-center justify-center mr-3">
                        <span className="font-bold">T</span>
                      </div>
                      <div>
                        <div className="font-bold">Teacher</div>
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600">Great educational content. I use this in my classroom and the children are always excited when it's story time.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      )}
      
      {!arActive && (
        <footer className="bg-storyscape-purple/10 py-6">
          <div className="container px-4 mx-auto text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} StoryScape AR. All rights reserved.
          </div>
        </footer>
      )}
    </div>
  );
};

export default StoryDetail;
