import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PhotoSetup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Google Photos Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" type="text" placeholder="Enter your Google Photos API Key" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="albumId">Album ID</Label>
              <Input id="albumId" type="text" placeholder="Enter your Album ID" required />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhotoSetup;