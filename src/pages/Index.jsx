import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

const Index = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [downloadHistory, setDownloadHistory] = useState([]);
  const [runningDownloads, setRunningDownloads] = useState([]);
  const [progress, setProgress] = useState(0);

  const youtubeVideos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/L_jWHffIx5E",
    "https://www.youtube.com/embed/eVTXPUF4Oz4",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/OPf0YbXqDm0",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/2vjPBrBU-TM",
    "https://www.youtube.com/embed/uelHwf8o7_U",
    "https://www.youtube.com/embed/ktvTqknDobU",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/OPf0YbXqDm0",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/2vjPBrBU-TM",
    "https://www.youtube.com/embed/uelHwf8o7_U",
    "https://www.youtube.com/embed/ktvTqknDobU",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/OPf0YbXqDm0",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/2vjPBrBU-TM",
    "https://www.youtube.com/embed/uelHwf8o7_U",
    "https://www.youtube.com/embed/ktvTqknDobU",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/OPf0YbXqDm0",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/2vjPBrBU-TM",
    "https://www.youtube.com/embed/uelHwf8o7_U",
    "https://www.youtube.com/embed/ktvTqknDobU",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/ZZ5LpwO-An4",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/OPf0YbXqDm0",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/3tmd-ClpJxA",
    "https://www.youtube.com/embed/2vjPBrBU-TM",
    "https://www.youtube.com/embed/uelHwf8o7_U",
    "https://www.youtube.com/embed/ktvTqknDobU",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <Card className="w-full max-w-md mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Download YouTube Videos</CardTitle>
          {mutation.isLoading && <Progress value={progress} />}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="url" className="font-bold">YouTube URL</Label>
              <Input
                id="url"
                type="text"
                placeholder="Enter YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={mutation.isLoading} className="w-full">
              {mutation.isLoading ? "Downloading..." : "Download"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-5 gap-4">
        {youtubeVideos.map((videoUrl, index) => (
          <div key={index} className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;