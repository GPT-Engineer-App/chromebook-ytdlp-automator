import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const mockDetectionResults = [
  { id: "1", filename: "photo1.jpg", nudityDetected: true, confidence: 0.95, category: "High" },
  { id: "2", filename: "photo2.jpg", nudityDetected: false, confidence: 0.10, category: "Low" },
  { id: "3", filename: "photo3.jpg", nudityDetected: true, confidence: 0.85, category: "High" },
  { id: "4", filename: "photo4.jpg", nudityDetected: true, confidence: 0.55, category: "Medium" },
];

const PhotoSetup = () => {
  const [apiKey, setApiKey] = useState("");
  const [albumId, setAlbumId] = useState("");
  const [photos, setPhotos] = useState([]);
  const [detectionResults, setDetectionResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("High");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const photos = await fetchPhotos(apiKey, albumId);
      setPhotos(photos);
      setDetectionResults(mockDetectionResults); // Use mock data for detection results
      toast("Photos fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch photos!");
    }
  };

  const fetchPhotos = async (apiKey, albumId) => {
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
          pageSize: 50,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    const data = await response.json();
    const mediaItems = data.mediaItems || [];
    return mediaItems.map((item) => ({
      id: item.id,
      baseUrl: item.baseUrl,
      filename: item.filename,
    }));
  };

  const filteredResults = detectionResults.filter(result => result.category === selectedCategory);

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
          <Tabs defaultValue="High" onValueChange={setSelectedCategory}>
            <TabsList>
              <TabsTrigger value="High">High</TabsTrigger>
              <TabsTrigger value="Medium">Medium</TabsTrigger>
              <TabsTrigger value="Low">Low</TabsTrigger>
            </TabsList>
            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredResults.map((photo) => (
                  <div key={photo.id} className="relative">
                    <img src={`${photo.baseUrl}=w200-h200`} alt={photo.filename} className="w-full h-full object-cover rounded-md" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                      {photo.filename}
                    </div>
                    {photo.nudityDetected && (
                      <Alert className="absolute top-0 left-0 right-0 bg-opacity-75">
                        <AlertTitle>Nudity Detected</AlertTitle>
                        <AlertDescription>
                          Confidence: {photo.confidence * 100}%
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoSetup;