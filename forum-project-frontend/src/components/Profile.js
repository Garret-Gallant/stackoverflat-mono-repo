import React from "react";
import { useState, useEffect } from "react";
import Post from "./Post";
//I was just getting the data from the backend, but I'm not sure how to display it
//I put all the components in one file bc laziness feel free to fix
const Profile = ({ user }) => {
  const [cardToShow, setCardToShow] = useState("info");
  const [component, setComponent] = useState("");

  //Rerender the correct component on state change
  useEffect(() => {
    renderComponent();
  }, [cardToShow]);

  const handleCardToShow = (e) => {
    setCardToShow(e.target.id);
    renderComponent();
  };

  console.log(user)

  //Renders the correct component based on the cardToShow state
  const renderComponent = () => {
    switch (cardToShow) {
      case "info":
        setComponent(<UserInfo user={user} />);
        break;
      case "submitted":
        setComponent(<SubmittedPosts user={user} />);
        break;
      case "comments":
        setComponent(<SubmittedComments user={user}/>);
        break;
      case "liked":
        setComponent(<LikedPosts user={user} />);
        break;
      case "liked_comments":
        setComponent(<LikedComments />);
        break;
      default:
        setComponent(<UserInfo user={user} />);
    }
  };

  return (
    <div className="profile">
      <div className="profileCardSelect w-fit m-auto">
        <span id="info" onClick={handleCardToShow}>
          Info
        </span>
        <span id="submitted" onClick={handleCardToShow}>
          Submissions
        </span>
        <span id="comments" onClick={handleCardToShow}>
          Comments
        </span>
        <span id="liked" onClick={handleCardToShow}>
          Liked Posts
        </span>
        <span id="liked_comments" onClick={handleCardToShow}>
          Liked Comments
        </span>
      </div>
      <div className="cardToShow w-fit m-auto">{component}</div>
    </div>
  );
};

const UserInfo = ({ user }) => {
  return user.username === undefined || user.username === "Anonymous" ? (
    <div>Nothing to display</div>
  ) : (
    <div>
      <ul>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Bio: </li>
      </ul>
    </div>
  );
};

const SubmittedPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/me/posts")
      .then((r) => r.json())
      .then((data) => setPosts(data));
  }, []);

  if (posts.length > 0) {
    return posts.map((post) => {
      return <Post key={post.id} post={post} user_id={user.id} />;
    });
  }
};

const SubmittedComments = ( {user} ) => {

  if (user.comments.length > 0) {
    return (
    <>
    {user.comments.map((comment) => { return (
      <>
        <br />
        <div className='border p-4 w-100'>
          My Comment on someones's post here:
          <div>{comment.body}</div>
        </div>
      </>
    )})}
    </>
    )
  } 
  else {
    return <div>Nothing to display</div>
  }
};

const LikedPosts = ({ user }) => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    fetch("/me/post_likes")
      .then((r) => r.json())
      .then((data) => setLikes(data));
  }, []);

  return likes.length > 0 ? (
    likes.map((post) => <Post key={post.id} post={post} user_id={user.id} />)
  ) : (
    <div>Nothing to display</div>
  );
};

const LikedComments = () => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
    fetch("/me/comment_likes")
      .then((r) => r.json())
      .then((data) => setLikes(data));
  }, []);

  return likes.length > 0 ? <div>{likes}</div> : <div>Nothing to display</div>;
};
export default Profile;
