import AddItem from "./AddItem";

const AddPage = ({ setItems, items }) => {
  return (
    <>
      <AddItem setItems={setItems} items={items} />
    </>
  );
};

export default AddPage;
