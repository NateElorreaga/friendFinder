
const express = require('express');
const path = require('path');
const app = express();

var PORT = process.env.PORT || 8080;
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());


//points the server to a series of "route" files. These routes give the server a map of how to respond when users visit/request data from various URLs.
require("./app/routes/htmlRoutes")(app);
require("./app/routes/apiRoutes")(app);
app.listen(PORT, function(){
   console.log('App listening on port: ' + PORT);
});