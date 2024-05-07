var express = require('express');
var app = express();

let comments = [];

app.use(express.json())
app.use(express.urlencoded({extended: true}))
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
  res.render('index', {comments: comments});
});

app.get('/create', function(req, res) {
    console.log(req.query);
    res.send('hi');
  });

  app.post('/create', function(req, res) {
    console.log(req.body);
    const {email} = req.body
    const {nickname} = req.body
    const {paint} = req.body
    const {number} = req.body
    const {departcountry} = req.body
    const {departcity} = req.body
    const {departairport} = req.body
    const {arrivecountry} = req.body
    const {arrivecity} = req.body
    const {arriveairport} = req.body
    const {departdate} = req.body
    const {departtime} = req.body
    const {arrivedate} = req.body
    const {arrivetime} = req.body
    const {time} = req.body
    const {people} = req.body
    const {bagagge} = req.body
    const {weight} = req.body 
    const {fuel} = req.body
    comments.push('이메일 : '+email+', 조종사 이름 : '+nickname+', 항공기 도장 : '+paint+', 항공기 편명 : '+number+', 출발 국가 : '+departcountry+', 출발 도시 : '+departcity+', 출발 공항 : '+departairport+', 도착 국가 : '+arrivecountry+', 도착 도시 : '+arrivecity+', 도착 공항 : '+arriveairport+', 출발 날짜 : '+departdate+', 출발 시간 : '+departtime+', 도착 날짜 : '+arrivedate+', 도착 시간 : '+arrivetime+', 운항 시간 : '+time+', 탑승 인원 수 : '+people+', 화물 무게 (kg) : '+bagagge+', 전체 하중 (kg) : '+weight+', 탑재 연료 및 소비 연료량 (kg) : '+fuel);
    console.log(comments);
    res.redirect('/')
  });
app.listen(8080);
console.log('Server is listening on port 8080');