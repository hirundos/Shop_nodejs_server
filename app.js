const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended : true } ));

const shopRoutes = require('./routes/shopRoutes');
const loginRoutes = require('./routes/loginRoutes');
app.use('/',shopRoutes);
app.use('/',loginRoutes);

  // express 서버 시작
app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
