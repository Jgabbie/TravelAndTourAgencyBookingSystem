import React from 'react';
import '../CSS/logincss.css';
import axios from 'axios'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Card, Typography, message } from 'antd';
import { Link, useNavigate } from "react-router-dom";


const LoginFormPage = () => {
    const [messageApi, contextHolder] = message.useMessage();


    const invalidCredentials = () => {
        messageApi.open({
            key: '1',
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key: '1',
                type: 'error',
                content: 'Invalid Credentials',
                duration: 2,
            });
        }, 100);
    };



    const navigate = useNavigate();
    const onFinish = values => {

        console.log(values.username)
        console.log(values.password)

        axios.get("http://localhost:8000/api/getUsers")
            .then((response) => {
                const users = response.data


                users.map((user) => {

                    if (user.username === values.username && user.password === values.password) {
                        localStorage.setItem('username', values.username)
                        navigate("/homepage");
                    } else {
                        invalidCredentials();
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })


    };
    return (
        <div style={{
            minHeight: "100vh",
            backgroundImage: 'url("/images/LoginBackground.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
        }}>
            {contextHolder}
            <div class="loginformcenter">
                <Card style={{
                    width: 700,
                    backgroundColor: 'rgba(255, 255, 255, 0.20)',
                    backdropFilter: 'blur(2px)',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    border: "2px solid white",
                }}>
                    <h1 class="logintitle">Login to M&RC <span class="logintitle-span1">Travel</span> and <span class="logintitle-span2">Tours</span></h1>

                    <Form
                        name="login"
                        initialValues={{ remember: true }}
                        style={{ maxWidth: 420, margin: "0 auto" }}
                        onFinish={onFinish}
                    >
                        <Form.Item style={{ marginBottom: 10 }}
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' },
                            { min: 8, message: 'Username must be at least 8 characters.' },
                            { max: 20, message: 'Username cannot be more than 20 characters.' }
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Username" style={{ fontSize: 18, height: 60 }} minLength={8} maxLength={20} onKeyPress={(e) => {
                                if (!/[a-zA-Z0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 0 }}
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' },
                            { min: 8, message: 'Username must be at least 8 characters.' },
                            { max: 20, message: 'Username cannot be more than 20 characters.' }
                            ]}
                        >
                            <Input.Password prefix={<LockOutlined />} type="password" visibilityToggle={true} placeholder="Password" style={{ fontSize: 18, height: 60 }} onKeyPress={(e) => {
                                if (/[\s+]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>
                        <Form.Item style={{ marginBottom: 5, marginTop: 0 }} >
                            <Flex justify="space-between" align="center">
                                <p class="forgetpassword-text">Forgot your <a class="forgetpassword-anchor">Password?</a></p>
                            </Flex>
                        </Form.Item>

                        <Form.Item >
                            <Button style={{ marginBottom: 5, marginTop: 0 }} block type="primary" htmlType="submit" className="loginbutton">
                                Log in
                            </Button>
                            <span class="signuphere-text">Need an account?<Link to="/register" class="signuphere-link"> Sign up Here!</Link></span>
                        </Form.Item>
                    </Form>
                    <div>
                        <img class="mrclogo" src='/images/M&RCLogo.png'></img>
                    </div>

                </Card>
            </div>
        </div>
    );
};
export default LoginFormPage;