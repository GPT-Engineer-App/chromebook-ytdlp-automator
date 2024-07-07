import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
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
  const [progress, setProgress] = useState(0);

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
      toast("Download complete!");
      setDownloadHistory((prevHistory) => [...prevHistory, { url, data }]);
      localStorage.setItem("downloadHistory", JSON.stringify([...downloadHistory, { url, data }]));
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`);
      toast.error("Download failed!");
    },
    onSettled: () => {
      setProgress(0);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(url);
  };

  const handleTabSelect = (tabUrl) => {
    setSelectedTab(tabUrl);
    mutation.mutate(tabUrl);
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

    const storedHistory = JSON.parse(localStorage.getItem("downloadHistory"));
    if (storedHistory) {
      setDownloadHistory(storedHistory);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Download YouTube Videos</CardTitle>
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
          {mutation.isLoading && <Progress value={progress} />}
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
        </CardContent>
        <CardFooter>
          {message && <p>{message}</p>}
        </CardFooter>
      </Card>
      <Card className="w-full max-w-md mt-4">
        <CardHeader>
          <CardTitle>Download History</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {downloadHistory.map((item, index) => (
              <li key={index}>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  {item.url}
                </a>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;