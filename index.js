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
    const {departairport} = req.body
    const {arriveairport} = req.body
    const {departdate} = req.body
    const {departtime} = req.body
    const {arrivedate} = req.body
    const {arrivetime} = req.body
    const {time} = req.body
    const {people} = req.body
    const {bagagge} = req.body
    const {mlw} = req.body
    const {auw} = req.body
    const {burningfuel} = req.body
    const gas = Number(mlw)-Number(auw)+Number(burningfuel)
    comments.push('이메일 : '+email+', 조종사 이름 : '+nickname+', 항공기 도장 : '+paint+', 항공기 편명 : '+number+', 출발 공항 : '+departairport+', 도착 공항 : '+arriveairport+', 출발 날짜 : '+departdate+', 출발 시간 : '+departtime+', 도착 날짜 : '+arrivedate+', 도착 시간 : '+arrivetime+', 운항 시간 : '+time+', 탑승 인원 수 : '+people+', 화물 무게 (kg) : '+bagagge+', 총 연료량 : '+gas);
    console.log(comments);
    res.redirect('/')
  });
app.listen(3000);
console.log('Server is listening on port 3000');
