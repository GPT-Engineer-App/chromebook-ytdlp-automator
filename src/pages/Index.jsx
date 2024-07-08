import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [videos, setVideos] = useState([
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
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-6xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videos.map((video, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <iframe
                  className="w-full h-full"
                  src={video}
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