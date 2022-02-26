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
  res.render('artifacts', { art: art });
});

app.get('/dominios', function (req, res) {
  res.render('domains');
});

app.get('/armas', function (req, res) {
  res.render('weapons', { arm: arm });
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

const art = [
  {
    urlImg: 'assets/artefatos/1b456670817a6994d61ae5f4cdb12f5f.png',
    name: "Maiden's Distant Love",
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/3f4f4747dbf067c23b873fea0391a063.png',
    name: 'Flower of Accolades',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/5cd3583cd4408f0c67b6348315c97b9e.png',
    name: 'Troupe´s Dawnlight',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/7b0b3f2cf3703c68eef3d643fff1bd2c.png',
    name: 'Stainless Bloom',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/7e499f3ec2a4de6a0eaf1a5a9326e214.png',
    name: 'Royal Flora',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/8b1df8fbc45d599e83f0755e05a54d15.png',
    name: 'Thunderbird´s Mercy',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/94dbebc18b9fef0ac62c9bfa371dd391.png',
    name: 'Elixe´s Flower',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/346c5ce2e0aacda029de019b042e4c62.png',
    name: 'Martial Artist´s',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/526f8de5da0175925b2a555d0e581966.png',
    name: 'Thundersoothers´s Heart',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/633de5380538214c469a16478ae6744a.png',
    name: 'Scholar´s Bookmark',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/639d00d11e2924e7cb4f91cdf809a1c6.png',
    name: 'In Rememb. of Viridescent Field',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/814b0e373e8a14053ea63ca914bd2bc0.png',
    name: 'Bloodstained Flower of Iron',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/895a5ae515bc321d8e25a503bc00bcc4.png',
    name: 'Bloom Times',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/7057b07ea332c53e91ef9a7817b62734.png',
    name: 'Witch´s Flower of Blaze',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/7823c9dbac5ca7a8480fd7af41e91416.png',
    name: 'Gilded of Corsage',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/15666b8ffe6e364cfc8012faa8fe3a2f.png',
    name: 'Entangling Bloom',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/37668df47fa8f585dd62c3276af39716.png',
    name: 'Guardian´s Flower',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/093345e9ead99f3ada1e1fe9644865c6.png',
    name: 'Instructor´s Broach',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/1358809d3ba5853dfb7bcb1d5bcf98ae.png',
    name: 'Snowswept Memory',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/602922662fd586c4dac1ba2907c5601a.png',
    name: 'Lavawalker´s Resolution',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/a749d60211b023b7218966a24683e25b.png',
    name: 'Gladiator´s Nostalgia',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/b5ebbc6015371e23871a1008061a9446.png',
    name: 'Magnificent Tsuba',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/b10ea1126249d384b218f8b13f7a866c.png',
    name: 'Sea-Dyed Blossom',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/be82aedb4ee91cfe729e7f6205604073.png',
    name: 'Tiny Miracle´s Flower',
    text: '⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/c47df6f7110641d38c49cb95136a9a1c.png',
    name: 'Berserker',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/c839d95c0aa5f49e6f4a56cbb1504a43.png',
    name: 'Creviced Cliff',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/cfa9176814c27358ad2198870ea7be09.png',
    name: 'Gamblre´s Brooch',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/artefatos/d3e18668eed9de1b3b9b3e896592a766.png',
    name: 'Summer Nights Bloom',
    text: '⭐⭐⭐⭐⭐',
  },
];

const arm = [
  {
    urlImg: 'assets/armas/7f0645c25797d29dda644f9201ef6a14.png',
    name: "Wavebreaker's Fin",
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/18a83b4fc82010184ebc3bb66f6b7f3e.png',
    name: 'Dragonspine Spear',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/29c3153e4d353feee31e0e6b5754785c.png',
    name: 'The Widsith',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/42ca4a5cbddeac83aa46c8dc7c8b747a.png',
    name: 'Sacrificial Bow',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/58dd1ba4de5bb400a1731eee0eec7ac7.png',
    name: "Lion's Roar",
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/85f1270094e7ee9f0b2f5948a89f2072.png',
    name: 'Rainslasher',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/90f85e2d7bcbd55077c6a0892d1c888b.png',
    name: 'Skyward Spine',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/4646553dfc56a004a8cd840cfdc744fc.png',
    name: 'Lithic Spear',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/82603685c4a728b9dfb3bf92d8f8c22c.png',
    name: 'The Flute',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/74559206796cfd121045a79b117e6e92.png',
    name: 'Eye of Perception',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/a4ac2de60b02f7a6724df85930daef9d.png',
    name: 'The Stringless',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/a1354a633aefd673c20d2aaa66608aa5.png',
    name: 'Amenoma Kageuchi',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/b6a65c0517efe2ae0460988802926669.png',
    name: 'Sacrificial Fragments',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/b9bf4d5f8c589f9e0ded039bd9195ee9.png',
    name: 'Cinnabar Spindle',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/bc868884735ed73f078c8e57f11d1d14.png',
    name: 'Skyward Pride',
    text: '⭐⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/c0e7d8a6d6f01c38fc8c9591aca2bf51.png',
    name: 'Blackcliff Pole',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/c3bf21274c1d5f2044236c6145cc8eb2.png',
    name: 'Snow-Tombed Starsilver',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/d4e1267e11f7127b62ee4522a27cb4ac.png',
    name: 'Katsuragikiri Nagamasa',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/d446f3c24e2ca7666685a3c3951c488c.png',
    name: 'Favonius Codex',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/e73a8644c1528d484099f373c4615b9c.png',
    name: 'Blackcliff Longsword',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/efcc16460f62cf84212d10958ef93fbc.png',
    name: 'Oathsworn Eye',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/f7536e2f4b120f4bb75e0633107fce10.png',
    name: 'Favonius Warbow',
    text: '⭐⭐⭐⭐',
  },
  {
    urlImg: 'assets/armas/UI_EquipIcon_Sword_Morax.png',
    name: 'Primordial Jade Cutter',
    text: '⭐⭐⭐⭐⭐',
  },
];
