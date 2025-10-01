import "../CSS/searchpagecss.css";
import { Anchor, Card, AutoComplete, Flex, Input, Dropdown, Space, Divider, Carousel, Typography, Button, ConfigProvider } from "antd";
import { DownOutlined, CalendarTwoTone, CarryOutTwoTone } from '@ant-design/icons';
import { Link, useLocation } from "react-router-dom";

//SEARCH BAR
const Title = props => (
    <Flex align="center" justify="space-between">
        {props.title}
    </Flex>
);
const renderItem = (title, count) => ({
    value: title,
    label: (
        <Flex align="center" justify="space-between">
            {title}
        </Flex>
    ),
});
const options = [
    {
        label: <Title title="A" />,
        options:
            [
                {
                    label: <Link to={"/package"}>ABRA</Link>,
                    value: "abra"
                },
                {
                    label: <Link to={"/package"}>AGUSAN DEL NORTE</Link>,
                    value: "agusandelnorte"
                }
            ],
    },
    {
        label: <Title title="B" />,
        options:
            [
                {
                    label: <Link to={"/package"}>BAGUIO</Link>,
                    value: "baguio"
                },
                {
                    label: <Link to={"/package"}>BOHOL</Link>,
                    value: "bohol"
                },
                {
                    label: <Link to={"/package"}>BORACAY</Link>,
                    value: "boracay"
                }
            ],
    },
    {
        label: <Title title="C" />,
        options:
            [
                {
                    label: <Link to={"/package"}>CAMARINES SUR</Link>,
                    value: "camarinessur"
                },
            ],
    },
];

//DROPDOWN
const activities = [
    {
        label:
            <Link to={"/activities"}>
                Sightseeing
            </Link>
        ,
        key: '0',
    },
    {
        label:
            <Link to={"/activities"}>
                Zipline
            </Link>,
        key: '1',
    },
    {
        label:
            <Link to={"/activities"}>
                Water Sports
            </Link>,
        key: '2',
    },
    {
        label:
            <Link to={"/activities"}>
                Hiking
            </Link>,
        key: '3',
    }
];

const duration = [
    {
        label:
            <Link to={"/datetime"}>
                1 Day
            </Link>,
        key: '0',
    },
    {
        label:
            <Link to={"/datetime"}>
                2 Days
            </Link>,
        key: '1',
    },
    {
        label:
            <Link to={"/datetime"}>
                3 Days
            </Link>,
        key: '2',
    }
];




//CARD
const { Meta } = Card;

const SearchHomePage = () => {
    return (
        <div class="searchpage">
            <div class="searchpagetitle">
                <h1 class="homepagetitle">Find Your <span class="homepagetitle-span1">Best</span> <span class="homepagetitle-span2">Holiday</span></h1>
                <h2 class="homepagetitle-part2"> Book your dream holiday vacation tours and activities at affordable rates! Explore the Philippines with us!</h2>
            </div>


            <Card style={{
                position: "relative",
                backgroundColor: 'rgba(255, 255, 255, 0.20)',
                width: 700,
                height: 140,
                backdropFilter: 'blur(2px)',
                boxShadow: 'none',
                borderRadius: '8px',
                paddingBottom: "5px",
                marginTop: "30px"
            }}>

                <ConfigProvider
                    theme={{
                        components: {
                            Select: {
                                fontSize: 12,
                                height: 40
                            },
                        },
                    }}
                >
                    <AutoComplete
                        popupMatchSelectWidth={500}
                        style={{ position: "relative", width: 570, paddingTop: "23px" }}
                        options={options}
                    >
                        <Input.Search size="large" placeholder="Search for a Destination" style={{ fontSize: "40px" }} />
                    </AutoComplete>
                </ConfigProvider>

            </Card>


            <div class="dropdown-section">
                <div class="searchpage-dropdown-titles">
                    <h3 class="dropdowntitle-activities">ACTIVITIES</h3>
                    <h3 class="dropdowntitle-duration">DURATION</h3>
                </div>


                <div class="searchpage-dropdown">

                    <Dropdown menu={{ items: activities }} className="dropdown-activities">
                        <div class="dropdown-appearance-activities" onClick={e => e.preventDefault()}>


                            <Space className="dropdowntext-activities">
                                <CarryOutTwoTone style={{ fontSize: "40px" }} />
                                Choose your Adventure
                                <DownOutlined />
                            </Space>
                        </div>
                    </Dropdown>
                    <Dropdown menu={{ items: duration }} className="dropdown-duration">
                        <div class="dropdown-appearance-duration" onClick={e => e.preventDefault()}>

                            <Space className="dropdowntext-duration">
                                <CalendarTwoTone style={{ fontSize: "40px" }} />
                                Choose your time
                                <DownOutlined />
                            </Space>
                        </div>
                    </Dropdown>
                </div>
            </div>




        </div>
    )
}

export default SearchHomePage;