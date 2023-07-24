import logo from './logo.svg';
import './App.css';
import KakaoMap from './components/KakaoMap';
import MapSearch from './components/MapSearch';

function App() {
  return (
    <div className="App">
      <MapSearch></MapSearch>
      <KakaoMap></KakaoMap>
    </div>
  );
}

export default App;
