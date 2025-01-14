import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="main-container-1">
      <Header/>
      <div className='main-container-2'>
      <div className='main-container-sidebar'>
        <Sidebar/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
