import "../CSS/destinationspagecss.css";
import { Divider, Button, Flex, Typography, Card } from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";

const DestinationsHomePage = () => {
    const cardStyle = {
        width: 620,
    };


    const { Meta } = Card;

    return (
        <div class="destinations-page">

            <div class="destinations">
                <h1 class="destination-maintitle">Destinations</h1>
                <img src="/images/BoholDestination.png" class="destination-mainimage" />
                <h1 class="destination-secondtitle">BOHOL</h1>
                <p class="destination-description">Bohol is a tropical paradise known for the iconic Chocolate Hills, pristine white-sand beaches, enchanting rivers, and the adorable tarsiers—making it a must-visit destination for nature and adventure lovers.</p>
                <Link to="/package" target="_self" style={{ width: 400 }}>
                    <Button block type="primary" htmlType="submit" className="viewdetailsbutton">
                        <InfoCircleOutlined />
                        <span style={{ marginBottom: "2px" }}>View Details</span>
                    </Button>
                </Link>

            </div>

            <Divider type="vertical" style={{ position: "relative", height: "530px", borderLeft: '2px solid gray', opacity: "60%", marginLeft: "110px", marginTop: "145px" }} />

            <div class="otherdestinations">
                <Card style={{ width: 700, borderRadius: "25px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                    <Flex justify="space-between">
                        <img
                            draggable={false}
                            alt="avatar"
                            src="/images/BoracayDestination.png"
                            style={{ display: 'block', width: 273 }}
                        />
                        <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
                            <Typography.Title level={3}>
                                BORACAY
                                <p style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Typography.Title>
                            <Link to="/package" target="_self">
                                <Button type="primary">
                                    View Details
                                </Button>
                            </Link>
                        </Flex>
                    </Flex>
                </Card>

                <Card style={{ width: 700, borderRadius: "25px", boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                    <Flex justify="space-between">
                        <img
                            draggable={false}
                            alt="avatar"
                            src="/images/IlocosDestination.png"
                            style={{ display: 'block', width: 273 }}
                        />
                        <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
                            <Typography.Title level={3}>
                                ILOCOS
                                <p style={{ fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </Typography.Title>
                            <Link to="/package" target="_self">
                                <Button type="primary">
                                    View Details
                                </Button>
                            </Link>

                        </Flex>
                    </Flex>
                </Card>

            </div>
        </div >
    )
}

export default DestinationsHomePage