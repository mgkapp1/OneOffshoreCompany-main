import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BVIPage from "./pages/jurisdictions/BVI";
import GibraltarPage from "./pages/jurisdictions/Gibraltar";
import HongKongPage from "./pages/jurisdictions/HongKong";
import MarshallIslandsPage from "./pages/jurisdictions/MarshallIslands";
import NevisPage from "./pages/jurisdictions/Nevis";
import SeychellesPage from "./pages/jurisdictions/Seychelles";
import UKLTDPage from "./pages/jurisdictions/UKLTD";
import UKLLPPage from "./pages/jurisdictions/UKLLP";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import CheckoutPage from "./components/CheckoutPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import Renewals from "./pages/Renewals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/jurisdiction/bvi" element={<BVIPage />} />
            <Route path="/jurisdiction/gibraltar" element={<GibraltarPage />} />
            <Route path="/jurisdiction/hong-kong" element={<HongKongPage />} />
            <Route path="/jurisdiction/marshall-islands" element={<MarshallIslandsPage />} />
            <Route path="/jurisdiction/nevis" element={<NevisPage />} />
            <Route path="/jurisdiction/seychelles" element={<SeychellesPage />} />
            <Route path="/jurisdiction/uk-ltd" element={<UKLTDPage />} />
            <Route path="/jurisdiction/uk-llp" element={<UKLLPPage />} />
            <Route path="/privacy-policy-gdpr-ccpa" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            {/* Fix: Changed from /renewals/ to /renewals to match accounting system */}
            <Route path="/renewals" element={<Renewals />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;