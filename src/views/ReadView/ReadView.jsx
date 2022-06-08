import { useParams } from "react-router-dom";

import './ReadView.css';

function ReadView() {
  const params = useParams();

  return (
    <h1 className="page-content">ReadView: {params.productId}</h1>
  );
}

export default ReadView;
