import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const LogoutScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Here you would typically handle the logout logic
    // For now, we'll just simulate a logout
    toast.success("You have been logged out successfully!");
    // Redirect to login page after a short delay
    const timer = setTimeout(() => navigate("/login"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Logged Out</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">You have been successfully logged out.</p>
          <Button asChild>
            <Link to="/login">Return to Login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogoutScreen;