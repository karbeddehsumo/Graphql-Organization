const express = require('express');
const graphqlHTTP = require('express-graphql');
//const schema = require('./schema/schema');
const schema = require('./schema2/index');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb://gfumbah:zorzor1964@ds115664.mlab.com:15664/organizationdb', { useNewUrlParser: true });
//mongoose.connect('mongodb://user:pw@host1.com:27017/dbname', { useNewUrlParser: true })


mongoose.connection.once('open',()=>{
  console.log('connected to mongo database');
})
app.use('/organization', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
   console.log('App server listening at port 4000.');
});
