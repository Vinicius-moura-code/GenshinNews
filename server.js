const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/personagens', function (req, res) {
  res.render('characters', { gsnc: gsnc });
});

app.get('/artefatos', function (req, res) {
  res.render('artifacts');
});

app.get('/dominios', function (req, res) {
  res.render('domains');
});

app.get('/armas', function (req, res) {
  res.render('weapons');
});

app.listen(8080);

const gsnc = [
  {
    urlImg: 'assets/ayaka.png',
    name: 'Ayaka',
    text: 'Cryo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/kazuha.png',
    name: 'Kazuha',
    text: 'Anemo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Ganyu.png',
    name: 'Ganyu',
    text: 'Cryo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/barbara.png',
    name: 'Barbara',
    text: 'Hydro ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/hutao.png',
    name: 'Hutao',
    text: 'Pyro ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/zhongli.png',
    name: 'Zongli',
    text: 'Geo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/albedo.png',
    name: 'Albedo',
    text: 'Geo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/xingqiu.png',
    name: 'Xingqiu',
    text: 'Hydro ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/bennett.png',
    name: 'Bennett',
    text: 'Pyro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/qiqi.png',
    name: 'Qiqi',
    text: 'Cryo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Aloy.png',
    name: 'Aloy',
    text: 'Cryo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Ambor.png',
    name: 'Amber',
    text: 'Pyro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Beidou.png',
    name: 'Beidou',
    text: 'Electro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Chongyun.png',
    name: 'Chongyun',
    text: 'Cryo  ⭐⭐⭐⭐',
  },

  {
    urlImg: 'assets/UI_AvatarIcon_Diona.png',
    name: 'Diona',
    text: 'Cryo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Feiyan.png',
    name: 'Yanfei',
    text: 'Pyro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Fischl.png',
    name: 'Fischl',
    text: 'Electro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Gorou.png',
    name: 'Gorou',
    text: 'Geo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Kaeya.png',
    name: 'Kaeya',
    text: 'Cryo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Lisa.png',
    name: 'Lisa',
    text: 'Electro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Ningguang.png',
    name: 'Ningguang',
    text: 'Geo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Noel.png',
    name: 'Noele',
    text: 'Geo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_PlayerBoy.png',
    name: 'Traveller',
    text: 'All ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Qin.png',
    name: 'Jean',
    text: 'Anemo ⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Rosaria.png',
    name: 'Rosaria',
    text: 'Cryo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Sara.png',
    name: 'Sara',
    text: 'Electro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Sayu.png',
    name: 'Sayu',
    text: 'Anemo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Sucrose.png',
    name: 'Sucrose',
    text: 'Anemo  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Tohma.png',
    name: 'Thoma',
    text: 'Pyro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/UI_AvatarIcon_Xinyan.png',
    name: 'Xiniyan',
    text: 'Pyro  ⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/xiangling.png',
    name: 'Xiangling',
    text: 'Pyro  ⭐⭐⭐⭐',
  },
];
