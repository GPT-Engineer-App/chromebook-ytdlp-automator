import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "M7lc1UVf-VE", "eVTXPUF4Oz4",
    "kXYiU_JCYtU", "hTWKbfoikeg", "ktvTqknDobU", "RgKAFK5djSk", "fJ9rUzIMcZQ",
    "CevxZvSJLk8", "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8",
    "09R8_2nJtjg", "3tmd-ClpJxA", "7wtfhZwyrcc", "kJQP7kiw5Fk", "tVj0ZTS4WF4",
    "60ItHLz5WEA", "hT_nvWreIhg", "pRpeEdMmmQ0", "C-u5WLJ9Yk4", "uelHwf8o7_U",
    "YykjpeuMNEk", "JGwWNGJdvx8", "RgKAFK5djSk", "fJ9rUzIMcZQ", "CevxZvSJLk8",
    "YQHsXMglC9A", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8", "09R8_2nJtjg",
    "3tmd-ClpJxA", "7wtfhZwyrcc", "kJQP7kiw5Fk", "tVj0ZTS4WF4", "60ItHLz5WEA",
    "hT_nvWreIhg", "pRpeEdMmmQ0", "C-u5WLJ9Yk4", "uelHwf8o7_U", "YykjpeuMNEk",
    "JGwWNGJdvx8", "RgKAFK5djSk", "fJ9rUzIMcZQ", "CevxZvSJLk8", "YQHsXMglC9A"
  ];

  useEffect(() => {
    // Add background image
    document.body.style.backgroundImage = "url('/images/background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-6xl mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">YouTube Video Grid</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 gap-4">
            {videoIds.map((videoId, index) => (
              <div key={index} className="relative w-full h-0 pb-[56.25%]">
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
      <Separator className="my-4" />
    </div>
  );
};

export default Index;