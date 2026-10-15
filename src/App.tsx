import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AppLayout } from "@/components/layout/AppLayout";
import { ProtectedRoute } from "@/components/auth/ProtectedRoute";

import HomePage from "@/pages/HomePage";
import ProductsPage from "@/pages/ProductsPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import SuppliersPage from "@/pages/SuppliersPage";
import LocalStateExamplePage from "@/pages/LocalStateExamplePage";
import RestrictedAreaPage from "@/pages/RestrictedAreaPage";
import LandingPage from "@/pages/LandingPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/exemplo-crud" element={<ProductsPage />} />
              <Route path="/exemplo-detalhe/:id" element={<ProductDetailPage />} />
              <Route path="/exemplo-lista-simples" element={<SuppliersPage />} />
              <Route path="/exemplo-estado-local" element={<LocalStateExamplePage />} />
              <Route path="/landing" element={<LandingPage />} />

              <Route element={<ProtectedRoute />}>
                <Route path="/area-restrita" element={<RestrictedAreaPage />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}