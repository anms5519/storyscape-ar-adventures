
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Camera, Shapes } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import FeaturedStories from "@/components/FeaturedStories";
import StoryLibrary from "@/components/StoryLibrary";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-storyscape-purple-light/30 to-white py-12 md:py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Stories Come to Life with StoryScape AR
                </h1>
                <p className="text-lg mb-8 text-gray-700">
                  Experience magical stories in augmented reality. Watch characters jump off the page and into your world!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button className="ar-button" asChild>
                    <Link to="/library">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Browse Stories
                    </Link>
                  </Button>
                  <Button variant="outline" className="border-storyscape-purple/30 hover:bg-storyscape-purple/10" asChild>
                    <Link to="#">
                      <Camera className="mr-2 h-5 w-5" />
                      Demo AR
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute top-0 left-0 w-4/5 h-4/5 bg-storyscape-yellow rounded-2xl transform rotate-6 shadow-lg animate-float" style={{ animationDelay: "0.5s" }}>
                    <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-2xl" alt="Story preview" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-4/5 h-4/5 bg-storyscape-peach rounded-2xl transform -rotate-6 shadow-lg animate-float">
                    <img src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover rounded-2xl" alt="Story preview" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Stories */}
        <FeaturedStories />
        
        {/* How It Works */}
        <section className="py-12 bg-storyscape-purple/5">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How StoryScape Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-storyscape-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-storyscape-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Choose a Story</h3>
                <p className="text-gray-600">Browse our library of interactive stories for all ages and interests.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-storyscape-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-storyscape-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Scan with Camera</h3>
                <p className="text-gray-600">Point your device at the story pages to see the magic happen.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-storyscape-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shapes className="w-8 h-8 text-storyscape-purple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Watch It Come Alive</h3>
                <p className="text-gray-600">See characters, landscapes and animations pop up in your room!</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Stories */}
        <StoryLibrary title="Recently Added" limit={4} />
      </main>
      
      <footer className="bg-storyscape-purple/10 py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-storyscape-purple rounded-full flex items-center justify-center">
                <Shapes className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">StoryScape AR</span>
            </div>
            <div className="flex gap-6">
              <Link to="/" className="hover:text-storyscape-purple">Home</Link>
              <Link to="/library" className="hover:text-storyscape-purple">Library</Link>
              <a href="#" className="hover:text-storyscape-purple">About</a>
              <a href="#" className="hover:text-storyscape-purple">Contact</a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-storyscape-purple/20 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} StoryScape AR. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
