import React from "react";
import "../styles/RegisterStyles.css";
import { Link, useNavigate } from "react-router-dom";
import { Form, Input, message } from "antd";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const onfinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/vl/user/login", values);
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login suceesfully");
        navigate("/orders");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log("Something is going to wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h1 className="text-center font-weight-bold">Login Form</h1>

          <Form.Item name="email" labe="Email">
            <Input
              type="email"
              placeholder="Enter Your Email"
              className="text-center"
              autoComplete="off"
              required
            />
          </Form.Item>

          <Form.Item name="password" labe="Password">
            <Input
              type="password"
              placeholder="Enter Your Password"
              className="text-center"
              autoComplete="off"
              required
            />
          </Form.Item>

          <Link to="/registerpage" className="m-2">
            Not A User Login Here
          </Link>
          <button className="btn btn-1" type="submit">
            Login
          </button>
        </Form>
      </div>
    </>
  );
};

export default LoginPage;
