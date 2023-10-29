import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopListDetail from "./pages/ShopListDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="*" element={<Home/>}/>
          <Route path="shoplistdetail" element={<ShopListDetail />} />
          <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);