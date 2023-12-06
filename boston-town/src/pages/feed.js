import { Card, Row, Col } from "antd";
// import ".././assets/css/global_css.css";
// import logo from '../../public/images/logo.png'
const Feed = () => {
    return (
        <>
            <Row className="background" gutter={[24,24]}>
                <Col xs={6} sm={6} md={6} lg={5} xl={5} xxl={5}>
                    <Card className="card">

                    </Card>
                </Col>
                <Col xs={6} sm={6} md={6} lg={13} xl={13} xxl={13}>
                    <Card className="card">
                        <Row>
                            <Col>
                            <img src=""></img>
                            </Col>
                            <Col>
                            </Col>

                        </Row>

                    </Card>
                </Col>
                <Col xs={2} sm={4} md={8} lg={6} xl={6} xxl={6}>
                    <Card className="card">

                    </Card>
                </Col>

            </Row>
        </>
    );
}

export default Feed;