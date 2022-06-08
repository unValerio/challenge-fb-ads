import { useParams } from "react-router-dom";

import './CreateView.css';

function CreateView() {
  const params = useParams();

  return (
    <h1 className="page-content">CreateView: {params.productId}</h1>
  );
}

export default CreateView;
