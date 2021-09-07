import { useEffect, useState } from 'react';
import './BMIExample.css';

function BMIExample(){
    
    const [bmi, setBMI] = useState(0)
    const [result, setResult] = useState("")
    let weight = 0
    let height = 0

    function bmicalc(){
        setBMI(weight/((height/100)**2))
        console.log("Weight:", weight)
        console.log("Height:", height)
        console.log("BMI:", bmi)
    }

    useEffect( () => { 
        console.log("Updated bmi:", bmi)
        if (bmi<18.5){
            setResult("Underweight");
        } else if (bmi<25){
            setResult("Healthy");
        } else if (bmi<30){
            setResult("Overweight");
        } else if (bmi>=30){
            setResult("Obese");
        } else{
            setResult("Error")
        }
    }, [bmi]);
    
    return(
        <div id="border" className="BMI">
            Value:
            <p>Ihr Gewicht (kg): <input id="weight" type="number" onChange={ (e) => {weight = parseInt(e.target.value)} }/></p>
            <p>Ihre Körpergrösse (cm): <input id="height" type="number" onChange={ (e) => {height = parseInt(e.target.value)} }/></p>
            <div id="container"><button id="senden" onClick={ () => { bmicalc() } }>Senden</button><button id="delete" onClick={ () => {} }>Ergebnis löschen</button></div>
            <p>Your index is: {bmi}</p>
            <p>You are: {result}</p>
        </div>
    );
}

export default BMIExample;