import React, { useState } from 'react'

export default function Form() {
 let [array, setArray] = useState([])
 let [inputdata, setInputdata] = useState({fname:"",lname:""})
function data(e){
    setInputdata({...inputdata,[e.target.name]:e.target.value})
}

let {fname, lname} = inputdata;
function addinputdata(){
    setArray([...array,{fname,lname}])
    // console.log(inputdata);
    setInputdata({fname:"",lname:""})
}
// console.log(array,"total array")
    return (
        <>
            <div className="container-fluid my-5 ">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6 border m-5 p-5">

                        <br />

                        <label>First Name:</label><br />
                        <input type="text" value={inputdata.fname || ""} className="form-control "  name='fname'  onChange={data} required /><br />

                        <label>Last Name:</label><br />
                        <input type="text" value={inputdata.lname || ""} name="lname"  className="form-control" onChange={data} required/><br />

                        <button type="submit" className="btn btn-primary" onClick={addinputdata}>Submit</button>
                        <br />
                    </div>
                    <div className="col-lg-3"></div>
                </div>

                
                <table className="table table-striped col-lg-4 border m-5 p-5">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                                          </tr>
                </thead>
                <tbody className="table-group-divider">
                                   {
                        array && array.map(
                        (item, i)=>{
                            return(
                                <tr>
                    
                                <td>{item.fname}</td>
                                <td>{item.lname}</td>
                                
                            </tr>
            

                            )
                        }
                        )
                    }


                </tbody>
            </table>
            </div>

        </>
    )
};


