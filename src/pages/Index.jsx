import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // List of unique YouTube video IDs
    const videoIds = [
      "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "eVTXPUF4Oz4", "kXYiU_JCYtU",
      "hTWKbfoikeg", "ktvTqknDobU", "CevxZvSJLk8", "RgKAFK5djSk", "fJ9rUzIMcZQ",
      "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8", "09R8_2nJtjg",
      "7wtfhZwyrcc", "60ItHLz5WEA", "UceaB4D0jpo", "hT_nvWreIhg", "kJQP7kiw5Fk",
      "pRpeEdMmmQ0", "CevxZvSJLk8", "RgKAFK5djSk", "fJ9rUzIMcZQ", "YQHsXMglC9A",
      "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8", "09R8_2nJtjg", "7wtfhZwyrcc",
      "60ItHLz5WEA", "UceaB4D0jpo", "hT_nvWreIhg", "kJQP7kiw5Fk", "pRpeEdMmmQ0",
      "CevxZvSJLk8", "RgKAFK5djSk", "fJ9rUzIMcZQ", "YQHsXMglC9A", "OPf0YbXqDm0",
      "2Vv-BfVoq4g", "JGwWNGJdvx8", "09R8_2nJtjg", "7wtfhZwyrcc", "60ItHLz5WEA",
      "UceaB4D0jpo", "hT_nvWreIhg", "kJQP7kiw5Fk", "pRpeEdMmmQ0", "CevxZvSJLk8"
    ];
    setVideos(videoIds);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-6xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videos.map((videoId, index) => (
              <div key={index} className="relative w-full h-0 pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
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