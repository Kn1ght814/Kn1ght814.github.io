var posts=["2024/08/24/hello-world/","2024/09/24/小迪第二天/","2024/08/24/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };