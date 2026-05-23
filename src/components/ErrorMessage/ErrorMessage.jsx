import errorIcon from "../../assets/images/error.svg";
import "./ErrorMessage.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
        <img src={errorIcon} alt="Error" />
      <p>{message}</p>
    </div>
  )
}

export default ErrorMessage
