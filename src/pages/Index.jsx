import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "eVTXPUF4Oz4", "kXYiU_JCYtU",
    "hTWKbfoikeg", "ktvTqknDobU", "fJ9rUzIMcZQ", "C0DPdy98e4c", "9bZkp7q19f0",
    "RgKAFK5djSk", "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8",
    "kJQP7kiw5Fk", "6Dh-RL__uN4", "60ItHLz5WEA", "hT_nvWreIhg", "UceaB4D0jpo",
    "3tmd-ClpJxA", "7wtfhZwyrcc", "YykjpeuMNEk", "pXRviuL6vMY", "09R8_2nJtjg",
    "CevxZvSJLk8", "uelHwf8o7_U", "lp-EO5I60KA", "tVj0ZTS4WF4", "kffacxfA7G4",
    "2vjPBrBU-TM", "hLQl3WQQoQ0", "uelHwf8o7_U", "LsoLEjrDogU", "uelHwf8o7_U",
    "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U",
    "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U",
    "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U", "uelHwf8o7_U"
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
              <div key={index} className="relative w-full h-0 pb-[56.25%] overflow-hidden">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`YouTube video ${index + 1}`}
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