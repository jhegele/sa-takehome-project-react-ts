import React, { PropsWithChildren } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Head from "next/head";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>SA Takehome Project</title>
      </Head>
      <Container style={{ maxWidth: "1140px" }}>
        <Navbar>
          <Navbar.Brand href="/">Stripe Press</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {children}
      </Container>
    </React.Fragment>
  );
};
