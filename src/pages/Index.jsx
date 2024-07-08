import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  useEffect(() => {
    // Add background image
    document.body.style.backgroundImage = "url('/images/background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "eVTXPUF4Oz4", "kXYiU_JCYtU",
    "hTWKbfoikeg", "ktvTqknDobU", "CevxZvSJLk8", "RgKAFK5djSk", "fJ9rUzIMcZQ",
    "QK8mJJJvaes", "9bZkp7q19f0", "OPf0YbXqDm0", "YQHsXMglC9A", "2Vv-BfVoq4g",
    "JGwWNGJdvx8", "kJQP7kiw5Fk", "tVj0ZTS4WF4", "2vjPBrBU-TM", "hT_nvWreIhg",
    "7wtfhZwyrcc", "60ItHLz5WEA", "09R8_2nJtjg", "CevxZvSJLk8", "RgKAFK5djSk",
    "fJ9rUzIMcZQ", "QK8mJJvaes", "9bZkp7q19f0", "OPf0YbXqDm0", "YQHsXMglC9A",
    "2Vv-BfVoq4g", "JGwWNGJdvx8", "kJQP7kiw5Fk", "tVj0ZTS4WF4", "2vjPBrBU-TM",
    "hT_nvWreIhg", "7wtfhZwyrcc", "60ItHLz5WEA", "09R8_2nJtjg", "CevxZvSJLk8",
    "RgKAFK5djSk", "fJ9rUzIMcZQ", "QK8mJJJvaes", "9bZkp7q19f0", "OPf0YbXqDm0",
    "YQHsXMglC9A", "2Vv-BfVoq4g", "JGwWNGJdvx8", "kJQP7kiw5Fk", "tVj0ZTS4WF4"
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