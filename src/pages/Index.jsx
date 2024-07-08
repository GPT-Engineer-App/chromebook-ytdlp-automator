import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Mock data for YouTube video URLs
    const videoUrls = [
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
      "https://www.youtube.com/embed/3JZ_D3ELwOQ",
      "https://www.youtube.com/embed/L_jWHffIx5E",
      "https://www.youtube.com/embed/tVj0ZTS4WF4",
      "https://www.youtube.com/embed/9bZkp7q19f0",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
      "https://www.youtube.com/embed/ZZ5LpwO-An4",
      "https://www.youtube.com/embed/2Z4m4lnjxkY",
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
              <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  src={videoUrl}
                  title={`YouTube video player ${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;