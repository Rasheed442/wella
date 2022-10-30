import React, { useState } from 'react'
import style from '../styles/login.module.css'
import {AiOutlineClose, AiOutlineCheck, AiFillInstagram,AiFillTwitterCircle,
    AiFillLinkedin,AiOutlineWhatsApp} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import ClipLoader from "react-spinners/ClipLoader"

function Login({closeModal}) {
    const [loading, setLoading] = useState();
    const [show, setShow] = useState(false)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [dietary_needs, setDietary_needs] = useState()
    const [specific_conditions, setSpecific_conditions] = useState()


   const handler = async (e) => {
        e.preventDefault();
        setLoading(true)
        const credential = { name,email,phone,dietary_needs,specific_conditions};

        const response = await fetch ("https://x8ki-letl-twmt.n7.xano.io/api:oEREOWJG/lead", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:  JSON.stringify(credential)
        })
        const data = await response.json();
        console.log(data)
        setShow(!show)

    }
  return (
    <div className={style.header}>
        <div className={style.container} data-aos="fade-in">

       {show ?"":<div className={style.contain}>     
           <div className={style.personal}>
            <h3>Personlised Meal Plan</h3>
            <AiOutlineClose style={{cursor:"pointer"}} size="20px" onClick={()=> closeModal(false)}/>
        </div> 
            
                <form onSubmit={handler}>
                <div className={style.out}>
                    <div className={style.name}>
                        <label>First Name:</label>
                        <input
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                        type="text"/>
                    </div>
                    <div className={style.name}>
                        <label>Email Address:</label>
                        <input
                         value={email}
                         onChange={(e)=> setEmail(e.target.value)}
                        type="email"/>
                    </div>
                    <div className={style.name}>
                        <label>Phone Number:</label>
                        <input 
                         value={phone}
                         onChange={(e)=> setPhone(e.target.value)}
                        type="number"/>
                    </div>

                    <div className={style.dietary}>
                        <label>Dietary Needs:</label>
                        <input
                         value={dietary_needs}
                         onChange={(e)=> setDietary_needs(e.target.value)}
                        type="text"/>
                    </div>

                    <div className={style.name}>
                        <label>Specific Conditions:</label>
                        <input 
                         value={specific_conditions}
                         onChange={(e)=> setSpecific_conditions(e.target.value)}
                        type="text"/>
                    </div>

                    <div  className={style.submit}>
                    <button  type='submit'>{loading ? <ClipLoader color={"red"} loading={loading}  size={50}/>:"Submit"}</button>
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
                        <h1>{name}</h1>
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
