import { useState } from "react"

function PostForm() {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    fetch("/view-post",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "title": title,
        "body": body
      }),
    })
      .then((r) => r.json())
      .then((newPost) => {
        console.log()
      })
  }

  return (
    <div className="w-fit m-auto">
      <h2 className="text-center">New post</h2>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input type="text" value={title} placeholder="Title" onChange={(e) => setTitle(e.target.value)}/>
        <textarea className="border-2 border-black" value={body} placeholder="Body" onChange={(e) => setBody(e.target.value)}/>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
