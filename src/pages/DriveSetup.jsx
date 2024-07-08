import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DriveSetup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Google Drive Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="apiKey">API Key</Label>
              <Input id="apiKey" type="text" placeholder="Enter your Google Drive API Key" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="folderId">Folder ID</Label>
              <Input id="folderId" type="text" placeholder="Enter your Folder ID" required />
            </div>
            <Button type="submit">Save</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriveSetup;