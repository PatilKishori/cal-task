import React, { useState } from 'react'

const Calculation = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [addi, setAddi] = useState("");
    const [multi, setMulti] = useState("");
    const [sub, setSub] = useState("");
    const [divi, setDivi] = useState("");
    const addition = () => {
        setAddi(Number(num1) + Number(num2));
    };

    const multiplication = () => {
        setMulti(Number(num1) * Number(num2));
    };

    const subscription = () => {
        setSub(Number(num1) - Number(num2));
    };

    const division = () => {
        setDivi(Number(num1) / Number(num2));
    };



    return (
        <div className="container-fluid my-5 ">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 border border-dark m-5 p-5">
                    <label for=""><h5>Enter number 1 :</h5> </label><br/>
                    <input type="number"className="form-control mx-5"  onChange={(e) => setNum1(e.target.value)} /><br /><br />

                    <label for=""><h5>Enter number 2 :</h5></label><br/>
                    <input type="number"className="form-control mx-5"  onChange={(e) => setNum2(e.target.value)} /><br /><br />

                    <button className="btn btn-primary m-4" onClick={addition}>Addition</button>
                    <button className="btn btn-primary m-4" onClick={multiplication}>Multiplication</button>
                    <button className="btn btn-primary m-4" onClick={subscription}>Subscription</button>
                    <button className="btn btn-primary m-4" onClick={division}>Division</button><br/><br/>

                    <h3> Addition is : {addi}</h3><br/>
                    <h3> Multiplication is : {multi}</h3><br/>
                    <h3> Subscription is : {sub}</h3><br/>
                    <h3> Division is : {divi}</h3><br/>

               </div>

                    <div className="col-lg-3"></div>
                    </div >
                </div>
                )
}

                export default Calculation;
