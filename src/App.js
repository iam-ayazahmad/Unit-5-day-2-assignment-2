import logo from './logo.svg';
import './App.css';

function App() {
  const aa=["Services","Projects","about"]
  return (
    <div className="App">
       <div className="navbar">
      {<Logo/>}
      {aa.map((e)=>{
        return <Links text={e}/>
      })}
      {<Button></Button>}
      
    </div>
    </div>
   
  );
}
//Components

function Logo(){
  return  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSukEziNNLWMqJ5fVaeaN7gAEymyks6ipJ5ZQ&usqp=CAU"></img>
}
function Links(props){
  return <a className="mylink" href="">{props.text}</a>
}
function Button(){
  return<button className="button">Contract</button>
}




export default App;
