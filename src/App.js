import './App.css';
import Spaces from './components/Spaces';
import Rooms from './components/Rooms';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Spaces />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/spaces/:spaceId" element={<Rooms />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }
export default App;
