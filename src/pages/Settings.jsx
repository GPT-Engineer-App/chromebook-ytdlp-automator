import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Settings = () => {
  const [options, setOptions] = useState({
    format: "",
    quality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings to local storage or backend
    localStorage.setItem("ytDlpOptions", JSON.stringify(options));
    toast("Settings saved!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="format">Format</Label>
              <Input
                id="format"
                name="format"
                type="text"
                placeholder="Enter format"
                value={options.format}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="quality">Quality</Label>
              <Input
                id="quality"
                name="quality"
                type="text"
                placeholder="Enter quality"
                value={options.quality}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </CardContent>
        <CardFooter>
          <p>Configure yt-dlp options here.</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Settings;