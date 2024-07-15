import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
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
import { Badge } from "@/components/ui/badge";

const mockPhotos = [
  { id: "1", filename: "photo1.jpg", nudityDetected: true, confidence: 0.95, category: "Severe" },
  { id: "2", filename: "photo2.jpg", nudityDetected: false, confidence: 0.10, category: "Mild" },
  { id: "3", filename: "photo3.jpg", nudityDetected: true, confidence: 0.85, category: "Severe" },
  { id: "4", filename: "photo4.jpg", nudityDetected: true, confidence: 0.55, category: "Moderate" },
];

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

const categorizePhotos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const categories = {
        'Mild': mockPhotos.filter(photo => photo.category === 'Mild'),
        'Moderate': mockPhotos.filter(photo => photo.category === 'Moderate'),
        'Severe': mockPhotos.filter(photo => photo.category === 'Severe'),
      };
      resolve(categories);
    }, 1500);
  });
};

const PhotoSetup = () => {
  const [sensitivity, setSensitivity] = useState(0.5);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhotos, setSelectedPhotos] = useState([]);
  const [categories, setCategories] = useState({});

  const { data: photos, isLoading: photosLoading, error: photosError } = useQuery({
    queryKey: ['photos', sensitivity],
    queryFn: () => fetchPhotos(sensitivity),
  });

  const categorizePhotosMutation = useMutation({
    mutationFn: categorizePhotos,
    onSuccess: (data) => {
      setCategories(data);
      toast.success("Photos categorized successfully!");
    },
    onError: () => {
      toast.error("Failed to categorize photos");
    },
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

  const handleBulkDownload = () => {
    if (selectedPhotos.length === 0) {
      toast.error("No images selected");
      return;
    }
    // Implement bulk download logic here
    toast.success(`Downloading ${selectedPhotos.length} images`);
  };

  useEffect(() => {
    document.body.style.backgroundImage = "url('/images/photo-setup-background.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";

    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  if (photosLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (photosError) {
    return <div className="text-red-500">Error: {photosError.message}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Card className="bg-white bg-opacity-90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold mb-6">Nudity Detection Categories</CardTitle>
        </CardHeader>
        <CardContent>
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
          
          <Tabs defaultValue="All" className="mb-6">
            <TabsList>
              <TabsTrigger value="All" onClick={() => setSelectedCategory("All")}>All</TabsTrigger>
              <TabsTrigger value="Mild" onClick={() => setSelectedCategory("Mild")}>Mild</TabsTrigger>
              <TabsTrigger value="Moderate" onClick={() => setSelectedCategory("Moderate")}>Moderate</TabsTrigger>
              <TabsTrigger value="Severe" onClick={() => setSelectedCategory("Severe")}>Severe</TabsTrigger>
            </TabsList>
            
            <TabsContent value="All">
              <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredPhotos.map((photo) => (
                    <PhotoCard key={photo.id} photo={photo} onSelect={handlePhotoSelect} isSelected={selectedPhotos.includes(photo.id)} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            
            {["Mild", "Moderate", "Severe"].map((category) => (
              <TabsContent key={category} value={category}>
                <ScrollArea className="h-[600px] w-full rounded-md border p-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {categories[category]?.map((photo) => (
                      <PhotoCard key={photo.id} photo={photo} onSelect={handlePhotoSelect} isSelected={selectedPhotos.includes(photo.id)} />
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mt-4 flex justify-between items-center">
            <Button onClick={() => categorizePhotosMutation.mutate()} disabled={categorizePhotosMutation.isLoading}>
              {categorizePhotosMutation.isLoading ? "Categorizing..." : "Categorize Photos"}
            </Button>
            <Button onClick={handleBulkDownload} disabled={selectedPhotos.length === 0}>
              Download Selected ({selectedPhotos.length})
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
        </CardContent>
      </Card>
    </div>
  );
};

const PhotoCard = ({ photo, onSelect, isSelected }) => (
  <motion.div
    className="relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
      <span className="text-gray-500">{photo.filename}</span>
    </div>
    <Checkbox
      checked={isSelected}
      onCheckedChange={() => onSelect(photo.id)}
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
    <Badge className="absolute top-2 right-2" variant={photo.category === 'Severe' ? 'destructive' : photo.category === 'Moderate' ? 'warning' : 'secondary'}>
      {photo.category}
    </Badge>
  </motion.div>
);

export default PhotoSetup;