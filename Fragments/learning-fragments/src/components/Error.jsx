// components/Error.jsx
const Error = ({ foodItems }) => {
  if (!foodItems || foodItems.length === 0) {
    return <div className="alert alert-warning">No food items provided.</div>;
  }
  return null;
};

export default Error;
