import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Progress = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-4xl mb-4">
        <CardHeader>
          <CardTitle>Progress Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="mb-4">
            <h2 className="text-xl font-bold">Frontend Implementations</h2>
            <ul className="list-disc list-inside">
              <li>Home Page: Basic layout and functionality.</li>
              <li>My Account Page: User account management.</li>
              <li>Settings Page: User settings management.</li>
              <li>Support Page: Support request form.</li>
              <li>Login Page: User authentication.</li>
              <li>Register Page: User registration.</li>
              <li>About Page: Information about the server.</li>
              <li>Drive Setup Page: Google Drive integration setup.</li>
              <li>Photo Setup Page: Google Photos integration setup.</li>
              <li>Index Page: YouTube video download functionality.</li>
            </ul>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Backend Implementations</h2>
            <p>Nothing has been implemented in the backend so far.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Pending Implementations</h2>
            <ul className="list-disc list-inside">
              <li>Integrate user authentication with backend.</li>
              <li>Implement backend for user account management.</li>
              <li>Implement backend for user settings management.</li>
              <li>Implement backend for support request handling.</li>
              <li>Integrate Google Drive API with backend.</li>
              <li>Integrate Google Photos API with backend.</li>
              <li>Implement backend for YouTube video download functionality.</li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default Progress;