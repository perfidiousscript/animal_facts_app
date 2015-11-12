express = require('express');
app = express();
path = require('path');

app.set('port', process.env.PORT || 5000);





app.listen(app.get('port'), function(){
    console.log("d(=^.^=)b Listening on port: ", app.get('port'));
});