import './Sytle.scss';
import { useNavigate } from "react-router-dom";


function App() {
    const navigate = useNavigate()
    const handleClickButton = ()=>{
        //useHistory
        navigate('/')
    }
  return (
    <div className="App">
      <ul className="headerContainer">
        <li>
            <button className="headerBtn" type="button" onClick={handleClickButton}>
                button
            </button>
        </li>
      </ul>

    </div>
  );
}

export default App;
