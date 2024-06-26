import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./views/App";
import PhotoBooth from "./views/PhotoBooth";
import Card from "./components/Card/Card";
import Background from "./components/Background/Background";
import Navbar from "./navbar/Navbar";
import Hobi from "./views/Hobi";
import { DownloadProvider } from "./context/DownloadProvider";
import Suga from "./views/Suga";

export default function Router() {
  return (
    <BrowserRouter>
    <DownloadProvider> 
      <Routes>
        <Route element={< Navbar />}>
          <Route path="/" element={<App />} index />
          <Route path="/polaroid" element={<Card />} />
          <Route path="/photobooth" element={<PhotoBooth />} />
          <Route path="/hobipalooza" element={<Hobi/>} />
          <Route path="/sugaverse" element={<Suga />} />
          <Route path="/rain" element={<Background />} />
        </Route>
      </Routes>
      </DownloadProvider>
    </BrowserRouter>
  );
}
