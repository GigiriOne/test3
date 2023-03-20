import PetInfo from './components/PetInfo';
import './App.css';

function App() {
  return (
    <div className="App">
      <PetInfo animal="cat" age="12" />
      <PetInfo animal="dog" age="2" />
      <PetInfo animal="mish" age="21" />
    </div>
  );
}

export default App;
