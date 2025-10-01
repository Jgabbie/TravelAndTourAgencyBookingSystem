import "../App.css";
import { Anchor } from "antd";
import { InfoCircleFilled, EnvironmentFilled, SmileFilled, SearchOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import SearchHomePage from "./SearchPage";
import AboutHomePage from "./AboutPage";
import DestinationsHomePage from "./DestinationsPage";
import ProfilePage from "./Profile";

const TravelHomePage = () => {
    const key = 'updatable';

    return (
        <div>
            <div className="topbar">
                <div className="logo">
                    <img class="mrclogo" src='/images/M&RCLogo.png'></img>
                </div>

                <div className="anchor-wrap">
                    <Anchor
                        className="top-anchor"
                        direction="horizontal"
                        defaultActiveKey="part-1"

                        items={[
                            {
                                key: "part-1", href: "#part-1", title:
                                    <span>
                                        <SearchOutlined style={{ marginRight: 4 }} />
                                        Search
                                    </span>
                            },
                            {
                                key: "part-2", href: "#part-2", title:
                                    <span>
                                        <InfoCircleFilled style={{ marginRight: 4 }} />
                                        About
                                    </span>
                            },
                            {
                                key: "part-3", href: "#part-3", title:
                                    <span>
                                        <EnvironmentFilled style={{ marginRight: 4 }} />
                                        Destinations
                                    </span>
                            },
                            {
                                key: "part-4", title:
                                    <Link style={{ color: "black" }} to={"/profile"}>
                                        <span>
                                            <SmileFilled style={{ marginRight: 4 }} />
                                            Profile
                                        </span>
                                    </Link>

                            },
                        ]}
                    />
                </div>
            </div>

            <div style={{ paddingTop: "20px" }}>
                <div id="part-1" style={{
                    height: "100vh",
                    background: "rgba(0,255,0,0.02)",
                    minHeight: "100vh",
                    backgroundImage: 'url("/images/LoginBackground.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }} >
                    <SearchHomePage />
                </div>
                <div id="part-2" style={{ height: "100vh", background: "#ffffffff" }} >
                    <AboutHomePage />
                </div>
                <div id="part-3" style={{ height: "100vh", background: "#ffffffff" }}>
                    <DestinationsHomePage />
                </div>
            </div>
        </div>
    )

};

export default TravelHomePage;
