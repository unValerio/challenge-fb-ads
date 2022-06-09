import './Box.css'

function Box({ children }) {
  return (
    <div className='box-container'>
      {children}
    </div>
  );
}

export default Box;
