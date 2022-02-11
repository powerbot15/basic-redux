import { Shuffle } from "./features/shuffle/Shuffle";
import { Reverse } from "./features/reverse/Reverse";
import { Common } from "./features/common/Common";
import './App.css';

function App() {
  return (
    <div className="App">
      <Shuffle/>
      <Reverse/>
      <Common/>
    </div>
  );
}

export default App;
