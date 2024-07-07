import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

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
    quality: "best",
    subtitles: false,
  });

  const mutation = useMutation({
    mutationFn: async (url) => {
      const response = await fetch("http://localhost:80", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ url }),
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
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`);
      setRunningDownloads((prevRunning) => prevRunning.filter((item) => item !== url));
      toast.error("Download failed!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setRunningDownloads((prevRunning) => [...prevRunning, url]);
    mutation.mutate(url);
  };

  const handleTabSelect = (tabUrl) => {
    setSelectedTab(tabUrl);
    setRunningDownloads((prevRunning) => [...prevRunning, tabUrl]);
    mutation.mutate(tabUrl);
  };

  const handleConfigChange = (e) => {
    const { name, value, type, checked } = e.target;
    setYtDlpConfig((prevConfig) => ({
      ...prevConfig,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    // Mock chrome.tabs.query for development
    if (typeof chrome !== "undefined" && chrome.tabs) {
      chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        setTabs(tabs);
      });
    } else {
      // Mock data for development
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Download YouTube Videos</CardTitle>
          {mutation.isLoading && <Progress value={progress} />}
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="url">YouTube URL</Label>
              <Input
                id="url"
                type="text"
                placeholder="Enter YouTube URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={mutation.isLoading}>
              {mutation.isLoading ? "Downloading..." : "Download"}
            </Button>
          </form>
          <div className="mt-4">
            <Label htmlFor="tabs">Or select an active tab</Label>
            <Select onValueChange={handleTabSelect}>
              <SelectTrigger id="tabs">
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
          <div className="mt-4">
            <Label>yt-dlp Configuration</Label>
            <div className="mb-2">
              <Label htmlFor="format">Format</Label>
              <Input
                id="format"
                name="format"
                type="text"
                value={ytDlpConfig.format}
                onChange={handleConfigChange}
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="quality">Quality</Label>
              <Input
                id="quality"
                name="quality"
                type="text"
                value={ytDlpConfig.quality}
                onChange={handleConfigChange}
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="subtitles">Subtitles</Label>
              <Input
                id="subtitles"
                name="subtitles"
                type="checkbox"
                checked={ytDlpConfig.subtitles}
                onChange={handleConfigChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <Label>Running Downloads</Label>
            <ul>
              {runningDownloads.map((download, index) => (
                <li key={index}>{download}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <Label>Download History</Label>
            <ul>
              {downloadHistory.map((history, index) => (
                <li key={index}>{history.url}</li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          {message && <p>{message}</p>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;