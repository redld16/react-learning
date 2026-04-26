import Error from "./Error";

const FoodItems = ({ foodItems, handleDelete, handleEdit }) => {
  const validItems = foodItems.filter(Boolean);

  const handleBuy = (e) => {
    e.target.parentElement.parentElement.parentElement.classList.add("active");
  };

  return (
    <>
      <Error foodItems={foodItems} />
      {validItems.length > 0 ? (
        <ul className="list-group actives">
          {validItems.map((item, index) => (
            <li key={item || index} className="list-group-item ">
              <div className="d-flex justify-content-between pointer">
                <span className="text">{item}</span>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    className="btn btn-success  "
                    onClick={(e) => handleBuy(item, e)}
                  >
                    Buy
                  </button>

                  <button
                    className="btn btn-warning  "
                    onClick={() => {
                      handleEdit(index, item);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger  "
                    onClick={() => {
                      handleDelete(index);
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="alert alert-info">No valid food items available.</div>
      )}
    </>
  );
};

export default FoodItems;
