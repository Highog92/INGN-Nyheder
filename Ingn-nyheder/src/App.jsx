import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from './Layout/MainLayout';

import { Alle } from './Pages/Alle';
import { Indland } from './Pages/Indland';
import { Politik } from './Pages/Politik';
import { Samfund } from './Pages/Samfund';
import { Sport } from './Pages/Sport';
import { Teknologi } from './Pages/Teknologi';
import { Udland } from './Pages/Udland';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout title="Home" />}>
            <Route path="/alle" index element={<Alle title="Alle" />} />
            <Route path="/indland" index element={<Indland title="Indland" />} />
            <Route path="/udland" index element={<Udland title="Udland" />} />
            <Route path="/teknologi" index element={<Teknologi title="Teknologi" />} />
            <Route path="/sport" index element={<Sport title="Sport" />} />
            <Route path="/politik" index element={<Politik title="Politik" />} />
            <Route path="/samfund" index element={<Samfund title="Samfund" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
