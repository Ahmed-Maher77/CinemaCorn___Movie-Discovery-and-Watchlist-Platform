import "./LoadingMessage.css";

const LoadingMessage = ({ message }) => {
  return (
    <div className="loading-message">
      <p>{message}</p>
      <div className="loader"></div>
    </div>
  )
}

export default LoadingMessage
