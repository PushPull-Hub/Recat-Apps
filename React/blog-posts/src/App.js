import React from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function App() {
  const getPosts = () => {
    axios
      .get('http://jsonplaceholder.typicode.com/posts?_start=10&_limit=10')
      .then((posts) => setPosts(posts.data))
      .catch((error) => console.log(error));
  };
  const [posts, setPosts] = React.useState([]);
  return (
    <div className='App'>
      <div className='wrapper'>
        <h1 className='title'>BLOG POSTS</h1>

        <Button variant='danger' className='get-btn' onClick={() => getPosts()}>
          Get Posts
        </Button>
      </div>
      {posts.map((post) => (
        <div className='blog-post' key={post.id}>
          <h3 className='blog-title'>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
