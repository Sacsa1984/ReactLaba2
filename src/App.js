import logo from './logo.svg';
import './App.css';
import {Biog,Cartina,News,NotFound,NavMenu} from './zadan2/zad2_3.js';
import React from "react";
import { useState } from "react";
import {BrowserRouter as Router, Route, Switch, Link}from "react-router-dom";
function Form(props) {
 
  let  nameRef = React.createRef();
  
   let  lastNameRef = React.createRef();
  
  
    const handlerSubmit = (event) => {
    event.preventDefault();
   props.onclic(nameRef.current.value,lastNameRef.current.value)
    
    
    }
  
    
    return (
      <div>
    <form onSubmit={handlerSubmit}>
    <div className="formElement">
    <input
    type="text"
  
    placeholder="Ваше имя"
    ref={nameRef}
    
    required
    />
  
  
    
    </div>
    <div className="formElement">
    <input
    type="text"
    placeholder="Ваша фамилия"
     ref={lastNameRef}
    required
    />
    </div>
    <div className="formElement">
    <input type="submit" value="занести " />
    </div>
    </form>
  
  
    </div>
    );
    }
    function MyyBlock(props) {
      return (
        <div>
      <div >
    {props.Mydan}
    
      </div>
  
      <div>
      {props.MyLast}
      </div>
      </div>
      );
     }
function App() {
  const [name,setname]=useState(" ");
 const [lastname, setlastname]=useState(" ");

  let Myfun=(newName,newlasnam)=>{setname(newName);setlastname(newlasnam)}
  return (
    <div className="App">
<Form onclic={Myfun} /> 
 <MyyBlock Mydan={name} MyLast={lastname} ></MyyBlock>

 <div>
 <Router>
 <div>
 <NavMenu />
 <Switch>
   
 <Route exact path="/biogra" component={Biog} />
 <Route path="/cartingal"
 component={News} />
 <Route path="/cartin" component={Cartina} />
 <Route component={NotFound} />
 </Switch>
 </div>
 </Router>
 </div>

      
    </div>
  );
}

export default App;
