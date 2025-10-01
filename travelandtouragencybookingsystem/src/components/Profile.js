import "../CSS/profilepagecss.css";
import React, { useState } from 'react';
import axios from 'axios'
import { Input, Divider, Button, Form, Tag, Table, Menu } from "antd";
import { HomeFilled } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

const columns = [
    {
        title: 'Package',
        dataIndex: 'package',
        key: 'package',
    },
    {
        title: 'Date and Time',
        dataIndex: 'datetime',
        key: 'datetime',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: status => (
            <>
                {status.map((stat) => {
                    let color = null;

                    if (stat === 'paid') {
                        color = 'success';
                    } else if (stat === 'pending') {
                        color = 'warning';
                    } else if (stat === 'cancelled') {
                        color = 'error';
                    }

                    return (
                        <Tag color={color} key={stat}>
                            {stat.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Quantity',
        dataIndex: 'quantity',
        key: 'quantity',
    }

];
const data = [
    {
        key: '1',
        package: 'VTT-3D2NBAGIOUTR',
        datetime: '9/23/2025, 4:25:13 PM',
        price: '₱30,000',
        status: ['paid'],
        quantity: "3"
    },
    {
        key: '2',
        package: 'VTT-3D2NBAGIOUTR',
        datetime: '9/26/2025, 2:45:13 PM',
        price: '₱20,000',
        status: ['pending'],
        quantity: "1"
    },
    {
        key: '3',
        package: 'VTT-3D2NBAGIOUTR',
        datetime: '9/30/2025, 11:45:13 AM',
        price: '₱12,000',
        status: ['cancelled'],
        quantity: "2"
    },
];




const ProfilePage = () => {
    const location = useLocation();
    const [form] = Form.useForm();
    const onFinish = values => {
        console.log('Received values of form: ', values);

    };

    axios.get("http://localhost:8000/api/getUsers")
        .then((response) => {
            const users = response.data
            const loggedInUser = localStorage.getItem('username')

            const matchedUsers = users.filter(user => user.username === loggedInUser);

            const user = matchedUsers[0]

            const username = user.username
            const email = user.email
            const phone = user.phone
            const firstname = user.firstname
            const lastname = user.lastname

            form.setFieldsValue({
                username: username,
                email: email,
                phone: phone,
                firstname: firstname,
                lastname: lastname
            })

        })
        .catch((error) => {
            console.log(error)
        })

    return (
        <div>
            <div className="topbar-menu">
                <div className="logo">
                    <img class="mrclogo" src='/images/M&RCLogo.png'></img>
                </div>

                <div className="menu-wrap">
                    <Menu
                        className="top-anchor"
                        direction="horizontal"
                        mode="horizontal"
                        selectedKeys={[location.pathname]}
                        items={[
                            {
                                key: "/homepage", label:
                                    <Link to="/homepage">
                                        <span>
                                            <HomeFilled style={{ marginRight: 4 }} />
                                            Home
                                        </span></Link>
                            },
                        ]}
                    />
                </div>
            </div>

            <div class="profile-page" >
                <div class="userprofile">
                    <div>
                        <img class="userprofile-img"></img>
                    </div>


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
                            <Input disabled="true" placeholder="Enter Username" style={{ fontSize: 14, height: 35 }} maxLength={20} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your First Name!' },
                            { min: 2, message: 'First  Name must be at least 2 characters.' },
                            { max: 20, message: 'First Name cannot be more than 20 characters.' }]}
                            hasFeedback
                        >
                            <Input disabled="true" placeholder="Enter First Name" style={{ position: "relative", fontSize: 14, height: 35 }} maxLength={20} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your Last Name!' },
                            { min: 2, message: 'Last Name must be at least 2 characters.' },
                            { max: 20, message: 'Last Name cannot be more than 20 characters.' }]}
                            hasFeedback
                        >
                            <Input disabled="true" placeholder="Enter Last Name" style={{ position: "relative", fontSize: 14, height: 35 }} maxLength={20} />
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
                            <Input disabled="true" placeholder="Enter Email" style={{ fontSize: 14, height: 35 }} />
                        </Form.Item>

                        <Form.Item style={{ marginBottom: 10 }}
                            name="phone"
                            rules={[{ required: true, message: 'Please input your Phone Number!' },
                            {
                                validator: (_, value) => {
                                    if (!value) {
                                        return Promise.resolve();
                                    }
                                    const digits = value.replace(/\D/g, '');
                                    if (/^09\d{9}$/.test(digits)) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Phone number must start with 09 and be exactly 11 digits.');
                                },
                            },
                            ]}
                            hasFeedback
                        >
                            <Input disabled="true" type='tel' style={{ fontSize: 14, height: 35 }} placeholder="09xxxxxxxxx" maxLength={11} onKeyPress={(e) => {
                                if (!/[0-9]/.test(e.key)) {
                                    e.preventDefault();
                                }
                            }} />
                        </Form.Item>
                        <div class="userprofile-buttons">
                            <Form.Item style={{ marginBottom: 10 }}>
                                <Button type="primary" htmlType="submit" className='editbutton'
                                    style={{
                                        width: 150
                                    }}>
                                    Edit
                                </Button>
                            </Form.Item>

                            <Form.Item style={{ marginBottom: 10 }}>
                                <Button disabled="true" type="primary" htmlType="submit" className='updatebutton'
                                    style={{
                                        width: 150
                                    }}>
                                    Update
                                </Button>
                            </Form.Item>
                        </div>

                    </Form>
                </div>

                <Divider type="vertical" style={{ position: "relative", height: "530px", borderLeft: '2px solid gray', opacity: "60%", marginLeft: "110px", marginTop: "145px" }} />

                <div class="userbookinghistory">
                    < Table columns={columns} pagination={{ position: "top" }} dataSource={data} />
                </div>
            </div >

        </div>
    )

}

export default ProfilePage