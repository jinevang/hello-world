import './App.css';
import IndexPage from './pages/indexpage.tsx';
import NavBar from './components/NavBar.tsx';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ThingsToRead from './pages/thingstoread.tsx';


export default function App() {
  return (<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 6px'}}>
    <HashRouter basename='/hello-world'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/home' element={<IndexPage/>}/>
        <Route path='/things-to-read' element={<ThingsToRead/>}/>
      </Routes>
    </HashRouter>
    </div>
  );
}