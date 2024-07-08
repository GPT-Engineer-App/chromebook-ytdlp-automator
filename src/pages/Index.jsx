import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "eVTXPUF4Oz4", "kXYiU_JCYtU",
    "hTWKbfoikeg", "ktvTqknDobU", "fJ9rUzIMcZQ", "QK8mJJJvaes", "9bZkp7q19f0",
    "RgKAFK5djSk", "CevxZvSJLk8", "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g",
    "JGwWNGJdvx8", "6Ejga4kJUts", "hLQl3WQQoQ0", "kJQP7kiw5Fk", "3tmd-ClpJxA",
    "60ItHLz5WEA", "e-ORhEE9VVg", "tVj0ZTS4WF4", "7wtfhZwyrcc", "C-u5WLJ9Yk4",
    "uelHwf8o7_U", "pRpeEdMmmQ0", "lp-EO5I60KA", "YqeW9_5kURI", "09R8_2nJtjg",
    "iS1g8G_njx8", "kffacxfA7G4", "2vjPBrBU-TM", "uelHwf8o7_U", "hT_nvWreIhg",
    "CevxZvSJLk8", "RgKAFK5djSk", "60ItHLz5WEA", "e-ORhEE9VVg", "tVj0ZTS4WF4",
    "7wtfhZwyrcc", "C-u5WLJ9Yk4", "pRpeEdMmmQ0", "lp-EO5I60KA", "YqeW9_5kURI",
    "09R8_2nJtjg", "iS1g8G_njx8", "kffacxfA7G4", "2vjPBrBU-TM", "uelHwf8o7_U"
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
              <div key={index} className="relative pb-56.25% h-0 overflow-hidden rounded-md shadow-lg">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`YouTube Video ${index + 1}`}
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