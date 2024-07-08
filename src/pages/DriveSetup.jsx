import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const DriveSetup = () => {
  const [apiKey, setApiKey] = useState("");
  const [folderId, setFolderId] = useState("");
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [newFileName, setNewFileName] = useState("");

  useEffect(() => {
    if (apiKey && folderId) {
      fetchFiles();
    }
  }, [apiKey, folderId]);

  const fetchFiles = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents&key=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch files");
      }
      const data = await response.json();
      setFiles(data.files);
      toast("Files fetched successfully!");
    } catch (error) {
      toast.error("Failed to fetch files!");
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("uploadType", "multipart");
    formData.append("parents", folderId);

    try {
      const response = await fetch(
        `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&key=${apiKey}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error("Failed to upload file");
      }
      fetchFiles();
      toast("File uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload file!");
    }
  };

  const handleDelete = async (fileId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete file");
      }
      fetchFiles();
      toast("File deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete file!");
    }
  };

  const handleRename = async (fileId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/drive/v3/files/${fileId}?key=${apiKey}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: newFileName }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to rename file");
      }
      fetchFiles();
      toast("File renamed successfully!");
    } catch (error) {
      toast.error("Failed to rename file!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md mb-4">
        <CardHeader>
          <CardTitle>Google Drive Setup</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="mb-4">
              <Label htmlFor="apiKey">API Key</Label>
              <Input
                id="apiKey"
                type="text"
                placeholder="Enter your Google Drive API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="folderId">Folder ID</Label>
              <Input
                id="folderId"
                type="text"
                placeholder="Enter your Folder ID"
                value={folderId}
                onChange={(e) => setFolderId(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
      </Card>

      <Card className="w-full max-w-4xl mb-4">
        <CardHeader>
          <CardTitle>Cloud Storage Explorer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="fileUpload">Upload File</Label>
            <Input id="fileUpload" type="file" onChange={handleUpload} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file) => (
              <div key={file.id} className="relative border p-2 rounded-md">
                <p>{file.name}</p>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(file.id)}
                >
                  Delete
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedFile(file.id)}
                >
                  Rename
                </Button>
              </div>
            ))}
          </div>
          {selectedFile && (
            <div className="mt-4">
              <Label htmlFor="newFileName">New File Name</Label>
              <Input
                id="newFileName"
                type="text"
                placeholder="Enter new file name"
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
              />
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleRename(selectedFile)}
              >
                Rename
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default DriveSetup;

// Authentication and Access Consent for Google Drive
// 1. Go to the Google Cloud Console: https://console.cloud.google.com/
// 2. Create a new project or select an existing project.
// 3. Enable the Google Drive API for your project.
// 4. Create OAuth 2.0 credentials (Client ID and Client Secret).
// 5. Set up the OAuth consent screen with the necessary scopes (e.g., https://www.googleapis.com/auth/drive).
// 6. Use the OAuth 2.0 Client ID and Client Secret to obtain an access token.
// 7. Use the access token to authenticate API requests to the Google Drive API.