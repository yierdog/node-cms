const express = require('express');
const app = express();
const port = 3000;
 
// 中间件，用于解析URL编码的请求体
app.use(express.urlencoded({ extended: true }));
 
// 模拟的文章数据库
let articles = [];
 
// 展示添加文章的表单
app.get('/add-article', (req, res) => {
  res.sendFile(__dirname + '/add-article.html');
});
 
// 处理添加文章的表单提交
app.post('/add-article', (req, res) => {
  const article = req.body;
  articles.push(article);
  res.redirect('/');
});
 
// 展示所有文章
app.get('/', (req, res) => {
  res.send(articles.map(article => `<h2>${article.title}</h2><p>${article.content}</p>`).join(''));
});
 
app.listen(port, () => {
  console.log(`CMS running on port ${port}`);
});