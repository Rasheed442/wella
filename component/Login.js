import React, { useState } from 'react'
import style from '../styles/login.module.css'
import {AiOutlineClose, AiOutlineCheck, AiFillInstagram,AiFillTwitterCircle,
    AiFillLinkedin,AiOutlineWhatsApp} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
function Login({closeModal}) {
    const [show, setShow] = useState(false)
  return (
    <div className={style.header}>
        <div className={style.container} data-aos="fade-in">

       {show ?"":<div className={style.contain}>     
           <div className={style.personal}>
            <h3>Personlised Meal Plan</h3>
            <AiOutlineClose style={{cursor:"pointer"}} size="20px" onClick={()=> closeModal(false)}/>
        </div> 
            
                <form>
                <div className={style.out}>
                    <div className={style.name}>
                        <label>First Name:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.name}>
                        <label>Email Address:</label>
                        <input type="email"/>
                    </div>
                    <div className={style.name}>
                        <label>Phone Number:</label>
                        <input type="Phone number"/>
                    </div>
                    <div className={style.dietary}>
                        <label>Dietary Needs:</label>
                        <input type="text"/>
                    </div>
                    <div className={style.name}>
                        <label>Specific Conditions:</label>
                        <input type="text"/>
                    </div>

                    <div  className={style.submit} onClick={()=>{
                        setShow(!show)
                    }}>
                    <button  type='submit'>Submit</button>
                    </div>
                </div>
                </form>
            
    </div>}

               { show ? <div  className={style.compliment} data-aos="fade-in">

                       <div className={style.close}>
                       <AiOutlineClose style={{cursor:"pointer"}} size="20px" onClick={()=> closeModal(false)}/>
                       </div>
                     <AiOutlineCheck size="90px" style={{backgroundColor:"green", color:"white", borderRadius:"50% "}}/>
                     <div className={style.thanks}>
                        <h1>Thank you!</h1>
                        <h3>Kindly share with your Friends.</h3>
                        <div className={style.icon}>
                            <BsFacebook size="25px" style={{ color:"blue", borderRadius:"50% "}}/>
                            <AiFillInstagram size="25px" style={{ color:"red", borderRadius:"50% "}}/>
                            <AiFillTwitterCircle size="25px" style={{ color:"blue", borderRadius:"50% "}}/>
                            <AiFillLinkedin size="25px" style={{ color:"blue", borderRadius:"50% "}}/>
                            <AiOutlineWhatsApp size="25px" style={{ color:"green", borderRadius:"50% "}}/>
                        </div>
                     </div>
                </div>:""}

        </div>
  
    </div>
  )
}

export default Login
