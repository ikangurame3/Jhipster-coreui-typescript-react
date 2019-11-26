import * as React from "react";
import {
  Container,
  Row,
  Col
} from "reactstrap";

const Page500: React.FC = () => {
  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">500</h1>
              <h4 className="pt-3">Houston, we have a problem!</h4>
              <p className="text-muted float-left">
                The page you are looking for is temporarily unavailable.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page500;
