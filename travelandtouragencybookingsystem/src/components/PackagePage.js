import "../CSS/packagepagecss.css";

import { useState } from "react";
import { Flex, Input, Form, Divider, Button, Menu, Tabs, Modal, Calendar, theme, Space, InputNumber } from "antd";
import { HomeFilled, InfoCircleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useLocation, useParams } from "react-router-dom";

import packageData from "./PackageDataset";

const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
};

const AvailPackagePage = () => {
    const { destination } = useParams();
    const packagesTour = packageData.find(pkg => pkg.place === destination);



    const [openPriceDetailsModal, setOpenPriceDetailsModal] = useState(false);
    const [loadingPriceDetailsModal, setLoadingPriceDetailsModal] = useState(false);
    const [openBookingSummaryModal, setOpenBookingSummaryModal] = useState(false);
    const [loadingBookingSummaryModal, setLoadingBookingSummaryModal] = useState(true);
    const [openCheckOutModal, setOpenCheckOutModal] = useState(false);
    const [loadingCheckOutModal, setLoadingCheckOutModal] = useState(true);
    const [openPaymentProcessModal, setOpenPaymentProcessModal] = useState(false);
    const [loadingPaymentProcessModal, setLoadingPaymentProcessModal] = useState(true);
    const [openConfirmPaymentModal, setOpenConfirmPaymentModal] = useState(false);
    const [loadingConfirmPaymentModal, setLoadingConfirmPaymentModal] = useState(true);
    const [openBookingSuccessModal, setOpenBookingSuccessModal] = useState(false);
    const [loadingBookingSuccessModal, setLoadingBookingSuccessModal] = useState(true);


    const { token } = theme.useToken();
    const wrapperStyle = {
        width: 300,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
    };


    const showPriceDetails = () => {
        setOpenPriceDetailsModal(true);
        setLoadingPriceDetailsModal(true);
        setTimeout(() => {
            setLoadingPriceDetailsModal(false);
        }, 1000);
    };

    const showBookingSummary = () => {
        setOpenPriceDetailsModal(false);
        setOpenBookingSummaryModal(true);
        setLoadingBookingSummaryModal(true);
        setTimeout(() => {
            setLoadingBookingSummaryModal(false);
        }, 1000);
    };

    const showCheckOut = () => {
        setOpenBookingSummaryModal(false);
        setOpenCheckOutModal(true);
        setLoadingCheckOutModal(true);
        setTimeout(() => {
            setLoadingCheckOutModal(false);
        }, 1000);
    };

    const showPaymentProcess = () => {
        setOpenCheckOutModal(false);
        setOpenPaymentProcessModal(true);
        setLoadingPaymentProcessModal(true);
        setTimeout(() => {
            setLoadingPaymentProcessModal(false);
        }, 1000);
    };

    const showConfirmPayment = () => {
        setOpenPaymentProcessModal(false);
        setOpenConfirmPaymentModal(true);
        setLoadingConfirmPaymentModal(true);
        setTimeout(() => {
            setLoadingConfirmPaymentModal(false);
        }, 1000);
    };

    const showBookingSuccess = () => {
        setOpenConfirmPaymentModal(false);
        setOpenBookingSuccessModal(true);
        setLoadingBookingSuccessModal(true);
        setTimeout(() => {
            setLoadingBookingSuccessModal(false);
        }, 1000);
    };

    const onFinish = values => {

        console.log(values.username)
        console.log(values.password)

    };


    const location = useLocation();
    const onChange = key => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: 'Itinerary',
            children: (
                <ul>
                    {packagesTour.itinerary.map((itin, i) => <li key={i}>{itin}</li>)}
                </ul>
            )
        },
        {
            key: '2',
            label: 'Inclusions and Exclusions',
            children: (
                <div>
                    <h3>Inclusions</h3>
                    <ul>
                        {packagesTour.inclusions.map((inc, i) => <li key={i}>{inc}</li>)}
                    </ul>
                    <h3>Exclusions</h3>
                    <ul>
                        {packagesTour.exclusions.map((exc, i) => <li key={i}>{exc}</li>)}
                    </ul>
                </div>

            )
        },
        {
            key: '3',
            label: 'Terms and Conditions',
            children: (
                <div>
                    <h3>Terms and Conditions</h3>
                    <ul>
                        {packagesTour.termsAndConditions.map((terms, i) => <li key={i}>{terms}</li>)}
                    </ul>
                </div>

            ),

        },
    ];

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

            <div class="packagepage">
                <div class="packagepage-leftside">
                    <div class="packagespage-titleanddays">
                        <h1 class="packagepage-leftside-title">{packagesTour.title}</h1>
                        <h1 class="packagepage-daysindicator-text">3 DAYS</h1>
                    </div>


                    <img class="packagepage-leftside-img"></img>
                    <p class="packagepage-leftside-description">{packagesTour.description} </p>
                </div>

                <Divider type="vertical" style={{ position: "absolute", height: "530px", borderLeft: '2px solid gray', top: "140px", left: "750px", opacity: "60%" }} />

                <div class="packagepage-rightside">
                    <h1 class="packagepage-rightside-pricetitle">PRICE</h1>
                    <div class="packagepage-priceandbutton">
                        <h1 class="packagepage-rightside-price"> ₱ 12,000  <span class="packagepage-rightside-priceperperson">/Person</span></h1>
                        <Button style={{ marginLeft: "60px", width: "320px", height: "50px", borderRadius: "30px", backgroundColor: "#009BFF", fontSize: "16px", fontWeight: "bold" }} type="primary" onClick={showPriceDetails}>
                            <span>
                                <InfoCircleOutlined style={{ marginRight: "4px", fontWeight: "bold", fontSize: "16px" }} />
                            </span>
                            Check Availability
                        </Button>
                    </div>

                    <div>
                        <Tabs className="packagepage-rightside-tabs" defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                </div>

                {/* MODALS */}
                {/* PRICE AND DETAILS */}

                <Modal
                    title={<p>Choose Date and Package Details</p>}
                    footer={
                        <div>
                            <Button type="primary" onClick={showBookingSummary} style={{ height: 40, width: 120 }}>
                                Proceed
                            </Button>

                            <Button type="primary" onClick={() => setOpenPriceDetailsModal(false)} style={{ height: 40, width: 120, marginLeft: 20 }}>
                                Cancel
                            </Button>
                        </div>

                    }
                    loading={loadingPriceDetailsModal}
                    open={openPriceDetailsModal}
                    onCancel={() => setOpenPriceDetailsModal(false)}
                    width={750}
                >
                    <div class="datepackagedetailsmodal-dateandpackagedetails">
                        <div style={wrapperStyle}>
                            <Calendar fullscreen={false} onPanelChange={onPanelChange} />
                        </div>

                        <Divider type="vertical" style={{ height: 320, border: "0.5px solid gray", opacity: "60%" }} />

                        <div class="datepackagedetailsmodal-packageside">
                            <h1 class="datepackagedetailsmodal-packageside-title">Baguio City Tour</h1>
                            <p class="datepackagedetailsmodal-packageside-description"> 3 Days 2 Nights land arrangement package inclusive of hotel accommodation, daily breakfast, round trip airport - hotel transfers.</p>

                            <Divider style={{ width: 250, border: "0.5px solid gray", opacity: "60%" }} />

                            <div class="datepackagedetailsmodal-packageside-pricequantitytitles">
                                <p>PRICE</p>
                                <p>QUANTITY</p>
                            </div>


                            <div class="datepackagedetailsmodal-packagedetails">
                                <h1>₱ 12,000<span class="datepackagedetailsmodal-packagedetails-perperson">/per person</span></h1>
                                <Space>
                                    <InputNumber min={1} max={10} defaultValue={1} />
                                </Space>
                            </div>

                        </div>

                    </div>
                </Modal>

                {/*BOOKING SUMMARY */}

                <Modal
                    title={<p>Booking Summary</p>}
                    footer={
                        <div>
                            <Button type="primary" onClick={showCheckOut} style={{ height: 40, width: 120 }}>
                                Proceed
                            </Button>

                            <Button type="primary" onClick={() => setOpenBookingSummaryModal(false)} style={{ height: 40, width: 120, marginLeft: 20 }}>
                                Cancel
                            </Button>
                        </div>

                    }
                    loading={loadingBookingSummaryModal}
                    open={openBookingSummaryModal}
                    onCancel={() => setOpenBookingSummaryModal(false)}
                    width={750}
                >
                    <div class="bookingsummarymodal">
                        <h1 class="bookingsummarymodal-title">Baguio City Tour</h1>
                        <p class="bookingsummarymodal-description"> 3 Days 2 Nights land arrangement package inclusive of hotel accommodation, daily breakfast, round trip airport - hotel transfers.</p>

                        <div class="bookingsummarymodal-pricequantity-titles">
                            <p>PRICE</p>
                            <p>QUANTITY</p>
                        </div>

                        <div class="bookingsummarymodal-pricequantity-values">
                            <p>₱ 12,000</p>
                            <p>1×</p>
                        </div>

                        <Divider style={{ width: 250, border: "0.5px solid gray", opacity: "60%" }} />

                        <div class="bookingsummarymodal-pricequantity-total">
                            <p class="bookingsummarymodal-pricequantity-totaltext">TOTAL</p>
                            <p class="bookingsummarymodal-pricequantity-totalprice">₱ 12,000</p>
                        </div>

                    </div>
                </Modal>


                {/* CHECKOUT */}

                <Modal
                    title={<p>Checkout</p>}
                    footer={
                        <div>
                            <Button type="primary" onClick={showPaymentProcess} style={{ height: 40, width: 120 }}>
                                Proceed
                            </Button>

                            <Button type="primary" onClick={() => setOpenCheckOutModal(false)} style={{ height: 40, width: 120, marginLeft: 20 }}>
                                Cancel
                            </Button>
                        </div>

                    }
                    loading={loadingCheckOutModal}
                    open={openCheckOutModal}
                    onCancel={() => setOpenCheckOutModal(false)}
                    width={750}
                >
                    <div class="checkoutmodal">
                        <h1 class="checkoutmodal-title">Choose Billing Method</h1>
                    </div>

                    <div class="checkoutmodal-buttons">
                        <Button type="primary" style={{ height: 210, width: 300 }}>
                            GCASH
                        </Button>
                        <Button type="primary" style={{ height: 210, width: 300 }}>
                            BDO
                        </Button>
                    </div>
                </Modal>

                {/* PAYMENT PROCESS */}

                <Modal
                    title={<p>Payment Process</p>}
                    footer={
                        <div>
                            <Button type="primary" onClick={showConfirmPayment} style={{ height: 40, width: 120 }}>
                                Proceed
                            </Button>

                            <Button type="primary" onClick={() => setOpenPaymentProcessModal(false)} style={{ height: 40, width: 120, marginLeft: 20 }}>
                                Cancel
                            </Button>
                        </div>

                    }
                    loading={loadingPaymentProcessModal}
                    open={openPaymentProcessModal}
                    onCancel={() => setOpenPaymentProcessModal(false)}
                    width={750}
                >
                    <div class="paymentprocessmodal">
                        <h1 class="paymentprocessmodal-title">BDO PAYMENT</h1>
                        <div class="paymentprocessmodal-form">
                            <Form
                                name="login"
                                initialValues={{ remember: true }}
                                style={{ maxWidth: 420, margin: "0 auto", marginBottom: "20px" }}
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

                            </Form>
                        </div>
                    </div>


                </Modal>

                {/* CONFIRM PAYMENT */}

                <Modal
                    title={<p>Confirm Payment</p>}
                    footer={
                        <div>
                            <Button type="primary" onClick={showBookingSuccess} style={{ height: 40, width: 120 }}>
                                Proceed
                            </Button>

                            <Button type="primary" onClick={() => setOpenConfirmPaymentModal(false)} style={{ height: 40, width: 120, marginLeft: 20 }}>
                                Cancel
                            </Button>
                        </div>

                    }
                    loading={loadingConfirmPaymentModal}
                    open={openConfirmPaymentModal}
                    onCancel={() => setOpenConfirmPaymentModal(false)}
                    width={750}
                >

                    <div class="confirmpaymentmodal">
                        <h1 class="confirmpaymentmodal-title">BDO PAYMENT</h1>

                        <div class="confirmpaymentmodal-itemtotal-titles">
                            <p>ITEM</p>
                            <p>TOTAL</p>
                        </div>

                        <div class="confirmpaymentmodal-itemtotal-values">
                            <p class="confirmpaymentmodal-itemtotal-valuesquantity">1×</p>
                            <p class="confirmpaymentmodal-itemtotal-item">Baguio City Tour Package</p>
                            <p class="confirmpaymentmodal-itemtotal-valuesprice">₱ 12,000</p>
                        </div>
                    </div>


                </Modal>

                {/* BOOKING SUCCESSFUL */}

                <Modal
                    title={<p>Booking Successful</p>}
                    footer={
                        <div>
                            <Button type="primary" onClick={() => setOpenBookingSuccessModal(false)} style={{ height: 40, width: 120 }}>
                                Proceed
                            </Button>
                        </div>

                    }
                    loading={loadingBookingSuccessModal}
                    open={openBookingSuccessModal}
                    onCancel={() => setOpenBookingSuccessModal(false)}
                    width={750}
                >

                    <div class="bookingsuccessfulmodal">
                        <h1 class="bookingsuccessfulmodal-title">LOGO M&RC</h1>

                        <div class="bookingsuccessfulmodal-table">
                            <div class="bookingsuccessfulmodal-columnone">
                                <p>Order Amount</p>
                                <p>Payment Method</p>
                                <p>Order Time</p>
                                <p>Transaction ID</p>
                                <p>Trip Code</p>
                            </div>

                            <div class="bookingsuccessfulmodal-columntwo">
                                <p>₱ 12,000</p>
                                <p>BDO/GCASH</p>
                                <p>2025-09-18 17:19:11</p>
                                <p>8Q7898wdUQWHSsu</p>
                                <p>VTT-3D2NBAGIOUTR</p>
                            </div>
                        </div>

                    </div>

                </Modal>

            </div>
        </div >
    )
}

export default AvailPackagePage

//https://www.geeksforgeeks.org/node-js/dayjs-introduction-and-installation/
//https://www.geeksforgeeks.org/javascript/how-to-use-the-dayjs-library-to-work-with-date-time-in-javascript/
//https://www.freecodecamp.org/news/javascript-date-time-dayjs/#heading-how-to-add-to-or-subtract-from-date-and-time