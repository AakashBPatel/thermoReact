import {useState} from 'react';
import './App.css';

function EnthalpyCalc(){
  const [variables, setVariables] = useState({
    coeffA : null,
    coeffB : null,
    coeffC : null,
    Ti : null,
    Tf : null,
  });
  const [enthalpy , setEnthalpy] = useState(0);
  const [entropy , setEntropy] = useState(0); 
function handleAChange(e){
  setVariables({
    ...variables,
    coeffA : e.target.value
  });
}
function handleBChange(e){
  setVariables({
    ...variables,
    coeffB : e.target.value
  });
}
function handleCChange(e){
  setVariables({
    ...variables,
    coeffC : e.target.value
  });
}
function handleTiChange(e){
  setVariables({
    ...variables,
    Ti : e.target.value
  });
}
function handleTfChange(e){
  setVariables({
    ...variables,
    Tf : e.target.value
  });
}
function handleSubmit(){
  setEnthalpy(
    enthalpy => variables.coeffA*(variables.Tf - variables.Ti) + variables.coeffB*(variables.Tf*variables.Tf - variables.Ti*variables.Ti)/2 + variables.coeffC*Math.log(variables.Tf / variables.Ti)
  )
  setEntropy(
    entropy => variables.coeffA*Math.log(variables.Tf / variables.Ti) + variables.coeffB*(variables.Tf - variables.Ti) - variables.coeffC*(1/variables.Tf - 1/variables.Ti)
  )

}
return(
  <div className='calc_body'>
    <label >
      Enter coefficient A:
      <input
      value = {variables.coeffA}
      onChange = {handleAChange} 
      />
    </label>
    <label>
      Enter coefficient B:
      <input
      value = {variables.coeffB}
      onChange = {handleBChange} 
      />
    </label>
    <label>
      Enter coefficient C:
      <input
      value = {variables.coeffC}
      onChange = {handleCChange} 
      />
    </label>
    <label>
      Enter initial temperature (K):
      <input
      value = {variables.Ti}
      onChange = {handleTiChange} 
      />
    </label>
    <label>
      Enter final temperature (K):
      <input
      value = {variables.Tf}
      onChange = {handleTfChange} 
      />
    </label>
    <button onClick = {handleSubmit}>
      Calculate
    </button>
    <h2>
      Enthalpy change is <u>{enthalpy}</u> cal/mol.
    </h2>
    <h2>
      Entropy change is <u>{entropy}</u> cal/K/mol.
    </h2>
  </div>
);
}

function App() {
  return (
  <div>
    <h1>Cp = A + BT + C(T^-1)</h1>
    <EnthalpyCalc/>
  </div>
  );
  }

export default App;



































