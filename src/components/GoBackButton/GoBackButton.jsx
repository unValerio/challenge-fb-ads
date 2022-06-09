import { useNavigate } from 'react-router-dom';

import Button from '../Button';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <Button title=" Go back" iconName="bx-arrow-back" onClick={() => navigate(-1)} />
  );
}

export default GoBackButton;
