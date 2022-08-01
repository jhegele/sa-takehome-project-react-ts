import type { NextPage } from "next";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Layout, BookCard } from "components";
import { inventory } from "config/inventory";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const handlePurchase = (bookId: string) => {
    const params = new URLSearchParams();
    params.append("item", bookId);
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <Layout>
      <div className="mt-40">
        <Row className="text-center">
          <h1>Stripe Press Shop</h1>
          <p className="text-secondary">Select an item to purchase</p>
        </Row>
      </div>
      <div className="mt-40">
        <Row className="mt-40">
          {inventory.map((book) => (
            <Col key={book.id}>
              <BookCard
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
                amount={book.amount}
                imgSrc={book.image}
                onPurchase={handlePurchase}
              />
            </Col>
          ))}
        </Row>
      </div>
    </Layout>
  );
};

export default Home;
