import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "tVj0ZTS4WF4", "hY7m5jjJ9mM",
    "eVTXPUF4Oz4", "kXYiU_JCYtU", "fJ9rUzIMcZQ", "2Vv-BfVoq4g", "RgKAFK5djSk",
    "OPf0YbXqDm0", "YQHsXMglC9A", "CevxZvSJLk8", "JGwWNGJdvx8", "kJQP7kiw5Fk",
    "6Dh-RL__uN4", "hT_nvWreIhg", "ktvTqknDobU", "60ItHLz5WEA", "9bZkp7q19f0",
    "UceaB4D0jpo", "3AtDnEC4zak", "uelHwf8o7_U", "iS1g8G_njx8", "9bZkp7q19f0",
    "RgKAFK5djSk", "OPf0YbXqDm0", "YQHsXMglC9A", "CevxZvSJLk8", "JGwWNGJdvx8",
    "kJQP7kiw5Fk", "6Dh-RL__uN4", "hT_nvWreIhg", "ktvTqknDobU", "60ItHLz5WEA",
    "9bZkp7q19f0", "UceaB4D0jpo", "3AtDnEC4zak", "uelHwf8o7_U", "iS1g8G_njx8",
    "9bZkp7q19f0", "RgKAFK5djSk", "OPf0YbXqDm0", "YQHsXMglC9A", "CevxZvSJLk8",
    "JGwWNGJdvx8", "kJQP7kiw5Fk", "6Dh-RL__uN4", "hT_nvWreIhg", "ktvTqknDobU"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-4xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videoIds.map((videoId, index) => (
              <div key={index} className="aspect-w-16 aspect-h-9">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
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