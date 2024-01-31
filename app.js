// Requiring module
const express = require('express');
 
// Creating express object
const app = express();
const path = require('path');
 
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'camping')));

// Handling GET request
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'camping')); 
    //res.sendFile(__dirname + '/script.js');
    //res.end() 
});

/*app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/script.js'); 
    //res.end() 
})*/

// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));

