import './Button.css';

function Button({ title, iconName, onClick }) {
  return (
    <div className='button' onClick={onClick}>
      <span>{iconName && <i className={`bx ${iconName}`}></i>}
        {title}
      </span>
    </div >
  );
}

export default Button;
