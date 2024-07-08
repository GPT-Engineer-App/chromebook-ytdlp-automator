import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { google } from "googleapis";

const PhotoSetup = () => {
  const [apiKey, setApiKey] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const photos = await fetchPhotos(apiKey, albumId);
      setPhotos(photos);
      toast("Photos fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch photos!");
    }
  };

  const fetchPhotos = async (apiKey, albumId) => {
    const photosLibrary = google.photoslibrary({
      version: "v1",
      auth: apiKey,
    });

    const response = await photosLibrary.albums.get({
      albumId: albumId,
    });

    const mediaItems = response.data.mediaItems || [];
    return mediaItems.map((item) => ({
      id: item.id,
      baseUrl: item.baseUrl,
      filename: item.filename,
    }));
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
            <Button type="submit">Fetch Photos</Button>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Photo Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div key={photo.id} className="relative">
                <img src={`${photo.baseUrl}=w200-h200`} alt={photo.filename} className="w-full h-full object-cover rounded-md" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                  {photo.filename}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoSetup;