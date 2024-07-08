import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "M7lc1UVf-VE", "e-ORhEE9VVg",
    "kXYiU_JCYtU", "hTWKbfoikeg", "CevxZvSJLk8", "RgKAFK5djSk", "YQHsXMglC9A",
    "fJ9rUzIMcZQ", "6Ejga4kJUts", "9bZkp7q19f0", "OPf0YbXqDm0", "2Vv-BfVoq4g",
    "JGwWNGJdvx8", "kJQP7kiw5Fk", "3tmd-ClpJxA", "2vjPBrBU-TM", "hT_nvWreIhg",
    "60ItHLz5WEA", "pRpeEdMmmQ0", "CevxZvSJLk8", "RgKAFK5djSk", "YQHsXMglC9A",
    "fJ9rUzIMcZQ", "6Ejga4kJUts", "9bZkp7q19f0", "OPf0YbXqDm0", "2Vv-BfVoq4g",
    "JGwWNGJdvx8", "kJQP7kiw5Fk", "3tmd-ClpJxA", "2vjPBrBU-TM", "hT_nvWreIhg",
    "60ItHLz5WEA", "pRpeEdMmmQ0", "CevxZvSJLk8", "RgKAFK5djSk", "YQHsXMglC9A",
    "fJ9rUzIMcZQ", "6Ejga4kJUts", "9bZkp7q19f0", "OPf0YbXqDm0", "2Vv-BfVoq4g",
    "JGwWNGJdvx8", "kJQP7kiw5Fk", "3tmd-ClpJxA", "2vjPBrBU-TM", "hT_nvWreIhg"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-4xl mb-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videoIds.map((videoId, index) => (
              <div key={index} className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
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
    </div>
  );
};

export default Index;