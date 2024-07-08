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
    audioOnly: false,
  });

  const mutation = useMutation({
    mutationFn: async (url) => {
      const response = await fetch("http://localhost:80", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ 
          url,
          format: ytDlpConfig.format,
          quality: ytDlpConfig.quality,
          audioOnly: ytDlpConfig.audioOnly,
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

  useEffect(() => {
    // Add falling text effect
    const fallingTextContainer = document.createElement("div");
    fallingTextContainer.className = "falling-text";
    document.body.appendChild(fallingTextContainer);

    const linuxCommands = [
      "root@kali:~# nmap -sV -p 1-65535 192.168.1.1",
      "Starting Nmap 7.80 ( https://nmap.org ) at 2023-10-01 12:00 UTC",
      "Nmap scan report for 192.168.1.1",
      "Host is up (0.00023s latency).",
      "Not shown: 65530 closed ports",
      "PORT      STATE SERVICE VERSION",
      "22/tcp    open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)",
      "80/tcp    open  http    Apache httpd 2.4.38 ((Debian))",
      "443/tcp   open  ssl/http Apache httpd 2.4.38 ((Debian))",
      "MAC Address: 00:0C:29:68:8C:7B (VMware, Inc.)",
      "Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel",
      "root@kali:~# msfconsole",
      "[-] ***rting the Metasploit Framework console...",
      "[-] * WARNING: No database support: No database YAML file",
      "[-] * WARNING: No database support: No database active",
      "msf5 > use exploit/multi/handler",
      "msf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp",
      "payload => windows/meterpreter/reverse_tcp",
      "msf5 exploit(multi/handler) > set lhost 192.168.1.100",
      "lhost => 192.168.1.100",
      "msf5 exploit(multi/handler) > set lport 4444",
      "lport => 4444",
      "msf5 exploit(multi/handler) > exploit",
      "[*] Started reverse TCP handler on 192.168.1.100:4444",
      "[*] Sending stage (176195 bytes) to 192.168.1.10",
      "msf5 exploit(multi/handler) > sessions -i 1",
      "[-] Meterpreter session 1 opened (192.168.1.100:4444 -> 192.168.1.10:12345) at 2023-10-01 12:05:00 UTC",
      "meterpreter > sysinfo",
      "Computer        : 192.168.1.10",
      "OS              : Windows 10 (Build 19041).",
      "Architecture    : x64",
      "System Language : en_US",
      "Domain          : WORKGROUP",
      "Logged On Users : 1",
      "Meterpreter     : x64/windows",
      "meterpreter > exit",
      "root@kali:~#"
    ];

    const createFallingText = () => {
      const span = document.createElement("span");
      span.textContent = linuxCommands[Math.floor(Math.random() * linuxCommands.length)];
      span.style.left = `${Math.random() * 100}vw`;
      span.style.animationDuration = `${Math.random() * 5 + 5}s`;
      fallingTextContainer.appendChild(span);

      setTimeout(() => {
        fallingTextContainer.removeChild(span);
      }, 10000);
    };

    const interval = setInterval(createFallingText, 500);

    return () => {
      clearInterval(interval);
      document.body.removeChild(fallingTextContainer);
    };
  }, []);

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
          <div className="mt-4">
            <Label className="font-bold">yt-dlp Configuration</Label>
            <div className="mb-2">
              <Label htmlFor="format" className="font-bold">Format</Label>
              <Input
                id="format"
                name="format"
                type="text"
                value={ytDlpConfig.format}
                onChange={handleConfigChange}
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="quality" className="font-bold">Quality</Label>
              <Input
                id="quality"
                name="quality"
                type="text"
                value={ytDlpConfig.quality}
                onChange={handleConfigChange}
              />
            </div>
            <div className="mb-2">
              <Label htmlFor="audioOnly" className="font-bold">Audio Only</Label>
              <Checkbox
                className="w-4 h-4 text-black bg-opacity-50 checked:bg-red-500 checked:bg-opacity-50"
                checked={ytDlpConfig.audioOnly}
                onCheckedChange={(checked) => setYtDlpConfig((prevConfig) => ({
                  ...prevConfig,
                  audioOnly: checked,
                }))}
              >
                <span className="text-red-500">X</span>
              </Checkbox>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          {message && <p className="font-bold">{message}</p>}
        </CardFooter>
      </Card>

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