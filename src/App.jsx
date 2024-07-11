import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, User, Settings, HelpCircle, LogOut, List } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar";
import Index from "./pages/Index.jsx";
import PhotoSetup from "./pages/PhotoSetup";
import DriveSetup from "./pages/DriveSetup";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./pages/MyAccount";
import SettingsPage from "./pages/Settings";
import Support from "./pages/Support";
import LogoutScreen from "./pages/LogoutScreen";
import Progress from "./pages/Progress";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "My Account",
    to: "/account",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
  },
  {
    title: "Support",
    to: "/support",
    icon: <HelpCircle className="h-4 w-4" />,
  },
  {
    title: "Progress",
    to: "/progress",
    icon: <List className="h-4 w-4" />,
  },
  {
    title: "Logout",
    to: "/logout",
    icon: <LogOut className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="/hidden/photosetup" element={<PhotoSetup />} />
              <Route path="/hidden/drivesetup" element={<DriveSetup />} />
              <Route path="/about" element={<About />} />
              <Route path="/account" element={<MyAccount />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/support" element={<Support />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/logout" element={<LogoutScreen />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;