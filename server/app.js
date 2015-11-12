express = require('express');
app = express();
path = require('path');

app.set('port', process.env.PORT || 5000);

app.get('/*', function(req,res){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname,"./public/assets/",file));
});

app.listen(app.get('port'), function(){
    console.log("d(=^.^=)b Listening on port: ", app.get('port'));
});