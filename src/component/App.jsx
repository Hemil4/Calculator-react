import React,{useState} from "react";
import CalButton from "./CalButton";

function App() {
  const [fVar,setFVar] = useState("");
  const [sVar,setSVar] = useState("");
  const [fns,setFns] = useState(true);
  const [resultShow,setResultShow] = useState(false);
  const [result,setResult] = useState(0)
  const [displayOperator,setDisplayOperator] = useState(true);  
  const [operator,setOperator] = useState("");


  // console.log(fVar);
  // console.log(operator);
  // console.log(sVar);

  function takeValue(liveValue){
    fns ? setFVar((prevFvar)=>{return prevFvar+liveValue;}) : setSVar((prevSvar)=>{
      setDisplayOperator(false);
      return prevSvar+liveValue;})
  }

  function takeOperator(op){
    setOperator(op);
    setFns(false);
  }

  function resultFun(eq){
    if(operator === "+"){
      setResult(parseFloat(fVar) + parseFloat(sVar));
    }
    else if(operator === "-"){
      setResult(parseFloat(fVar) - parseFloat(sVar));
    }
    else if(operator === "*"){
      setResult(parseFloat(fVar) * parseFloat(sVar));
    }
    else if(operator === "/"){
      setResult(parseFloat(fVar) / parseFloat(sVar));
    }

    setResultShow(true);
  }

  function acfun(){
    setFVar("");
    setOperator("");
    setSVar("");
    setFns(true);
    setResultShow(false);
    setResult(0);
    setDisplayOperator(true);
  }

  function delFun(d){ 
    if(sVar != ""){setSVar("");}
    else if(operator != ""){
      setFns(true);
      setOperator("");}
    else if(fVar != ""){setFVar("")}
  }

  return (
    <div className="main-calculator">
      <div className="result-area">
        {resultShow ? <h1 className="h">{result}</h1> : 
        <div>
          <div>
            <h3 className="hh">{!displayOperator && fVar}</h3>
          </div>
          <div>
          <h1 className="h">{displayOperator ? fVar : sVar} {displayOperator && operator}</h1>
          </div>
        </div>}
        
      </div>
      <div className="entry-area">
        <CalButton take={acfun} n={"ac"}c={"b ac"} display={"AC"}/>
        <CalButton take={delFun} n={"del"}c={"b del"} display={"DEL"}/>
        <CalButton take={takeOperator} n={"divide"}c={"b divide"} display={"/"}/>
        <CalButton take={takeValue} n={"b1"}c={"b b1"} display={"1"}/>
        <CalButton take={takeValue} n={"b2"}c={"b b2"} display={"2"}/>
        <CalButton take={takeValue} n={"b3"}c={"b b3"} display={"3"}/>
        <CalButton take={takeOperator} n={"b4"}c={"b mul"} display={"*"}/>
        <CalButton take={takeValue} n={"b5"}c={"b b4"} display={"4"}/>
        <CalButton take={takeValue} n={"b6"}c={"b b5"} display={"5"}/>
        <CalButton take={takeValue} n={"b7"}c={"b b6"} display={"6"}/>
        <CalButton take={takeOperator} n={"add"}c={"b add"} display={"+"}/>
        <CalButton take={takeValue} n={"b7"}c={"b b7"} display={"7"}/>
        <CalButton take={takeValue} n={"b8"}c={"b b8"} display={"8"}/>
        <CalButton take={takeValue} n={"b9"}c={"b b9"} display={"9"}/>
        <CalButton take={takeOperator} n={"min"}c={"b min"} display={"-"}/>
        <CalButton take={takeValue} n={"dot"}c={"b dot"} display={"."}/>
        <CalButton take={takeValue} n={"b0"}c={"b b0"} display={"0"}/>
        <CalButton take={resultFun} n={"equal"}c={"b equal"} display={"="}/>
      </div>
    </div>
  );
}

export default App;
