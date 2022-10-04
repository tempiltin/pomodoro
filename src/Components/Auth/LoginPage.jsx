import { useState } from "react";
// import styled from "styled-components";
import { Login } from "../Login/Login";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const LoginPage = () => {
  const notify = () => toast("Sizning so'rovingiz yuborilmoqda");
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone_number, setPhoneNumber] = useState("")
  const [disabled , setDisabled] = useState(false)

  class User {
    constructor(options) {
      this.first_name = options.first_name;
      this.last_name = options.last_name;
      this.phone_number = options.phone_number;
    }
  }
  
  const userData = new User({
    first_name: first_name,
    last_name: last_name,
    phone_number: phone_number
  })
  
  const onClick = ()=>{

    
    notify()
    console.log(userData);
    setDisabled(true)
    setTimeout(()=>{
      setPhoneNumber("")
      setFirstName("")
      setLastName("")
      setDisabled(false)
    },5000)
    

  }
  

  return <>
  <ToastContainer />
    <main>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div  className="LoginCard mt-5">
              <img className="LoginImg" src={require("../../Assets/img/photo_2022-10-03_15-44-51.jpg")} alt="" />
            </div>
          </div>
          <div className="col-lg-6">

            <h2 className="mt-5">Ro'yhatdan o'tish</h2>

            <div className="form">
              <div className="form-control">
                <Login plasholder={"Ismingizni kiriting"} type={"text"} name={"first_name"} setInpValue={setFirstName} inpValue={first_name} />
              </div>
              <div className="form-control mt-4">
                <Login plasholder={"Familyangizni kiriting"} type={"text"} name={"last_name"} setInpValue={setLastName} inpValue={last_name} />
              </div>
              <div className="form-control mt-4">
                <Login plasholder={"Raqamingizni  kiriting"} type={"phone"} name={"phone_number"} setInpValue={setPhoneNumber} inpValue={phone_number} />
              </div>
              <div className="btn-control mt-4 d-flex justify-content-center">
                <button className="btn btn-info" onClick={onClick} disabled={disabled}>Yuborish</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>

  </>;


}
export default LoginPage;