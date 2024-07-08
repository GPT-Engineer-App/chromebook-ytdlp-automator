
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "eVTXPUF4Oz4", "kXYiU_JCYtU",
    "hTWKbfoikeg", "ktvTqknDobU", "fJ9rUzIMcZQ", "C0DPdy98e4c", "YQHsXMglC9A",
    "RgKAFK5djSk", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8", "kJQP7kiw5Fk",
    "pRpeEdMmmQ0", "09R8_2nJtjg", "CevxZvSJLk8", "hT_nvWreIhg", "7wtfhZwyrcc",
    "60ItHLz5WEA", "hLQl3WQQoQ0", "3tmd-ClpJxA", "uelHwf8o7_U", "NF-kLy44Hls",
    "YykjpeuMNEk", "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "eVTXPUF4Oz4",
    "kXYiU_JCYtU", "hTWKbfoikeg", "ktvTqknDobU", "fJ9rUzIMcZQ", "C0DPdy98e4c",
    "YQHsXMglC9A", "RgKAFK5djSk", "OPf0YbXqDm0", "2Vv-BfVoq4g", "JGwWNGJdvx8",
    "kJQP7kiw5Fk", "pRpeEdMmmQ0", "09R8_2nJtjg", "CevxZvSJLk8", "hT_nvWreIhg",
    "7wtfhZwyrcc", "60ItHLz5WEA", "hLQl3WQQoQ0", "3tmd-ClpJxA", "uelHwf8o7_U"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-6xl mb-4 text-center">
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
      
    </div>
  );
};

export default Index;