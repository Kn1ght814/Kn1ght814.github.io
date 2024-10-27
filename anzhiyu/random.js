var posts=["2024/10/12/SHCTF-week1-复现/","2024/10/18/SHCTF-week2-复现/","2024/08/11/hello-world/","2024/10/16/区块链入门-0xGame-Blockchain/","2024/08/24/小迪第二天/","2024/08/24/我的第一篇博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };