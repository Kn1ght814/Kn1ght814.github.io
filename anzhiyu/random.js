var posts=["2024/08/11/hello-world/","2024/08/24/小迪第二天/","2024/08/24/我的第一篇博客/","2024/10/12/SHCTF-week1-复现/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };