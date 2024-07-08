import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const videoIds = [
  "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "tVj0ZTS4WF4", "kJQP7kiw5Fk",
  "hT_nvWreIhg", "CevxZvSJLk8", "RgKAFK5djSk", "OPf0YbXqDm0", "2Vv-BfVoq4g",
  "JGwWNGJdvx8", "fRh_vgS2dFE", "YQHsXMglC9A", "09R8_2nJtjg", "7wtfhZwyrcc",
  "ktvTqknDobU", "iS1g8G_njx8", "uelHwf8o7_U", "kXYiU_JCYtU", "e-ORhEE9VVg",
  "YykjpeuMNEk", "CevxZvSJLk8", "hT_nvWreIhg", "RgKAFK5djSk", "OPf0YbXqDm0",
  "2Vv-BfVoq4g", "JGwWNGJdvx8", "fRh_vgS2dFE", "YQHsXMglC9A", "09R8_2nJtjg",
  "7wtfhZwyrcc", "ktvTqknDobU", "iS1g8G_njx8", "uelHwf8o7_U", "kXYiU_JCYtU",
  "e-ORhEE9VVg", "YykjpeuMNEk", "CevxZvSJLk8", "hT_nvWreIhg", "RgKAFK5djSk",
  "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8", "fRh_vgS2dFE", "YQHsXMglC9A",
  "09R8_2nJtjg", "7wtfhZwyrcc", "ktvTqknDobU", "iS1g8G_njx8", "uelHwf8o7_U"
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-6xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videoIds.map((videoId, index) => (
              <div key={index} className="relative pb-56.25% h-0 overflow-hidden">
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