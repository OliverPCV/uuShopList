import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopListDetail from "./pages/ShopListDetail";
import React, { useState } from 'react';


export default function App() {
  const [lists, setLists] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="*" element={<Home/>}/>
          <Route path="/" element={<Home lists={lists} setLists={setLists} />} />
        <Route path="/shoplistdetail/:id" element={<ShopListDetail lists={lists} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);