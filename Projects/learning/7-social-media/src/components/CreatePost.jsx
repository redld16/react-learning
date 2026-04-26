import { useContext, useState } from "react";
import { PostListContext } from "../store/post-list-context";

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);
  const [formData, setFormData] = useState({
    title: "",
    image: null,
    imageUrl: "",
    text: "",
  });

  const handleInputChange = (event) => {
    const { id, value, type, files } = event.target;
    const newState = type === "file" ? { [id]: files[0] } : { [id]: value };
    setFormData((prevState) => ({ ...prevState, ...newState }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const finalImageUrl =
      formData.imageUrl ||
      (formData.image ? URL.createObjectURL(formData.image) : "");

    const newPost = {
      id: Date.now(),
      title: formData.title,
      text: formData.text,
      imageUrl: finalImageUrl,
    };

    addPost(newPost);

    setFormData({
      title: "",
      image: null,
      imageUrl: "",
      text: "",
    });
  };

  const handleImageChange = (event) => {
    const { id } = event.target;
    if (id === "image") {
      setFormData((prevState) => ({ ...prevState, imageUrl: "" }));
    } else if (id === "imageUrl") {
      setFormData((prevState) => ({ ...prevState, image: null }));
    }
    handleInputChange(event);
  };

  return (
    <form onSubmit={handleSubmit} className="col-9 mx-auto mt-5">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          aria-describedby="titleHelp"
          value={formData.title}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          aria-describedby="imageHelp"
          onChange={handleImageChange}
        />
      </div>
      <div className="mb-3">
        <center>OR</center>
      </div>
      <div className="mb-3">
        <label htmlFor="imageUrl" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="imageUrl"
          aria-describedby="imageUrlHelp"
          value={formData.imageUrl}
          onChange={handleImageChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="text" className="form-label">
          text
        </label>
        <textarea
          className="form-control"
          id="text"
          rows="3"
          value={formData.text}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default CreatePost;
