import './App.css';
import IndexPage from './pages/indexpage.tsx';
import NavBar from './components/NavBar.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ThingsToRead from './pages/thingstoread.tsx';
import CafePage from './pages/cafes.tsx';


export default function App() {
  return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <NavBar/>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/home' element={<IndexPage/>}/>
        <Route path='/things-to-read' element={<ThingsToRead/>}/>
        <Route path='/interesting' element={<CafePage/>}/>
      </Routes>
    </div>
  );
}