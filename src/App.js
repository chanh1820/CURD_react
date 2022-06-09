import './App.css';
import CreateEmployee from './Components/CreateEmployee/index.js';
import ListEmployee from './Components/ListEmployee/index.js';
// import Button from './Components/Button';
import {useStore} from './store/index.js'
function App() {

  const [state,dispatch] =useStore()
  
  // console.log(state);


  return (
    <div className="App">
        <CreateEmployee />
        <ListEmployee/>
    </div>
  );
}

export default App;
