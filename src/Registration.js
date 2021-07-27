import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap';
import "./App.css";
import axios from 'axios';

function Registration(){
     const [firstname, setFirstname] = useState('');
	 const [lastname, setLastname] = useState('');
	 const [email, setEmail] = useState('');
	 const [phonenumber, setPhonenumber] = useState('');
	 const [zipcode, setZipcode] = useState('');
	 const [term, setTerm] = useState('');

	 // const initialState = {
  //       userInfo:{
  //          firstname:'',
  //          lastname:'',
  //          email:'',
  //          phonenumber:'',
  //          zipcode: '',
  //          term:'',
  //       },
  //       errorMsg:'',
  //       successMsg:'',
  //   }

  



 // function SubmitForm(e){

 // 	e.preventDefault();



	// }
 // const FormRegistration = async () => {
 //    // console.warn(state);
 //    //  const response = await axios
 //    //    .post("https://fakestoreapi.com/products")
 //    //    .catch((err) => {
 //    //    	console.log("Err", err);
 //    //    });
 //    //    setState(response.data);


 //    	console.warn(firstname,lastname,email,phonenumber,zipcode,term);
	// 	let data = {firstname,lastname,email,phonenumber,zipcode,term}
		
	// 	fetch('http://127.0.0.1:8000/api/registration-user',{
	// 		method: 'POST',
	// 		header:{
	// 			'Accept': 'application/json',
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify(data)
	// 	}).then((result)=>{
 //          //console.warn('result',result);
 //          result.json().then((resp)=>{
 //          	console.warn('resp', resp);
 //          })
	// 	})

	// }


const FormRegistration = (e) => {
 // async (e) => {
    e.preventDefault();

    console.warn(firstname,lastname,email,phonenumber,zipcode,term);
		let data = {firstname,lastname,email,phonenumber,zipcode,term}

 //    await axios
 //      .post("http://127.0.0.1:8000/api/registration-user", {
 //        headers: { 
 //        	"Content-Type": "aplication/json"
 //        	 },
 //      })
 //      .then(function (resp) {
 //        console.log(resp.data);
 //      })
 //      .catch(function (err) {
 //        console.error(err.response.data);
 //      });

 fetch('http://127.0.0.1:8000/api/registration-user',{
			method: 'POST',
			header:{
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((result)=>{
          //console.warn('result',result);
          result.json().then((resp)=>{
          	console.warn('resp', resp);
          })
		})
  };
   return(
   	<>
   	<h2>Registration Form</h2>
   	<form onSubmit={FormRegistration} className="center">
   	 
   	<label htmlFor="firstname">First Name : </label>
   	<input className="form-control" id="firstname" type="text" value={firstname}  name="firstname" placeholder="Enter your First Name" onChange={(e)=>setFirstname(e.target.value)} />

   	<label htmlFor="lastname">Last Name : </label>
   	<input className="form-control" id="lastname" type="text"  value={lastname} name="lastname" placeholder="Enter your Last Name" onChange={(e)=>setLastname(e.target.value)} />

   	<label htmlFor="email">Email : </label>
   	<input className="form-control" id="email" type="email"  value={email} name="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} />

   	<label htmlFor="phonenumber">Phone Number : </label>
   	<input className="form-control" id="phonenumber" type="text" name="phonenumber" placeholder="Enter your Phone Number" onChange={(e)=>setPhonenumber(e.target.value)} />
   	
	<label htmlFor="zipcode">Zipcode : </label>
   	<input className="form-control" id="zipcode" type="text" value={zipcode} name="zipcode" placeholder="Enter your Zip Code" onChange={(e)=>setZipcode(e.target.value)} />

    <label htmlFor="term">Term & Conditions : </label>
   	<input id="term" type="checkbox" value={term} name="term" onChange={(e)=>setTerm(e.target.value)} /><br/>
   	<Button type="submit" onClick={FormRegistration} className="btn btn-primary">Register</Button>
   	</form>
   	</>
   	)
}

export default Registration