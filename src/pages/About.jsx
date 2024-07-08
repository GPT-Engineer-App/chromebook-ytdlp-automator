import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-4xl mb-4">
        <CardHeader>
          <CardTitle>About This Server</CardTitle>
        </CardHeader>
        <CardContent>
          <section className="mb-4">
            <h2 className="text-xl font-bold">Purpose</h2>
            <p>This server is designed to facilitate the downloading of YouTube videos using yt-dlp. It provides a user-friendly interface for users to input URLs and manage their downloads.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Logging Information</h2>
            <p>All actions performed on this server are logged for debugging and monitoring purposes. This includes download requests, configuration changes, and error messages.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">Debug Information</h2>
            <p>Debug information is available to help diagnose issues with the server. This includes detailed error messages, stack traces, and other relevant data.</p>
          </section>
          <Separator />
          <section className="mb-4">
            <h2 className="text-xl font-bold">About the Developer</h2>
            <p>This server was developed by a team of dedicated software engineers who are passionate about providing efficient and reliable tools for video downloading and management.</p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;