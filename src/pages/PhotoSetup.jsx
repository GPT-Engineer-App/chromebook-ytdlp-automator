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

const mockAlbums = [
  { id: "1", title: "Vacation 2023" },
  { id: "2", title: "Family Reunion" },
  { id: "3", title: "Birthday Party" },
];

const mockDetectionResults = [
  { id: "1", filename: "photo1.jpg", nudityDetected: true, confidence: 0.95, category: "High" },
  { id: "2", filename: "photo2.jpg", nudityDetected: false, confidence: 0.10, category: "Low" },
  { id: "3", filename: "photo3.jpg", nudityDetected: true, confidence: 0.85, category: "High" },
  { id: "4", filename: "photo4.jpg", nudityDetected: true, confidence: 0.55, category: "Medium" },
];

const PhotoSetup = () => {
  const [sensitivity, setSensitivity] = useState(0.5);
  const [selectedCategory, setSelectedCategory] = useState("High");

  const { data: albums, isLoading: albumsLoading, error: albumsError } = useQuery({
    queryKey: ['albums'],
    queryFn: fetchAlbums,
  });

  const { data: detectionResults, isLoading: resultsLoading, error: resultsError } = useQuery({
    queryKey: ['detectionResults', sensitivity],
    queryFn: () => fetchDetectionResults(sensitivity),
  });

  const handleSensitivityChange = (value) => {
    setSensitivity(value[0]);
  };

  const fetchAlbums = async () => {
    // In a real implementation, this would be an API call to Google Photos
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockAlbums), 1000);
    });
  };

  const fetchDetectionResults = async (sensitivity) => {
    // In a real implementation, this would be an API call to your backend
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredResults = mockDetectionResults.filter(
          (result) => result.confidence >= sensitivity
        );
        resolve(filteredResults);
      }, 1000);
    });
  };

  if (albumsLoading || resultsLoading) {
    return <div>Loading...</div>;
  }

  if (albumsError || resultsError) {
    return <div>Error: {albumsError?.message || resultsError?.message}</div>;
  }

  const filteredResults = detectionResults?.filter(result => result.category === selectedCategory) || [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>Google Photos Albums</CardTitle>
        </CardHeader>
        <CardContent>
          <ul>
            {albums.map((album) => (
              <li key={album.id}>{album.title}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Nudity Detection Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="sensitivity">Sensitivity: {sensitivity.toFixed(2)}</Label>
            <Slider
              id="sensitivity"
              min={0}
              max={1}
              step={0.01}
              value={[sensitivity]}
              onValueChange={handleSensitivityChange}
            />
          </div>
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
                    <img src={`/placeholder.svg`} alt={photo.filename} className="w-full h-full object-cover rounded-md" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                      {photo.filename}
                    </div>
                    {photo.nudityDetected && (
                      <Alert className="absolute top-0 left-0 right-0 bg-opacity-75">
                        <AlertTitle>Nudity Detected</AlertTitle>
                        <AlertDescription>
                          Confidence: {(photo.confidence * 100).toFixed(2)}%
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

      <Card className="w-full max-w-4xl mt-4">
        <CardHeader>
          <CardTitle>Google Authentication Setup Instructions</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="mb-4">
            <h2 className="text-xl font-bold">Step 1: Create a Project in Google Cloud Console</h2>
            <p>Go to the <a href="https://console.cloud.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500">Google Cloud Console</a> and create a new project or select an existing project.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Step 2: Enable Necessary APIs</h2>
            <p>Enable the Google Photos Library API and Google Cloud Vision API for your project.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Step 3: Create OAuth 2.0 Credentials</h2>
            <p>Create OAuth 2.0 credentials (Client ID and Client Secret) in the Google Cloud Console.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Step 4: Set Up OAuth Consent Screen</h2>
            <p>Set up the OAuth consent screen with the necessary scopes (e.g., https://www.googleapis.com/auth/photoslibrary.readonly).</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Step 5: Implement Google OAuth</h2>
            <p>Use the OAuth 2.0 flow to authenticate users and obtain access tokens for the Google Photos Library API.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Step 6: Integrate with Backend</h2>
            <p>Set up your backend to handle OAuth token exchange, Google Photos API requests, and Google Cloud Vision API for nudity detection.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoSetup;