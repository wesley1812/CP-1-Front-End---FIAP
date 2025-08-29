interface MotivationalMessageProps {
  message: string;
  author: string;
}
const MotivationalMessage: React.FC<MotivationalMessageProps> = ({ message, author }) => {
  return (
    <div>
      <p>{message}</p>
      <p><em>{author}</em></p>
    </div>
  );
};
export default MotivationalMessage; 
 