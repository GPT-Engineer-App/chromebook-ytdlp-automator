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
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "Zi_XLOBDo_Y", "9bZkp7q19f0",
    "eVTXPUF4Oz4", "hTWKbfoikeg", "CevxZvSJLk8", "RgKAFK5djSk", "YQHsXMglC9A",
    "kXYiU_JCYtU", "fJ9rUzIMcZQ", "ktvTqknDobU", "6Ejga4kJUts", "OPf0YbXqDm0",
    "2Vv-BfVoq4g", "JGwWNGJdvx8", "2vjPBrBU-TM", "3tmd-ClpJxA", "60ItHLz5WEA",
    "hT_nvWreIhg", "pRpeEdMmmQ0", "09R8_2nJtjg", "C6MOKXm8x50", "uelHwf8o7_U",
    "kJQP7kiw5Fk", "YykjpeuMNEk", "tVj0ZTS4WF4", "7wtfhZwyrcc", "iS1g8G_njx8",
    "uelHwf8o7_U", "hLQl3WQQoQ0", "e-ORhEE9VVg", "lp-EO5I60KA", "M11SvDtPBhA",
    "JGwWNGJdvx8", "2vjPBrBU-TM", "3tmd-ClpJxA", "60ItHLz5WEA", "hT_nvWreIhg",
    "pRpeEdMmmQ0", "09R8_2nJtjg", "C6MOKXm8x50", "uelHwf8o7_U", "kJQP7kiw5Fk",
    "YykjpeuMNEk", "tVj0ZTS4WF4", "7wtfhZwyrcc", "iS1g8G_njx8", "uelHwf8o7_U"
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
                  className="w-full h-full"
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