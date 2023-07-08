import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/MyNavBar';
import MyFooter from './components/MyFooter';
import MyInfo from './components/MyInfo';

function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <MyInfo/>
      <MyFooter/>
    </div>
  );
}

export default App;
