import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PhotoSetup = () => {
  const [apiKey, setApiKey] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPhotos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://photoslibrary.googleapis.com/v1/mediaItems:search`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            albumId: albumId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch photos");
      }

      const data = await response.json();
      setPhotos(data.mediaItems || []);
      toast("Photos fetched successfully!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotos();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>Google Photos Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                type="text"
                placeholder="Enter your Google Photos API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="albumId">Album ID</Label>
              <Input
                id="albumId"
                type="text"
                placeholder="Enter your Album ID"
                value={albumId}
                onChange={(e) => setAlbumId(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Fetching..." : "Fetch Photos"}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Photo Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.baseUrl}
                alt={photo.filename}
                className="w-full h-auto rounded"
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoSetup;