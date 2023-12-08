import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageKontakty from "./pages/kontakty/index"
import PageNovosti from "./pages/novosti/novosti"
import PageoNas from './pages/oNas/oNas';
import PageFooter from './pages/footer/footer';
import PageHeader from './pages/header/header';
import PageMenuM from './pages/menuM/menu';
import PageMetod1 from './pages/spisok/metods/metod1';
import PageMetod2 from './pages/spisok/metods/metod2';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageHeader/>
          <Routes>
            <Route path={'/'} element={<PageMenuM />} />
            <Route path={'/kontakty'} element={<PageKontakty />} />
            <Route path={'/oNas'} element={<PageoNas />} />
            <Route path={'/menu'} element={<PageNovosti />} />
            <Route path={'/metod1'} element={<PageMetod1 />} />
            <Route path={'/metod2'} element={<PageMetod2 />} />
            
          </Routes>
        <PageFooter />
      </BrowserRouter>
    </div>
  )
}

export default App
