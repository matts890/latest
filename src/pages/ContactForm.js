import React, { useState } from 'react'

const ContactForm = () => {
  const[data, setData] = useState({name:"",email:"",phone:"",message:""});
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]:value});
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(data)
  }
  return (
    <form method='post' onSubmit={handleSubmit} class="CForm">
      <h1>Contact <span id='Fspan'>Us</span></h1>
      <input type='text' name='name' id='' onChange={handleChange} value={data.name} placeholder='Enter name'/>
      <input type='email' name='email' id='' onChange={handleChange} value={data.email} placeholder='example@gmail.com'/>
      <input type='phone' name='phone' id='' onChange={handleChange} value={data.phone} placeholder='+961'/>
      <textarea name='message' id="" cols="30" onChange={handleChange} value={data.message} rows="10" placeholder='type here...'/>
      <button type='submit'>Send</button>
    </form>

    
  )
}

export default ContactForm;