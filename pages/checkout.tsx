import type { NextPage } from "next";
import { useRouter } from "next/router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { Layout } from "components";
import { inventory } from "config/inventory";

const Checkout: NextPage = () => {
  const router = useRouter();

  const itemId = router.query.item as string;

  const book = inventory.find((b) => b.id === itemId);

  if (!book) return null;

  const price = (book.amount / 100).toFixed(2);

  return (
    <Layout>
      <Row className="justify-content-center">
        <Col xs={6}>
          <div className="mt-40 text-center">
            <h1>Checkout - Stripe Press</h1>
            <h5 className="text-secondary">{book?.title}</h5>
            <hr className="mt-40" />
            <div className="mt-20 text-info">{`Total due: $${price}`}</div>
          </div>
          <Card className="shadow mt-40">
            <Card.Body>
              <Form>
                <Form.Group controlId="emailAddress">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="you@email.com" />
                </Form.Group>
                <div className="mt-20 text-center text-secondary border-placeholder">
                  Add Stripe Element here!
                </div>
                <div className="d-grid mt-20">
                  <Button variant="primary" type="submit">
                    {`Pay $${price}`}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Checkout;
