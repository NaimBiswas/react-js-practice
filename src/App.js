import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";
import First from "./components/First";
import Class from "./components/Class";
import ButtonFun from "./components/ButtonFun";
import ButtonClass from "./components/ButtonClass";
import Welcome from "./components/Welcome";
import { ArrowFunction } from "./components/ArrowFunction";
import State from "./components/State";
import StateChange from "./components/StateChange";
import ConditionOne from "./components/ConditionOne";
import Refesh from "./components/Refesh";
import  Reactdom  from "./components/Reactdom";
import FindDomNode from "./components/FindDomNode";
import Form from "./components/Form";
import SingUpFrom from './components/SingUpForm'
import Select from "./components/Select";
import List from "./components/List";
import JsonList from "./components/JsonList";

function HOp() {
   return (
      
      <div className="App">
         {/* Json List  */}
         <JsonList></JsonList>
         {/* list render  */}
         <List></List>
         {/* select option  */}
         <Select></Select>
         {/* SingUpform  */}
         <SingUpFrom></SingUpFrom>
         {/* React Form  */}
         <Form></Form>
         {/* Find Dom Node */}
         <FindDomNode></FindDomNode>
         {/* This is react dom Element  */}
         <Reactdom/>
         {/* ForceUpdate  */}
         <Refesh></Refesh>
         {/* Login LogOut Condition  */}
         <ConditionOne> </ConditionOne> {/* State Change  */}
         <StateChange> </StateChange> {/* State Component  */} <State> </State>
         {/* this is arrow Fucntin Test  */} <ArrowFunction></ArrowFunction>
         {/* Bootstrap Button  */} <Welcome></Welcome>
         {/* Class Based Button  */} <ButtonClass> </ButtonClass>
         {/* Function Based On click button  */} <ButtonFun></ButtonFun>
         {/* class based funtin  */} <Class name="Naim Biswas"> </Class>
         <Class name="Naim Biswas 1254"> </Class>
         <Class name="Naim Biswas 1254"> </Class>
         <Class name="Naim Biswas 1254"> </Class>
         {/* function based function  */}
         <div>
            <h2 className=""> This is Naim Biswas </h2>
            <First name="Naim" age="20">
               
            </First>
            <First name="Biswas" age="20">
               
            </First>
            <First name="Alamin" age="20">
               
            </First>
            <First name="Tuttul" age="20">
               
            </First>
         </div>
         {/* defualt function  */}
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="TryMe">Hello World. </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
            </a>
         </header>
      </div>
   );
}

export default HOp;
