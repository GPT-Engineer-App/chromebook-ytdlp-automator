import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const videoIds = [
  "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "Zi_XLOBDo_Y", "kJQP7kiw5Fk",
  "CevxZvSJLk8", "hT_nvWreIhg", "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g",
  "RgKAFK5djSk", "fRh_vgS2dFE", "JGwWNGJdvx8", "09R8_2nJtjg", "3tmd-ClpJxA",
  "60ItHLz5WEA", "pRpeEdMmmQ0", "kffacxfA7G4", "e-ORhEE9VVg", "SlPhMPnQ58k",
  "CevxZvSJLk8", "hT_nvWreIhg", "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g",
  "RgKAFK5djSk", "fRh_vgS2dFE", "JGwWNGJdvx8", "09R8_2nJtjg", "3tmd-ClpJxA",
  "60ItHLz5WEA", "pRpeEdMmmQ0", "kffacxfA7G4", "e-ORhEE9VVg", "SlPhMPnQ58k",
  "CevxZvSJLk8", "hT_nvWreIhg", "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g",
  "RgKAFK5djSk", "fRh_vgS2dFE", "JGwWNGJdvx8", "09R8_2nJtjg", "3tmd-ClpJxA",
  "60ItHLz5WEA", "pRpeEdMmmQ0", "kffacxfA7G4", "e-ORhEE9VVg", "SlPhMPnQ58k"
];

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-4xl mb-4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videoIds.map((videoId, index) => (
              <div key={index} className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-md shadow-lg">
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
    </div>
  );
};

export default Index;