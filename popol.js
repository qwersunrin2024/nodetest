const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on dd')
});

app.get('/sec', function(요청, 응답){
    응답.sendFile(__dirname + '/index.html');
});

app.get('/pet', function(요청, 응답){
    응답.send("팻용품 페이지입니다");
});

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/sec.html');
});

app.get('/teampl', function(요청, 응답){
    응답.sendFile(__dirname + '/teampl.html');
});