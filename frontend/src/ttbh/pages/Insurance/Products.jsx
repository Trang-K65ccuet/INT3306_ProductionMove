import Layout from "../Layout";
import InsuranceList from "../../components/insurance/InsuranceList";
import { Link } from "react-router-dom";


const ProductsTTBH = () => {

  return (
    <Layout>
      <div>
        <h1 className="title">Bảo hành</h1>
        <Link to="/ttbh/products/import" className="button is-primary mb-2">
          Yêu cầu bảo hành
        </Link>
        <Link to="/ttbh/products/status" className="button is-primary mb-2">
          Cập nhật trạng thái
        </Link>
      </div>
      <InsuranceList/>
    </Layout>
  );
};

export default ProductsTTBH;