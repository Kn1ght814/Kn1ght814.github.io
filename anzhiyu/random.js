var posts=["2024/08/24/hello-world/","2024/08/26/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };