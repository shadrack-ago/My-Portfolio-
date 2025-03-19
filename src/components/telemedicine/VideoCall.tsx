
import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Video, Mic, MicOff, VideoOff, Phone } from "lucide-react";

const VideoCall = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const { toast } = useToast();

  const startLocalVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: true, 
        audio: true 
      });
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      
      return stream;
    } catch (error) {
      console.error("Error accessing media devices:", error);
      toast({
        title: "Camera Access Error",
        description: "Could not access your camera or microphone. Please check permissions.",
        variant: "destructive",
      });
      return null;
    }
  };

  const handleStartCall = async () => {
    setIsConnecting(true);
    
    const stream = await startLocalVideo();
    if (!stream) {
      setIsConnecting(false);
      return;
    }
    
    // Simulate connecting delay
    setTimeout(() => {
      setIsCallActive(true);
      setIsConnecting(false);
      
      toast({
        title: "Call Started",
        description: "You are now connected with Dr. Sarah Johnson",
      });
    }, 2000);
  };

  const handleEndCall = () => {
    // Stop all tracks of the stream
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      localVideoRef.current.srcObject = null;
    }
    
    setIsCallActive(false);
    
    toast({
      title: "Call Ended",
      description: "Your call has been disconnected",
    });
  };

  const toggleMicrophone = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      const audioTracks = stream.getAudioTracks();
      
      audioTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      
      setIsMicMuted(!isMicMuted);
    }
  };

  const toggleVideo = () => {
    if (localVideoRef.current && localVideoRef.current.srcObject) {
      const stream = localVideoRef.current.srcObject as MediaStream;
      const videoTracks = stream.getVideoTracks();
      
      videoTracks.forEach(track => {
        track.enabled = !track.enabled;
      });
      
      setIsVideoOff(!isVideoOff);
    }
  };

  useEffect(() => {
    return () => {
      // Clean up on component unmount
      if (localVideoRef.current && localVideoRef.current.srcObject) {
        const stream = localVideoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Video Consultation</h2>
      
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle>
            {isCallActive ? "Ongoing Call with Dr. Sarah Johnson" : "Start Video Consultation"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              <video 
                ref={localVideoRef}
                autoPlay 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                You
              </div>
            </div>
            
            {isCallActive && (
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden relative">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Dr. Sarah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  Dr. Sarah Johnson
                </div>
              </div>
            )}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {!isCallActive ? (
              <Button 
                onClick={handleStartCall} 
                disabled={isConnecting}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {isConnecting ? "Connecting..." : "Start Call"}
              </Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={toggleMicrophone}
                  className={isMicMuted ? "bg-red-100 text-red-600 border-red-200" : ""}
                >
                  {isMicMuted ? <MicOff className="mr-2 h-4 w-4" /> : <Mic className="mr-2 h-4 w-4" />}
                  {isMicMuted ? "Unmute" : "Mute"}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={toggleVideo}
                  className={isVideoOff ? "bg-red-100 text-red-600 border-red-200" : ""}
                >
                  {isVideoOff ? <VideoOff className="mr-2 h-4 w-4" /> : <Video className="mr-2 h-4 w-4" />}
                  {isVideoOff ? "Show Video" : "Hide Video"}
                </Button>
                
                <Button 
                  variant="destructive" 
                  onClick={handleEndCall}
                  className="bg-red-600 hover:bg-red-700"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  End Call
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
      
      {!isCallActive && (
        <div className="mt-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-medium mb-4">Upcoming Video Consultations</h3>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Dr. Sarah Johnson" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium">Dr. Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Cardiologist</p>
                    <p className="text-sm mt-1">Today, 10:00 AM</p>
                  </div>
                </div>
                <Button onClick={handleStartCall}>Join Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default VideoCall;
