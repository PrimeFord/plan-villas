import "./index.css";
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Contact from "./pages/Contact";
import MainLayout from "./Layout/MainLayout";
import SellProperties from "./pages/SellProperties";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property" element={<Properties />} />
            <Route
              path="/property/sell-properties"
              element={<SellProperties />}
            />
            <Route path="/service" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  );
}

export default App;
