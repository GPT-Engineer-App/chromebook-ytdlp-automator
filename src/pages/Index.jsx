import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { toast } from "sonner";

const Index = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");

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
    },
    onError: (error) => {
      setMessage(`Error: ${error.message}`);
      toast.error("Download failed!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(url);
  };

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
        </CardContent>
        <CardFooter>
          {message && <Text>{message}</Text>}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;