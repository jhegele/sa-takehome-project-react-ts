import { Layout } from "components";
import type { NextPage } from "next";
import { FaRegCheckCircle } from "react-icons/fa";

const Success: NextPage = () => {
  return (
    <Layout>
      <div className="mt-40 text-center text-success">
        <h1>
          <FaRegCheckCircle /> Success!
        </h1>
      </div>
      <div className="mt-40 text-center text-secondary border-placeholder">
        Add details about the payment here!
      </div>
    </Layout>
  );
};

export default Success;
