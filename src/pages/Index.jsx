import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const videoIds = [
    "dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E", "M7lc1UVf-VE", "e-ORhEE9VVg",
    "C0DPdy98e4c", "kXYiU_JCYtU", "hTWKbfoikeg", "ktvTqknDobU", "y6120QOlsfU",
    "9bZkp7q19f0", "RgKAFK5djSk", "fJ9rUzIMcZQ", "6_b7RDuLwcI", "2Vv-BfVoq4g",
    "OPf0YbXqDm0", "YQHsXMglC9A", "JGwWNGJdvx8", "3tmd-ClpJxA", "2vjPBrBU-TM",
    "hT_nvWreIhg", "60ItHLz5WEA", "CevxZvSJLk8", "kJQP7kiw5Fk", "tVj0ZTS4WF4",
    "pRpeEdMmmQ0", "J---aiyznGQ", "uelHwf8o7_U", "nfWlot6h_JM", "dQw4w9WgXcQ",
    "3JZ_D3ELwOQ", "L_jWHffIx5E", "M7lc1UVf-VE", "e-ORhEE9VVg", "C0DPdy98e4c",
    "kXYiU_JCYtU", "hTWKbfoikeg", "ktvTqknDobU", "y6120QOlsfU", "9bZkp7q19f0",
    "RgKAFK5djSk", "fJ9rUzIMcZQ", "6_b7RDuLwcI", "2Vv-BfVoq4g", "OPf0YbXqDm0",
    "YQHsXMglC9A", "JGwWNGJdvx8", "3tmd-ClpJxA", "2vjPBrBU-TM", "hT_nvWreIhg"
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