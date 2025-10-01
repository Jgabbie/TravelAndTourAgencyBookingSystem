
import "../CSS/aboutpagecss.css";
import { Divider } from "antd";
import { FacebookFilled } from '@ant-design/icons';

const AboutHomePage = () => {
    return (<div>
        <div class="aboutcompany">
            <img src="/images/M&RCLogo2.png" class="aboutcompany-image" />
            <h1 class="aboutcompany-title">Welcome to M&RC <span class="aboutcompany-title-part1">Travel</span> and <span class="aboutcompany-title-part2">Tours!</span></h1>
            <p class="aboutcompany-description">It’s our pleasure that you have chosen us as your travel agency in the Philippines. We aim to make travel affordable to the people and promote world wide tourist destinations.</p>

            <a href="https://www.facebook.com/mrctravelandtour/" target="_blank" rel="noopener noreferrer">
                <FacebookFilled style={{ fontSize: "40px", color: "#2E5994" }} />
            </a>

        </div>



        <Divider type="vertical" style={{ position: "absolute", height: "530px", borderLeft: '2px solid gray', top: "850px", left: "505px", opacity: "60%" }} />

        <h2 class="companyservices-title">Our Services</h2>

        <div class="companyservices">
            <div class="companyservice-one">
                <img class="companyservice-img" src="/images/Service1.png" />
                <h4>Tour Packages</h4>
                <p class="services-description">Everyone loves to tour with friends, family, workmates, for leisure vacations and team building. We can organize your tour to anywhere in the Philippines.</p>
            </div>
            <div class="companyservice-two">
                <img class="companyservice-img" src="/images/Service2.png" />
                <h4>Travel Assistance</h4>
                <p class="services-description">We will provide you with the requirements and checklists, and assist on documentation, appointments and submission of application.</p>
            </div>
            <div class="companyservice-three">
                <img class="companyservice-img" src="/images/Service3.png" />
                <h4>Tour Guide</h4>
                <p class="services-description">In order to make your travel smooth and hassle-free. We make sure that you are guided and knowledegeable about the areas and places you are about to visit in the Philippines.</p>
            </div>
            <div class="companyservice-four">
                <img class="companyservice-img" src="/images/Service4.png" />
                <h4>Airline Ticketing</h4>
                <p class="services-description">We issue airline tickets and other transportation for domestic trips in the Philippines.</p>
            </div>
        </div>

        <h2 class="companyaccreditations-title">Accreditations and Partnerships</h2>

        <div class="companyaccreditations">
            <div class="companyaccreditations-one">
                <img class="companyaccreditations-img" src="/images/Accreditations1.jpg" />
            </div>
            <div class="companyaccreditations-one">
                <img class="companyaccreditations-img" src="/images/Accreditations2.jpg" />
            </div>
            <div class="companyaccreditations-one">
                <img class="companyaccreditations-img" src="/images/Accreditations3.jpg" />
            </div>
            <div class="companyaccreditations-one">
                <img class="companyaccreditations-img" src="/images/Accreditations4.png" />
            </div>
        </div>
    </div>
    )
}

export default AboutHomePage