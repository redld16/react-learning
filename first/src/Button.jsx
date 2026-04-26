function Button() {
  return (
    <button type="button" onClick={handleClick}>
      change background color
    </button>
  );
}

function handleClick() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = `#${randomColor}`;
}

export default Button;
