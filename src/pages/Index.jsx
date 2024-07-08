import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Mock data for YouTube video IDs
    const videoIds = [
      "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "M7lc1UVf-VE", "e-ORhEE9VVg",
      "kXYiU_JCYtU", "hTWKbfoikeg", "ktvTqknDobU", "RgKAFK5djSk", "fJ9rUzIMcZQ",
      "CevxZvSJLk8", "YQHsXMglC9A", "6Ejga4kJUts", "Zi_XLOBDo_Y", "OPf0YbXqDm0",
      "2Vv-BfVoq4g", "JGwWNGJdvx8", "09R8_2nJtjg", "3tmd-ClpJxA", "kJQP7kiw5Fk",
      "UceaB4D0jpo", "pRpeEdMmmQ0", "60ItHLz5WEA", "hT_nvWreIhg", "CevxZvSJLk8",
      "YQHsXMglC9A", "6Ejga4kJUts", "Zi_XLOBDo_Y", "OPf0YbXqDm0", "2Vv-BfVoq4g",
      "JGwWNGJdvx8", "09R8_2nJtjg", "3tmd-ClpJxA", "kJQP7kiw5Fk", "UceaB4D0jpo",
      "pRpeEdMmmQ0", "60ItHLz5WEA", "hT_nvWreIhg", "CevxZvSJLk8", "YQHsXMglC9A",
      "6Ejga4kJUts", "Zi_XLOBDo_Y", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8",
      "09R8_2nJtjg", "3tmd-ClpJxA", "kJQP7kiw5Fk", "UceaB4D0jpo", "pRpeEdMmmQ0"
    ];
    setVideos(videoIds);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-6xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My YouTube Video Collection</CardTitle>
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