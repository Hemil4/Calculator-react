import React from "react";
import Button from '@mui/material/Button';


function CalButton(props){
    return (
        <Button
        style={{
        borderRadius: 0,
        backgroundColor: "#21b6ae",
        padding: "18px 36px",
        fontSize: "18px"
        }}
       className={props.c} name={props.n} variant="contained" size="large" 
       onClick={()=>{
        return props.take(props.display)
       }}>{props.display}</Button>
    );
}

export default CalButton;