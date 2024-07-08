import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Mock data for YouTube video URLs
    const videoUrls = [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/L_jWHffIx5E",
      "https://www.youtube.com/embed/2Vv-BfVoq4g",
      "https://www.youtube.com/embed/9bZkp7q19f0",
      "https://www.youtube.com/embed/6_b7RDuLwcI",
      "https://www.youtube.com/embed/OPf0YbXqDm0",
      "https://www.youtube.com/embed/60ItHLz5WEA",
      "https://www.youtube.com/embed/3tmd-ClpJxA",
      "https://www.youtube.com/embed/uelHwf8o7_U",
      "https://www.youtube.com/embed/2vjPBrBU-TM",
      "https://www.youtube.com/embed/ktvTqknDobU",
      "https://www.youtube.com/embed/09R8_2nJtjg",
      "https://www.youtube.com/embed/SlPhMPnQ58k",
      "https://www.youtube.com/embed/7wtfhZwyrcc",
      "https://www.youtube.com/embed/8UVNT4wvIGY",
      "https://www.youtube.com/embed/0KSOMA3QBU0",
      "https://www.youtube.com/embed/34Na4j8AVgA",
      "https://www.youtube.com/embed/8j741TUIET0",
      "https://www.youtube.com/embed/2Y6Nne8RvaA",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
      "https://www.youtube.com/embed/1G4isv_Fylg",
    ];
    setVideos(videoUrls);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-4xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videos.map((videoUrl, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <Separator className="my-4" />
    </div>
  );
};

export default Index;