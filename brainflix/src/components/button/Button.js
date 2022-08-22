import "./Button.scss";


function Button(props) {
  return (
   <button className='button'>
        <img src={props.image} alt="upload-icon" />
        <p>{props.name}</p>
      </button> 
  );
}

export default Button;
