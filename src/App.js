

import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Routes, Route } from "react-router-dom";

function App() {
  let pageSize=20;
  
  return (
    <div>
   <Navbar/>
   
        <Routes>
        <Route path="/business" element={<News pageSize={pageSize} country="us" category="business" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        <Routes>
        <Route path="/entertainment" element={<News pageSize={pageSize} country="us" category="entertainment" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        <Routes>
        <Route path="/health" element={<News pageSize={pageSize} country="us" category="health" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        <Routes>
        <Route path="/science" element={<News pageSize={pageSize} country="us" category="science" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        <Routes>
        <Route path="/sports" element={<News pageSize={pageSize} country="us" category="sports" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        <Routes>
        <Route path="/technology" element={<News pageSize={pageSize} country="us" category="technology" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        <Routes>
        <Route path="/" element={<News pageSize={pageSize} country="us" category="general" apiKey="c68ef25adf744dbf91be32c0319e178d"/>} />
        </Routes>
        
   
   </div>
  );
}

export default App;
