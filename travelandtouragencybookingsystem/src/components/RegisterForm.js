import '../CSS/signupcss.css';
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Checkbox,
    Form,
    Input,
    Card,
    message
} from 'antd';


const RegisterFormPage = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'updatable';

    const openMessage = () => {
        messageApi.open({
            key: '1',
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key: '1',
                type: 'success',
                content: 'Account Created!',
                duration: 2,
            });
        }, 1000);
    };

    const userExist = () => {
        messageApi.open({
            key: '2',
            type: 'loading',
            content: 'Loading...',
        });
        setTimeout(() => {
            messageApi.open({
                key: '2',
                type: 'error',
                content: 'Username Already Exists',
                duration: 2,
            });
        }, 1000);
    };





    const navigate = useNavigate();
    const [form] = Form.useForm();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);

        axios.get("http://localhost:8000/api/getUsers")
            .then((response) => {
                const users = response.data

                const existingusernames = users.map((user) => {
                    return user.username
                })

                if (existingusernames.includes(values.username)) {
                    userExist();
                } else {
                    axios.post("http://localhost:8000/api/createUser", values)
                        .then(() => {
                            form.resetFields();
                            openMessage();
                            setTimeout(() => {
                                navigate("/login");
                            }, 2000);
                        })
                        .catch((error) => {
                            console.log(error)
                        })
                }

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
                    paddingBottom: "5px",
                }}>
                    <h1 class="signuptitle">Signup to M&RC <span class="signuptitle-span1">Travel</span> and <span class="signuptitle-span2">Tours</span></h1>
                    <Form

                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{ address: ['Region', 'City', 'Zip Code'] }}
                        style={{ maxWidth: 400, margin: "0 auto" }}
                        scrollToFirstError
                    >

                        <Form.Item style={{ marginBottom: 10 }}
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' },
                            { min: 8, message: 'Username must be at least 8 characters.' },
                            { max: 20, message: 'Username cannot be more than 20 characters.' }]}
                            hasFeedback
                        >
                            <Input placeholder="Enter Username" style={{ fontSize: 14, height: 35 }} maxLength={20} onKeyPress={(e) => {
                                if (!/[a-zA-Z0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your First Name!' },
                            { min: 2, message: 'First  Name must be at least 2 characters.' },
                            { max: 20, message: 'First Name cannot be more than 20 characters.' }]}
                            hasFeedback
                        >
                            <Input placeholder="Enter First Name" style={{ position: "relative", fontSize: 14, height: 35 }} maxLength={20} onKeyPress={(e) => {
                                if (!/[a-zA-Z]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your Last Name!' },
                            { min: 2, message: 'Last Name must be at least 2 characters.' },
                            { max: 20, message: 'Last Name cannot be more than 20 characters.' }]}
                            hasFeedback
                        >
                            <Input placeholder="Enter Last Name" style={{ position: "relative", fontSize: 14, height: 35 }} maxLength={20} onKeyPress={(e) => {
                                if (!/[a-zA-Z]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="email"

                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="Enter Email" style={{ fontSize: 14, height: 35 }} onKeyPress={(e) => {
                                if (/[\s+]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                }, { min: 8, message: 'Password must be at least 8 characters.' },
                                { max: 20, message: 'Password cannot be more than 20 characters.' }
                            ]}
                            hasFeedback
                        >
                            <Input.Password placeholder="Password" style={{ fontSize: 14, height: 35 }} maxLength={20} onKeyPress={(e) => {
                                if (/[\s+]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                { min: 8, message: 'Password must be at least 8 characters.' },
                                { max: 20, message: 'Password cannot be more than 20 characters.' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The password that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password placeholder="Enter Confirm Password" style={{ fontSize: 14, height: 35 }} maxLength={20} onKeyPress={(e) => {
                                if (/[\s+]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="phone"
                            rules={[{ required: true, message: 'Please input your Phone Number!' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue == null) {
                                        return Promise.resolve();
                                    }
                                    const digits = value.replace(/\D/g, '');
                                    if (/^09\d{9}$/.test(digits)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Phone number must start with 09 and be exactly 11 digits.'));
                                },
                            }),
                            ]}
                            hasFeedback

                        >
                            <Input type='tel' style={{ fontSize: 14, height: 35 }} placeholder="09xxxxxxxxx" maxLength={11} onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}>
                            <Button type="primary" htmlType="submit" className='signupbutton'
                                style={{
                                    width: 400
                                }}>
                                Register
                            </Button>
                            <div>
                                <span class="loginhere-text">Already have an account?<Link to="/login" class="loginhere-link"> Log in Here!</Link></span>
                            </div>
                        </Form.Item>
                    </Form>

                    <div>
                        <img class="mrclogo" src='/images/M&RCLogo.png'></img>
                    </div>
                </Card>
            </div>
        </div >
    );
};
export default RegisterFormPage;


//https://stackoverflow.com/questions/20731966/regex-remove-all-special-characters-except-numbers
//https://www.geeksforgeeks.org/dsa/write-regular-expressions/
//https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript