import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import FasadeGallery from "./pages/FasadeGallery";
import MolerskiGallery from "./pages/MolerskiGallery";
import GipsaniGallery from "./pages/GipsaniGallery";
import DekorativneGallery from "./pages/DekorativneGallery";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fasade" element={<FasadeGallery />} />
            <Route path="/molerski" element={<MolerskiGallery />} />
            <Route path="/gipsani" element={<GipsaniGallery />} />
            <Route path="/dekorativne" element={<DekorativneGallery />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
