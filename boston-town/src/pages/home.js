import { Card, Col, Row, Divider, Button } from "antd";
import './home.css';
import home from '../../../boston-town/src/assets/images/home.png';

const Home = () => {
    return (
        <div class="padding_home">
            <Row>
                <Col className="grey2 finding_apt" xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <div><b>
                        Find your dream <span className="accent_blue">apartment</span> <br /> and the <span className="accent_blue">missing</span> pieces to <br /> your <span className="accent_blue">roommate puzzle</span> ,<br /> all in one click."</b>
                        <Row gutter={[24,24]} className="find_button">
                            <Col>
                                <Button className="find_apt">
                                   <h3 className="find_apt"> Find a Apartment</h3>
                                </Button>
                            </Col>
                            <Col>
                                <Button>
                                <h3> Find Roomates</h3>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <img className="home" src={home}></img>
                </Col>

                <Col span={24} className="what_made_easy grey2">
                    <b> What we have made easy for students</b>
                </Col>
            </Row>

        </div>
    );
}

export default Home;