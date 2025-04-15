
import { useEffect, useRef, useState } from "react";
import { Camera, ArrowLeft, Maximize2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ARViewerProps {
  storyId: string;
  onClose: () => void;
}

const ARViewer = ({ storyId, onClose }: ARViewerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  
  useEffect(() => {
    if (cameraActive) {
      // Request camera access when activated
      navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: "environment" } 
      })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => {
        console.error("Error accessing camera:", err);
        setCameraActive(false);
      });
    } else {
      // Stop camera when deactivated
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
        videoRef.current.srcObject = null;
      }
    }
    
    // Cleanup function to ensure camera is stopped when component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraActive]);
  
  const toggleCamera = () => {
    setCameraActive(prev => !prev);
  };
  
  const toggleMute = () => {
    setMuted(prev => !prev);
  };
  
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setFullscreen(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="relative flex-1 overflow-hidden">
        {/* Camera feed */}
        <video 
          ref={videoRef}
          autoPlay 
          playsInline 
          muted={muted}
          className={`w-full h-full object-cover ${cameraActive ? 'block' : 'hidden'}`}
        />
        
        {/* Placeholder when camera is off */}
        {!cameraActive && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-storyscape-purple/10">
            <Camera className="w-16 h-16 text-storyscape-purple mb-4" />
            <p className="text-lg font-medium">Tap the camera button to start AR experience</p>
          </div>
        )}
        
        {/* AR Elements (these would be positioned over the video) */}
        {cameraActive && (
          <div className="absolute inset-0 pointer-events-none">
            {/* Example AR elements - in a real app these would be driven by AR framework */}
            <div className="absolute top-1/4 left-1/4 animate-float">
              <div className="w-16 h-16 bg-storyscape-yellow rounded-full opacity-80"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/3 animate-float" style={{ animationDelay: "1s" }}>
              <div className="w-20 h-20 bg-storyscape-peach rounded-full opacity-80"></div>
            </div>
          </div>
        )}
      </div>
      
      {/* Controls */}
      <div className="bg-black/90 p-4">
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={onClose} className="text-white">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Exit AR
          </Button>
          
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMute} 
              className="text-white hover:bg-white/10 rounded-full"
            >
              {muted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleFullscreen} 
              className="text-white hover:bg-white/10 rounded-full"
            >
              <Maximize2 className="h-6 w-6" />
            </Button>
            
            <Button 
              onClick={toggleCamera}
              className={`rounded-full ${cameraActive ? 'bg-red-500 hover:bg-red-600' : 'bg-storyscape-purple hover:bg-storyscape-purple-dark'}`}
            >
              <Camera className="mr-2 h-5 w-5" />
              {cameraActive ? 'Stop Camera' : 'Start Camera'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ARViewer;
