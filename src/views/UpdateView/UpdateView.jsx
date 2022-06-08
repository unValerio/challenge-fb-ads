import { useParams } from "react-router-dom";

import './UpdateView.css';

function UpdateView() {
  const params = useParams();

  return (
    <h1 className="page-content">UpdateView: {params.productId} : {params.adId}</h1>
  );
}

export default UpdateView;
