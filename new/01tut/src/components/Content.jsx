import ItemsList from './ItemsList';

const Content = ({ items, handleCheck, handleDelete }) => {
  return (
    <>
      <ItemsList
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Content;
