import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Settings } from "lucide-react";

const Index = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState("");
  const [downloadHistory, setDownloadHistory] = useState([]);
  const [runningDownloads, setRunningDownloads] = useState([]);
  const [progress, setProgress] = useState(0);
  const [ytDlpConfig, setYtDlpConfig] = useState({
    format: "mp4",
    videoQuality: "best",
    audioFormat: "mp3",
    downloadSubtitles: false,
    downloadThumbnail: false,
    customArguments: "",
  });
  const [previewContent, setPreviewContent] = useState(null);
  const [buttonState, setButtonState] = useState("Load URL/Tab");

  const mutation = useMutation({
    mutationFn: async (url) => {
      const response = await fetch("http://localhost:80", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ 
          url,
          ...ytDlpConfig,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text();
      return data;
    },
    onSuccess: (data) => {
      setMessage(data);
      setDownloadHistory((prevHistory) => [...prevHistory, { url, data }]);
      setRunningDownloads((prevRunning) => prevRunning.filter((item) => item !== url));
      toast("Download complete!");
      setButtonState("Load URL/Tab");
      setPreviewContent(null);
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`);
      setRunningDownloads((prevRunning) => prevRunning.filter((item) => item !== url));
      toast.error("Download failed!");
      setButtonState("Load URL/Tab");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (buttonState === "Load URL/Tab") {
      loadPreview();
    } else {
      setRunningDownloads((prevRunning) => [...prevRunning, url]);
      mutation.mutate(url);
    }
  };

  const loadPreview = async () => {
    try {
      if (url.includes("youtube.com") || url.includes("youtu.be")) {
        const videoId = extractYouTubeId(url);
        if (videoId) {
          setPreviewContent(
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${videoId}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          );
          setButtonState("Download");
        } else {
          throw new Error("Invalid YouTube URL");
        }
      } else {
        setPreviewContent(<p>Preview not available for this URL</p>);
        setButtonState("Download");
      }
    } catch (error) {
      toast.error("Failed to load preview");
      setPreviewContent(null);
      setButtonState("Load URL/Tab");
    }
  };

  const extractYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const handleTabSelect = (tabUrl) => {
    setSelectedTab(tabUrl);
    setUrl(tabUrl);
    setButtonState("Load URL/Tab");
    setPreviewContent(null);
  };

  const handleConfigChange = (name, value) => {
    setYtDlpConfig((prevConfig) => ({
      ...prevConfig,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        setTabs(tabs);
      });
    } else {
      setTabs([
        { id: 1, url: "https://www.youtube.com/watch?v=example1", title: "Example Video 1" },
        { id: 2, url: "https://www.youtube.com/watch?v=example2", title: "Example Video 2" },
      ]);
    }
  }, []);

  useEffect(() => {
    if (mutation.isLoading) {
      const interval = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setProgress(0);
    }
  }, [mutation.isLoading]);

  useEffect(() => {
    const fishImages = ['/images/fish1.png', '/images/fish2.png', '/images/fish3.png'];
    const flyingFishContainer = document.createElement("div");
    flyingFishContainer.className = "flying-fish";
    document.body.appendChild(flyingFishContainer);

    const createFlyingFish = () => {
      const img = document.createElement("img");
      img.src = fishImages[Math.floor(Math.random() * fishImages.length)];
      img.style.top = `${Math.random() * 100}%`;
      img.style.animationDuration = `${Math.random() * 10 + 5}s`;
      flyingFishContainer.appendChild(img);

      setTimeout(() => {
        flyingFishContainer.removeChild(img);
      }, 15000);
    };

    const interval = setInterval(createFlyingFish, 2000);

    return () => {
      clearInterval(interval);
      document.body.removeChild(flyingFishContainer);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/musical-battlefield.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";

    return () => {
      document.body.style.backgroundImage = "";
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
      <div className="fixed bottom-4 right-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" className="w-12 h-12">
              <Settings className="h-6 w-6" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Advanced yt-dlp Configuration</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="format" className="text-right">
                  Video Format
                </Label>
                <Select
                  value={ytDlpConfig.format}
                  onValueChange={(value) => handleConfigChange("format", value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp4">MP4</SelectItem>
                    <SelectItem value="mkv">MKV</SelectItem>
                    <SelectItem value="webm">WebM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="videoQuality" className="text-right">
                  Video Quality
                </Label>
                <Select
                  value={ytDlpConfig.videoQuality}
                  onValueChange={(value) => handleConfigChange("videoQuality", value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="best">Best</SelectItem>
                    <SelectItem value="worst">Worst</SelectItem>
                    <SelectItem value="1080p">1080p</SelectItem>
                    <SelectItem value="720p">720p</SelectItem>
                    <SelectItem value="480p">480p</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="audioFormat" className="text-right">
                  Audio Format
                </Label>
                <Select
                  value={ytDlpConfig.audioFormat}
                  onValueChange={(value) => handleConfigChange("audioFormat", value)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select audio format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mp3">MP3</SelectItem>
                    <SelectItem value="aac">AAC</SelectItem>
                    <SelectItem value="wav">WAV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="downloadSubtitles"
                  checked={ytDlpConfig.downloadSubtitles}
                  onCheckedChange={(checked) => handleConfigChange("downloadSubtitles", checked)}
                />
                <Label htmlFor="downloadSubtitles">Download Subtitles</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="downloadThumbnail"
                  checked={ytDlpConfig.downloadThumbnail}
                  onCheckedChange={(checked) => handleConfigChange("downloadThumbnail", checked)}
                />
                <Label htmlFor="downloadThumbnail">Download Thumbnail</Label>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="customArguments" className="text-right">
                  Custom Arguments
                </Label>
                <Input
                  id="customArguments"
                  value={ytDlpConfig.customArguments}
                  onChange={(e) => handleConfigChange("customArguments", e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

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
                onChange={(e) => {
                  setUrl(e.target.value);
                  setButtonState("Load URL/Tab");
                  setPreviewContent(null);
                }}
                required
              />
            </div>
            <Button type="submit" disabled={mutation.isLoading} className="w-full">
              {buttonState}
            </Button>
          </form>
          <div className="mt-4">
            <Label htmlFor="tabs" className="font-bold">Or select an active tab</Label>
            <Select onValueChange={handleTabSelect}>
              <SelectTrigger id="tabs" className="w-full">
                <SelectValue placeholder="Select a tab..." />
              </SelectTrigger>
              <SelectContent>
                {tabs.map((tab) => (
                  <SelectItem key={tab.id} value={tab.url}>
                    {tab.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          {message && <p className="font-bold">{message}</p>}
        </CardFooter>
      </Card>

      {previewContent && (
        <Card className="w-full max-w-md mb-4 text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {previewContent}
          </CardContent>
        </Card>
      )}

      <Card className="w-full max-w-md mb-4 text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Running Downloads</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {runningDownloads.map((download, index) => (
              <li key={index} className="font-bold">{download}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Separator className="my-4" />

      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Download History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {downloadHistory.map((history, index) => (
              <li key={index} className="font-bold">{history.url}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;