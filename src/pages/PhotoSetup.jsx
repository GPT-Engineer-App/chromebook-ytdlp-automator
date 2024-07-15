import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const mockAlbums = [
  { id: "1", title: "Vacation 2023", coverPhotoUrl: "/images/vacation.jpg", itemCount: 120 },
  { id: "2", title: "Family Reunion", coverPhotoUrl: "/images/family.jpg", itemCount: 85 },
  { id: "3", title: "Birthday Party", coverPhotoUrl: "/images/birthday.jpg", itemCount: 42 },
];

const mockPhotos = [
  { id: "1", url: "/images/photo1.jpg", filename: "photo1.jpg", nudityDetected: true, confidence: 0.95, category: "High" },
  { id: "2", url: "/images/photo2.jpg", filename: "photo2.jpg", nudityDetected: false, confidence: 0.10, category: "Low" },
  { id: "3", url: "/images/photo3.jpg", filename: "photo3.jpg", nudityDetected: true, confidence: 0.85, category: "High" },
  { id: "4", url: "/images/photo4.jpg", filename: "photo4.jpg", nudityDetected: true, confidence: 0.55, category: "Medium" },
];

const fetchAlbums = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockAlbums), 1000);
  });
};

const fetchPhotos = async (sensitivity) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredPhotos = mockPhotos.filter(
        (photo) => photo.confidence >= sensitivity
      );
      resolve(filteredPhotos);
    }, 1000);
  });
};

const PhotoSetup = () => {
  const [sensitivity, setSensitivity] = useState(0.5);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const { data: albums, isLoading: albumsLoading, error: albumsError } = useQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbums,
  });

  const { data: photos, isLoading: photosLoading, error: photosError } = useQuery({
    queryKey: ['photos', sensitivity],
    queryFn: () => fetchPhotos(sensitivity),
  });

  const handleSensitivityChange = (value) => {
    setSensitivity(value[0]);
  };

  const handlePhotoSelect = (photoId) => {
    setSelectedPhotos((prev) =>
      prev.includes(photoId)
        ? prev.filter((id) => id !== photoId)
        : [...prev, photoId]
    );
  };

  const filteredPhotos = photos?.filter(photo =>
    selectedCategory === "All" || photo.category === selectedCategory
  ) || [];

  if (albumsLoading || photosLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (albumsError || photosError) {
    return <div className="text-red-500">Error: {albumsError?.message || photosError?.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Google Photos Library</h1>
      
      <Tabs defaultValue="photos" className="mb-6">
        <TabsList>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="albums">Albums</TabsTrigger>
        </TabsList>
        
        <TabsContent value="photos">
          <div className="mb-4">
            <Label htmlFor="sensitivity" className="mb-2 block">Sensitivity: {sensitivity.toFixed(2)}</Label>
            <Slider
              id="sensitivity"
              min={0}
              max={1}
              step={0.01}
              value={[sensitivity]}
              onValueChange={handleSensitivityChange}
              className="w-full"
            />
          </div>
          
          <div className="mb-4">
            <Label className="mb-2 block">Filter by Category:</Label>
            <TabsList>
              <TabsTrigger value="All" onClick={() => setSelectedCategory("All")}>All</TabsTrigger>
              <TabsTrigger value="High" onClick={() => setSelectedCategory("High")}>High</TabsTrigger>
              <TabsTrigger value="Medium" onClick={() => setSelectedCategory("Medium")}>Medium</TabsTrigger>
              <TabsTrigger value="Low" onClick={() => setSelectedCategory("Low")}>Low</TabsTrigger>
            </TabsList>
          </div>
          
          <ScrollArea className="h-[600px] w-full rounded-md border p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={photo.url}
                    alt={photo.filename}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <Checkbox
                    checked={selectedPhotos.includes(photo.id)}
                    onCheckedChange={() => handlePhotoSelect(photo.id)}
                    className="absolute top-2 left-2"
                  />
                  {photo.nudityDetected && (
                    <Alert className="absolute bottom-0 left-0 right-0 bg-red-500 bg-opacity-75 text-white text-xs p-1 rounded-b-md">
                      <AlertTitle>Nudity Detected</AlertTitle>
                      <AlertDescription>
                        Confidence: {(photo.confidence * 100).toFixed(2)}%
                      </AlertDescription>
                    </Alert>
                  )}
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="albums">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {albums.map((album) => (
              <motion.div
                key={album.id}
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={album.coverPhotoUrl}
                  alt={album.title}
                  className="w-full h-40 object-cover rounded-md"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-md">
                  <h3 className="font-bold">{album.title}</h3>
                  <p className="text-sm">{album.itemCount} items</p>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-4">
        <Button disabled={selectedPhotos.length === 0}>
          Delete Selected ({selectedPhotos.length})
        </Button>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="mt-4">Setup Instructions</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Google Authentication Setup Instructions</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[300px] w-full rounded-md border p-4">
            <ol className="list-decimal pl-4 space-y-2">
              <li>Create a Project in Google Cloud Console</li>
              <li>Enable Google Photos Library API</li>
              <li>Create OAuth 2.0 Credentials</li>
              <li>Set Up OAuth Consent Screen</li>
              <li>Implement Google OAuth Flow</li>
              <li>Integrate with Backend for API Requests</li>
            </ol>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PhotoSetup;