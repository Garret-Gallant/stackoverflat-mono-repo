import { useEffect, useState } from "react";

function PostForm({ user, onSubmit }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  useEffect(() => {
    fetch("/categories")
      .then((r) => r.json())
      .then((data) => setCategories(data));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        title: title,
        body: body,
        category_id: categoryId,
      }),
    })
      .then((r) => r.json())
      .then(onSubmit());
  }

  return (
    <div className="w-fit m-auto">
      <h2 className="text-center">New post</h2>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <select class="w-48 overflow-auto rounded-md" onChange={(e) => setCategoryId(e.target.value)}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
        className="indent-1 "
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="box-content h-32 w-56 border-2 border-black indent-0.5 rounded"
          value={body}
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button className='new-post-btn'>Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
