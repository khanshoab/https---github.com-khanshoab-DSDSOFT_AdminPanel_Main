/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import React from 'react';
import "../styles/RegisterStyles.css";
import { Form , Input, message} from 'antd';
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';


const RegisterPage = () => {
  const navigate = useNavigate();


  const onfinishHandler = async (values) =>{
    try{
      const res = await axios.post('/api/vl/user/register', values);
      if(res.data.success){
        message.success('register successfully');
        navigate('/loginpage');
      }else{
        message.error(res.data.message);
      }
    }catch(error){
      console.log(error);
      message.error('Someting Went Wrong');
    }
  }
  
  return (
    <>
      <div className='form-container'>
        <Form layout='vertical' onFinish={onfinishHandler} className='register-form'> 
          <h1 className='text-center'>Register From</h1>
          <Form.Item name="name" labe="Name" >
            <Input type="text" placeholder='Enter Your Name' className='text-center' autoComplete="off" required />
          </Form.Item>
   
          <Form.Item name="email" labe="Email" >
            <Input type="email" placeholder='Enter Your Email' className='text-center' autoComplete="off" required />
          </Form.Item>
    
          <Form.Item name="password" labe="Password" >
            <Input type="password" placeholder='Enter Your Password' className='text-center' autoComplete="off" required />
          </Form.Item>

          <Link to="/loginpage" className="m-2">Already User Login Here</Link>
          <button className='btn btn-1' style={{background:""}} type='submit'>Register</button>

        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
