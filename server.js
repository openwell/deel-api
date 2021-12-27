const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res
    .status(200)
    .json([
      'deel',
      'lets act',
      'start up',
      'intel',
      'meta',
      'nigeria',
      'covid',
      'manchester united',
      'academic',
      'encanto',
      'access',
      'tesla',
      'responsibility',
      'accomplish',
      'struggle',
      'account',
      'hearing',
      'heart',
      'space',
      'heaven',
      'ronaldo',
      'heavy',
      'crypto',
      'person',
      'texas',
      'personality',
      'tendency',
      'nft',
      'tension',
      'climate',
      'meta verse',
      'year',
      'meta',
      'tech',
      'facebook',
    ]);
});
app.get('*', (req, res) => {
  res.status(200).send('Hello Stranger');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
