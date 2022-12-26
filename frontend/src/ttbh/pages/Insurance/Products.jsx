import Layout from "../Layout";
import InsuranceList from "../../components/insurance/InsuranceList";
import { Link } from "react-router-dom";


const ProductsTTBH = () => {

  return (
    <Layout>
      <div>
        <h1 className="title">Bảo hành</h1>
      </div>
      <InsuranceList/>
    </Layout>
  );
};

export default ProductsTTBH;