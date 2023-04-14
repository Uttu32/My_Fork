import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Contact } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/contact' element={<Contact/>} />
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
