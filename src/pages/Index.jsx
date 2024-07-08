import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [videos, setVideos] = useState([
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l482T0yNkeo",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/6_b7RDuLwcI",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/04854XqcfCY",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l482T0yNkeo",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/6_b7RDuLwcI",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/04854XqcfCY",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l482T0yNkeo",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/6_b7RDuLwcI",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/04854XqcfCY",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l482T0yNkeo",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/6_b7RDuLwcI",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/04854XqcfCY",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l482T0yNkeo",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/6_b7RDuLwcI",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/04854XqcfCY",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l482T0yNkeo",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
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
              <div key={index} className="relative pb-16x9">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
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