
import React, { Component } from 'react';
import CardCampaign from './CardCampaign';
import ControlledCarousel from './ControlledCarousel';
import { Container, Row, Col } from 'react-bootstrap';
import CampaignCards from './CampaignCards';


class HomePage extends Component {
    render() {
        return (
            <React.Fragment>
                <CampaignCards />
                <ControlledCarousel />
                <Container>
                    <h5>Latest Campaigns</h5>
                    <Row>
                        <Col><CardCampaign /></Col>
                        <Col><CardCampaign /></Col>
                        <Col><CardCampaign /></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default HomePage;