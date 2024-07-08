import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  "https://www.youtube.com/embed/l482T0yNkeo",
  "https://www.youtube.com/embed/V-_O7nl0Ii0",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/OPf0YbXqDm0",
  "https://www.youtube.com/embed/60ItHLz5WEA",
  "https://www.youtube.com/embed/09R8_2nJtjg",
  "https://www.youtube.com/embed/3tmd-ClpJxA",
  "https://www.youtube.com/embed/uelHwf8o7_U",
  "https://www.youtube.com/embed/7wtfhZwyrcc",
  "https://www.youtube.com/embed/2vjPBrBU-TM",
  "https://www.youtube.com/embed/ktvTqknDobU",
  "https://www.youtube.com/embed/34Na4j8AVgA",
  "https://www.youtube.com/embed/8UVNT4wvIGY",
  "https://www.youtube.com/embed/SlPhMPnQ58k",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/OPf0YbXqDm0",
  "https://www.youtube.com/embed/60ItHLz5WEA",
  "https://www.youtube.com/embed/09R8_2nJtjg",
  "https://www.youtube.com/embed/3tmd-ClpJxA",
  "https://www.youtube.com/embed/uelHwf8o7_U",
  "https://www.youtube.com/embed/7wtfhZwyrcc",
  "https://www.youtube.com/embed/2vjPBrBU-TM",
  "https://www.youtube.com/embed/ktvTqknDobU",
  "https://www.youtube.com/embed/34Na4j8AVgA",
  "https://www.youtube.com/embed/8UVNT4wvIGY",
  "https://www.youtube.com/embed/SlPhMPnQ58k",
  "https://www.youtube.com/embed/2Vv-BfVoq4g",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/OPf0YbXqDm0",
  "https://www.youtube.com/embed/60ItHLz5WEA",
  "https://www.youtube.com/embed/09R8_2nJtjg",
  "https://www.youtube.com/embed/3tmd-ClpJxA",
  "https://www.youtube.com/embed/uelHwf8o7_U",
];

const Index = () => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {videos.map((video, index) => (
        <Card key={index} className="aspect-w-16 aspect-h-9">
          <CardContent className="p-0">
            <iframe
              className="w-full h-full"
              src={video}
              title={`YouTube video player ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Index;