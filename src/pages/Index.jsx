import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
    "eVTXPUF4Oz4", "hTWKbfoikeg", "fJ9rUzIMcZQ", "kXYiU_JCYtU", "RgKAFK5djSk",
    "YQHsXMglC9A", "CevxZvSJLk8", "OPf0YbXqDm0", "2Vv-BfVoq4g", "ktvTqknDobU",
    "JGwWNGJdvx8", "6Ejga4kJUts", "hLQl3WQQoQ0", "3tmd-ClpJxA", "60ItHLz5WEA",
    "pRpeEdMmmQ0", "kJQP7kiw5Fk", "09R8_2nJtjg", "C-u5WLJ9Yk4", "7wtfhZwyrcc",
    "uelHwf8o7_U", "YykjpeuMNEk", "tVj0ZTS4WF4", "iS1g8G_njx8", "2vjPBrBU-TM",
    "hT_nvWreIhg", "e-ORhEE9VVg", "J9NQFACZYEU", "lp-EO5I60KA", "LsoLEjrDogU",
    "uelHwf8o7_U", "YykjpeuMNEk", "tVj0ZTS4WF4", "iS1g8G_njx8", "2vjPBrBU-TM",
    "hT_nvWreIhg", "e-ORhEE9VVg", "J9NQFACZYEU", "lp-EO5I60KA", "LsoLEjrDogU",
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "Zi_XLOBDo_Y", "9bZkp7q19f0"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <div className="grid grid-cols-5 gap-4">
        {videoIds.map((videoId, index) => (
          <Card key={index} className="w-full h-full">
            <CardContent className="p-0">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video player ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;