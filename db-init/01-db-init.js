db.createUser({
  user: "cass",
  pwd: "hunter2",
  roles: [
    {
      role: "readWrite",
      db: "cass",
    },
  ],
});

db.courses.insertMany([{
  "_id": {
    "$oid": "5eddd2a57f5e324690576601"
  },
  "subject": "CS",
  "number": 160,
  "title": "Intro To Comp Sci",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db79ff"
  },
  "students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576602"
  },
  "subject": "CS",
  "number": 161,
  "title": "Intro To Comp Sci I",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db79ff"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576603"
  },
  "subject": "CS",
  "number": 162,
  "title": "Intro To Comp Sci II",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db79ff"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576604"
  },
  "subject": "CS",
  "number": 261,
  "title": "Data Structures",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a00"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576605"
  },
  "subject": "CS",
  "number": 271,
  "title": "Computer Architecture and Assembly Language",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a01"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576606"
  },
  "subject": "CS",
  "number": 290,
  "title": "Web Development",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a00"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576607"
  },
  "subject": "CS",
  "number": 325,
  "title": "Analysis of Algorithms",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a02"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576608"
  },
  "subject": "CS",
  "number": 344,
  "title": "Operating Systems I",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a03"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e324690576609"
  },
  "subject": "CS",
  "number": 372,
  "title": "Computer Networks",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a01"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e32469057660a"
  },
  "subject": "CS",
  "number": 444,
  "title": "Operating Systems II",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a04"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e32469057660b"
  },
  "subject": "CS",
  "number": 475,
  "title": "Intro To Parallel Programming",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a05"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e32469057660c"
  },
  "subject": "CS",
  "number": 492,
  "title": "Mobile Application Development",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a00"
  },"students":[],
  "assignments":[]
},{
  "_id": {
    "$oid": "5eddd2a57f5e32469057660d"
  },
  "subject": "CS",
  "number": 493,
  "title": "Cloud Application Development",
  "term": "sp19",
  "instructorId": {
    "$oid": "5ee024d213e6b43630db7a04"
  },"students":[],
  "assignments":[]
}]);

db.users.insertMany([{
  "_id": {
    "$oid": "5ee024d213e6b43630db799b"
  },
  "name": "Kara Furminger",
  "email": "kfurminger0@weather.com",
  "password": "iyIt53VLenl",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db799c"
  },
  "name": "Dunn Dunbobbin",
  "email": "ddunbobbin1@hexun.com",
  "password": "wycnzz4kFJv",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db799d"
  },
  "name": "Josefina Truin",
  "email": "jtruin2@accuweather.com",
  "password": "ByifFMfdoSv",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db799e"
  },
  "name": "Ailis Huegett",
  "email": "ahuegett3@sogou.com",
  "password": "hXcQgkRmHSVD",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db799f"
  },
  "name": "Dedie Howship",
  "email": "dhowship4@eepurl.com",
  "password": "YqKYL3rvr",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a0"
  },
  "name": "Martelle Peddar",
  "email": "mpeddar5@usgs.gov",
  "password": "zBG8Blkc5",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a1"
  },
  "name": "Ellyn Pilipyak",
  "email": "epilipyak6@t-online.de",
  "password": "rQwlV0Wm9",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a2"
  },
  "name": "Bendicty Thridgould",
  "email": "bthridgould7@time.com",
  "password": "Rn03DTj2o2A",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a3"
  },
  "name": "Mario Portsmouth",
  "email": "mportsmouth8@marriott.com",
  "password": "Kgkq2tx1j",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a4"
  },
  "name": "Alleen Ranklin",
  "email": "aranklin9@hp.com",
  "password": "TELvKys",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a5"
  },
  "name": "Lusa Colleford",
  "email": "lcolleforda@e-recht24.de",
  "password": "c2rMQ2LjD",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a6"
  },
  "name": "Colver Jovicevic",
  "email": "cjovicevicb@dmoz.org",
  "password": "wavEodk",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a7"
  },
  "name": "Marshall Baudacci",
  "email": "mbaudaccic@sciencedirect.com",
  "password": "yVkaaGC",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a8"
  },
  "name": "Mickie Mayow",
  "email": "mmayowd@loc.gov",
  "password": "1g0Nhanm",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79a9"
  },
  "name": "Bevan Imos",
  "email": "bimose@umich.edu",
  "password": "0dioFS3wBc",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79aa"
  },
  "name": "Alexia Jonczyk",
  "email": "ajonczykf@psu.edu",
  "password": "vSqNek4DpeCd",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ab"
  },
  "name": "Angelia Climance",
  "email": "aclimanceg@dyndns.org",
  "password": "GkxemN7U8u",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ac"
  },
  "name": "Joyce O' Donohue",
  "email": "joh@google.fr",
  "password": "fiU5yE",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ad"
  },
  "name": "Rodrigo Baldacco",
  "email": "rbaldaccoi@woothemes.com",
  "password": "yprcaIEBAZ8",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ae"
  },
  "name": "Stanly Crease",
  "email": "screasej@hugedomains.com",
  "password": "pbwtqQoSV",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79af"
  },
  "name": "Mari Silver",
  "email": "msilverk@bing.com",
  "password": "YHhD0mTf05",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b0"
  },
  "name": "Amata Vivyan",
  "email": "avivyanl@nhs.uk",
  "password": "AE96dLQ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b1"
  },
  "name": "Una Cauley",
  "email": "ucauleym@tinyurl.com",
  "password": "tO0QecQvC",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b2"
  },
  "name": "Kellina D'Alesco",
  "email": "kdalescon@shutterfly.com",
  "password": "A1nGJpdeJ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b3"
  },
  "name": "Levin Dumsday",
  "email": "ldumsdayo@vinaora.com",
  "password": "0CzNxKkK7xRO",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b4"
  },
  "name": "Laurice Rainbird",
  "email": "lrainbirdp@ibm.com",
  "password": "pLxbOH",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b5"
  },
  "name": "Bonni Beeble",
  "email": "bbeebleq@shinystat.com",
  "password": "BTy7EVFYopcq",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b6"
  },
  "name": "Joaquin Stiffkins",
  "email": "jstiffkinsr@princeton.edu",
  "password": "1wwc9yr",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b7"
  },
  "name": "Timoteo Ladson",
  "email": "tladsons@mit.edu",
  "password": "KAy4jkZod",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b8"
  },
  "name": "Davidson Bille",
  "email": "dbillet@marriott.com",
  "password": "3Lefov",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79b9"
  },
  "name": "Bryan Neville",
  "email": "bnevilleu@hao123.com",
  "password": "qikg4C5f",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ba"
  },
  "name": "Sula Flaonier",
  "email": "sflaonierv@census.gov",
  "password": "ceAkjAo3xi",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79bb"
  },
  "name": "Antonetta Carluccio",
  "email": "acarlucciow@reddit.com",
  "password": "g7MxSmCc",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79bc"
  },
  "name": "Shelba MacGaffey",
  "email": "smacgaffeyx@blogger.com",
  "password": "1zdi0bSG",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79bd"
  },
  "name": "Hamlin Yokley",
  "email": "hyokleyy@last.fm",
  "password": "LYfVoKhNm64l",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79be"
  },
  "name": "Ludovika Gunther",
  "email": "lguntherz@businesswire.com",
  "password": "ZwWrkGnPaZ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79bf"
  },
  "name": "Andriana Gallier",
  "email": "agallier10@theguardian.com",
  "password": "vrrppTcnj8u",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c0"
  },
  "name": "Finlay Marczyk",
  "email": "fmarczyk11@jimdo.com",
  "password": "WOey1LHZQN",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c1"
  },
  "name": "Rosemarie Kiessel",
  "email": "rkiessel12@yandex.ru",
  "password": "OflXZo0",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c2"
  },
  "name": "Ernst Ilson",
  "email": "eilson13@apache.org",
  "password": "Eehhf8bKqDB2",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c3"
  },
  "name": "Ezekiel Goulden",
  "email": "egoulden14@cbc.ca",
  "password": "P8NVajqT",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c4"
  },
  "name": "Lindy Minerdo",
  "email": "lminerdo15@time.com",
  "password": "aLod43",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c5"
  },
  "name": "Sherm Scrimgeour",
  "email": "sscrimgeour16@360.cn",
  "password": "2m4HJKzbBc",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c6"
  },
  "name": "Emilia Huleatt",
  "email": "ehuleatt17@un.org",
  "password": "EPpcyiKEJrC",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c7"
  },
  "name": "Velma McGeady",
  "email": "vmcgeady18@arizona.edu",
  "password": "5VWAmeElUtw",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c8"
  },
  "name": "Andra Cawsey",
  "email": "acawsey19@stumbleupon.com",
  "password": "dkbjvGvZ9S7Z",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79c9"
  },
  "name": "Ulrike Cartmale",
  "email": "ucartmale1a@whitehouse.gov",
  "password": "WOLeRPhQAdX0",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ca"
  },
  "name": "Bogart Maddick",
  "email": "bmaddick1b@friendfeed.com",
  "password": "oCPZgTahQJu",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79cb"
  },
  "name": "Raine Pirson",
  "email": "rpirson1c@flickr.com",
  "password": "Wuck1NgvJO",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79cc"
  },
  "name": "Miran Arkow",
  "email": "markow1d@nytimes.com",
  "password": "Y56Jf4",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79cd"
  },
  "name": "Suzy Annable",
  "email": "sannable1e@dyndns.org",
  "password": "k7dyVngei2p",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ce"
  },
  "name": "Sydel Hebner",
  "email": "shebner1f@moonfruit.com",
  "password": "l8DJk2tG",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79cf"
  },
  "name": "Wynn Middlemist",
  "email": "wmiddlemist1g@cornell.edu",
  "password": "AH5xAd9TJ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d0"
  },
  "name": "Maddi Schulze",
  "email": "mschulze1h@ameblo.jp",
  "password": "ARbOlr3",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d1"
  },
  "name": "Row Pym",
  "email": "rpym1i@360.cn",
  "password": "i51APueif",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d2"
  },
  "name": "Rebeca Gillow",
  "email": "rgillow1j@xinhuanet.com",
  "password": "SJqtess8RsiJ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d3"
  },
  "name": "Jobye Chiplin",
  "email": "jchiplin1k@moonfruit.com",
  "password": "TrXRgRg",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d4"
  },
  "name": "Lula Daybell",
  "email": "ldaybell1l@va.gov",
  "password": "9cvGARX",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d5"
  },
  "name": "Kinny Wayte",
  "email": "kwayte1m@about.me",
  "password": "zLg7ZGeI1L",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d6"
  },
  "name": "Immanuel Bolles",
  "email": "ibolles1n@craigslist.org",
  "password": "LLZhS8Nf",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d7"
  },
  "name": "Wileen Feechan",
  "email": "wfeechan1o@latimes.com",
  "password": "AOEIrZ9Fs",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d8"
  },
  "name": "Jone Priddy",
  "email": "jpriddy1p@virginia.edu",
  "password": "4aCzsA",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79d9"
  },
  "name": "Paxon Lound",
  "email": "plound1q@vinaora.com",
  "password": "teWo6wTSEz",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79da"
  },
  "name": "Jemie Spellacy",
  "email": "jspellacy1r@usa.gov",
  "password": "K0gb6qF",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79db"
  },
  "name": "Granthem Roggieri",
  "email": "groggieri1s@51.la",
  "password": "2wVrP28r2Un",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79dc"
  },
  "name": "Ameline Dunbabin",
  "email": "adunbabin1t@taobao.com",
  "password": "ISgdGde7eMEk",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79dd"
  },
  "name": "Neddie Shenfisch",
  "email": "nshenfisch1u@newsvine.com",
  "password": "MIoYx0qn",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79de"
  },
  "name": "Charlean Phippard",
  "email": "cphippard1v@disqus.com",
  "password": "RMh6uLdnb",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79df"
  },
  "name": "Etty Slesser",
  "email": "eslesser1w@bloglines.com",
  "password": "QaIhj6LzdxLL",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e0"
  },
  "name": "Daniele Raoul",
  "email": "draoul1x@hhs.gov",
  "password": "5mbmn21sKEE",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e1"
  },
  "name": "Dian Ruggles",
  "email": "druggles1y@spotify.com",
  "password": "W75LIp",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e2"
  },
  "name": "Buckie Litchfield",
  "email": "blitchfield1z@hhs.gov",
  "password": "greMBZAAJ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e3"
  },
  "name": "Kurtis Mead",
  "email": "kmead20@slate.com",
  "password": "oqHybcdP8r",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e4"
  },
  "name": "Elonore Mallabar",
  "email": "emallabar21@nyu.edu",
  "password": "NTkPqKT",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e5"
  },
  "name": "Malia Calleja",
  "email": "mcalleja22@about.com",
  "password": "1tTvmzTX",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e6"
  },
  "name": "Quill Pittaway",
  "email": "qpittaway23@jugem.jp",
  "password": "nTKOomq",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e7"
  },
  "name": "Donnajean McKinnon",
  "email": "dmckinnon24@go.com",
  "password": "hsVdTj25C",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e8"
  },
  "name": "Tallou Seadon",
  "email": "tseadon25@state.tx.us",
  "password": "0KIrd73",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79e9"
  },
  "name": "Barbra Panas",
  "email": "bpanas26@answers.com",
  "password": "TllOuZZJW",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ea"
  },
  "name": "Etta McIlrath",
  "email": "emcilrath27@ed.gov",
  "password": "Uy2M3Poru",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79eb"
  },
  "name": "Pattin Jakoub",
  "email": "pjakoub28@blog.com",
  "password": "wL34UnM",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ec"
  },
  "name": "Gail Diche",
  "email": "gdiche29@guardian.co.uk",
  "password": "haaF4iGyZH",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ed"
  },
  "name": "Jacklyn Gormally",
  "email": "jgormally2a@feedburner.com",
  "password": "vd9FVo",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ee"
  },
  "name": "Caril Guillem",
  "email": "cguillem2b@pinterest.com",
  "password": "T3ncHCULbKY",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ef"
  },
  "name": "Carlin Vedeneev",
  "email": "cvedeneev2c@yahoo.co.jp",
  "password": "MovTPCb7Cq",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f0"
  },
  "name": "Boycie Southerton",
  "email": "bsoutherton2d@acquirethisname.com",
  "password": "9zbEKmp",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f1"
  },
  "name": "Eberhard Olenov",
  "email": "eolenov2e@tinyurl.com",
  "password": "3r9A09FizQ",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f2"
  },
  "name": "Farley Shakelady",
  "email": "fshakelady2f@wordpress.org",
  "password": "VHvYceOL9VKx",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f3"
  },
  "name": "Lindy Mathouse",
  "email": "lmathouse2g@symantec.com",
  "password": "wsYEuJo4rWu",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f4"
  },
  "name": "Trix Lanston",
  "email": "tlanston2h@nbcnews.com",
  "password": "w6k3WW6F",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f5"
  },
  "name": "Cher Carletto",
  "email": "ccarletto2i@utexas.edu",
  "password": "HAR5nIz",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f6"
  },
  "name": "Maribeth Grzelak",
  "email": "mgrzelak2j@netvibes.com",
  "password": "TgQl3f",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f7"
  },
  "name": "Charyl McTeague",
  "email": "cmcteague2k@vkontakte.ru",
  "password": "0gxIcMT0oR",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f8"
  },
  "name": "Dare Sharrocks",
  "email": "dsharrocks2l@livejournal.com",
  "password": "A5J3NF",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79f9"
  },
  "name": "Bryant Trubshaw",
  "email": "btrubshaw2m@washington.edu",
  "password": "oet1QT7tg",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79fa"
  },
  "name": "Rodrick Crix",
  "email": "rcrix2n@addtoany.com",
  "password": "SJWdluAC33i",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79fb"
  },
  "name": "Gerry Short",
  "email": "gshort2o@tumblr.com",
  "password": "DaOex1p",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79fc"
  },
  "name": "Karalee Tire",
  "email": "ktire2p@gnu.org",
  "password": "VG8FXK",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79fd"
  },
  "name": "Timmy Fontelles",
  "email": "tfontelles2q@ocn.ne.jp",
  "password": "Rsyxd2MZtLM",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79fe"
  },
  "name": "Elihu Lere",
  "email": "elere2r@pen.io",
  "password": "iSD5R1g2ZI",
  "role": "student"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db79ff"
  },
  "name": "Haven Maultby",
  "email": "hmaultby0@google.co.uk",
  "password": "YE7tRYw",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a00"
  },
  "name": "Gusta Casson",
  "email": "gcasson1@reuters.com",
  "password": "xm6k5RvJz",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a01"
  },
  "name": "Arly Brockwell",
  "email": "abrockwell2@wsj.com",
  "password": "crpEUF",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a02"
  },
  "name": "Jeannine Bartczak",
  "email": "jbartczak3@imgur.com",
  "password": "huTOLVto",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a03"
  },
  "name": "Jerrilyn Peare",
  "email": "jpeare4@hostgator.com",
  "password": "IEKdZQWYd2YQ",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a04"
  },
  "name": "Catha Classen",
  "email": "cclassen5@about.me",
  "password": "SqD8TkhGyO",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a05"
  },
  "name": "Herc Gorriessen",
  "email": "hgorriessen6@state.gov",
  "password": "f83JXt2FJGM",
  "role": "instructor"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a06"
  },
  "name": "Hildy McMurthy",
  "email": "hmcmurthy0@shinystat.com",
  "password": "z1bioG1ae",
  "role": "admin"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a07"
  },
  "name": "Odessa Bris",
  "email": "obris1@indiatimes.com",
  "password": "v4eKsZbXgH",
  "role": "admin"
},{
  "_id": {
    "$oid": "5ee024d213e6b43630db7a08"
  },
  "name": "Willow Pulley",
  "email": "wpulley2@about.me",
  "password": "IaaUPbwzETf",
  "role": "admin"
}]);

db.assignments.insertMany([{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a09"
  },
  "title": "Assignment 1",
  "points": 87,
  "due": "2020-09-13T22:15:37Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a0a"
  },
  "title": "Assignment 2",
  "points": 89,
  "due": "2020-09-17T21:03:26Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a0b"
  },
  "title": "Assignment 3",
  "points": 30,
  "due": "2020-07-06T11:51:01Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a0c"
  },
  "title": "Assignment 4",
  "points": 81,
  "due": "2020-08-09T13:29:49Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a0d"
  },
  "title": "Assignment 5",
  "points": 69,
  "due": "2020-08-16T04:26:55Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a0e"
  },
  "title": "Assignment 6",
  "points": 91,
  "due": "2020-07-23T03:46:09Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a0f"
  },
  "title": "Assignment 7",
  "points": 96,
  "due": "2020-07-18T19:31:19Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a10"
  },
  "title": "Assignment 8",
  "points": 10,
  "due": "2020-09-18T13:35:53Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a11"
  },
  "title": "Assignment 9",
  "points": 13,
  "due": "2020-08-29T03:46:42Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a12"
  },
  "title": "Assignment 10",
  "points": 58,
  "due": "2020-08-29T18:11:29Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a13"
  },
  "title": "Assignment 1",
  "points": 88,
  "due": "2020-09-26T05:24:34Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a14"
  },
  "title": "Assignment 2",
  "points": 95,
  "due": "2020-08-21T11:28:01Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a15"
  },
  "title": "Assignment 3",
  "points": 92,
  "due": "2020-07-16T23:24:29Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a16"
  },
  "title": "Assignment 4",
  "points": 66,
  "due": "2020-08-08T03:14:23Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a17"
  },
  "title": "Assignment 5",
  "points": 15,
  "due": "2020-07-19T05:56:11Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a18"
  },
  "title": "Assignment 6",
  "points": 66,
  "due": "2020-08-09T10:23:29Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a19"
  },
  "title": "Assignment 7",
  "points": 36,
  "due": "2020-07-22T01:35:16Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a1a"
  },
  "title": "Assignment 8",
  "points": 88,
  "due": "2020-08-31T21:42:43Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a1b"
  },
  "title": "Assignment 9",
  "points": 11,
  "due": "2020-07-25T08:57:47Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a1c"
  },
  "title": "Assignment 10",
  "points": 24,
  "due": "2020-09-25T14:04:02Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a1d"
  },
  "title": "Assignment 1",
  "points": 68,
  "due": "2020-08-29T15:47:28Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a1e"
  },
  "title": "Assignment 2",
  "points": 73,
  "due": "2020-09-22T21:04:08Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a1f"
  },
  "title": "Assignment 3",
  "points": 63,
  "due": "2020-07-19T09:16:36Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a20"
  },
  "title": "Assignment 4",
  "points": 14,
  "due": "2020-07-22T06:23:27Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a21"
  },
  "title": "Assignment 5",
  "points": 50,
  "due": "2020-07-18T18:35:13Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a22"
  },
  "title": "Assignment 6",
  "points": 84,
  "due": "2020-07-31T21:47:29Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a23"
  },
  "title": "Assignment 7",
  "points": 88,
  "due": "2020-09-14T05:13:18Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a24"
  },
  "title": "Assignment 8",
  "points": 30,
  "due": "2020-07-10T20:00:16Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a25"
  },
  "title": "Assignment 9",
  "points": 61,
  "due": "2020-09-05T11:13:50Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a26"
  },
  "title": "Assignment 10",
  "points": 47,
  "due": "2020-07-05T07:41:19Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a27"
  },
  "title": "Homework 1",
  "points": 14,
  "due": "2020-08-23T02:32:27Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a28"
  },
  "title": "Homework 2",
  "points": 52,
  "due": "2020-08-09T10:57:26Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a29"
  },
  "title": "Homework 3",
  "points": 39,
  "due": "2020-07-10T08:29:41Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a2a"
  },
  "title": "Homework 4",
  "points": 73,
  "due": "2020-09-20T23:55:19Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a2b"
  },
  "title": "Homework 5",
  "points": 8,
  "due": "2020-07-25T00:22:34Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a2c"
  },
  "title": "Homework 6",
  "points": 83,
  "due": "2020-08-18T01:31:09Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a2d"
  },
  "title": "Homework 7",
  "points": 19,
  "due": "2020-08-07T10:46:22Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a2e"
  },
  "title": "Homework 8",
  "points": 72,
  "due": "2020-07-22T09:49:53Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a2f"
  },
  "title": "Homework 9",
  "points": 57,
  "due": "2020-08-17T12:53:56Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a30"
  },
  "title": "Homework 10",
  "points": 43,
  "due": "2020-07-18T15:51:54Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a31"
  },
  "title": "Homework 1",
  "points": 76,
  "due": "2020-08-30T09:53:54Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a32"
  },
  "title": "Homework 2",
  "points": 16,
  "due": "2020-09-29T07:42:39Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a33"
  },
  "title": "Homework 3",
  "points": 47,
  "due": "2020-09-27T08:10:29Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a34"
  },
  "title": "Homework 4",
  "points": 68,
  "due": "2020-07-24T12:58:20Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a35"
  },
  "title": "Homework 5",
  "points": 45,
  "due": "2020-08-02T06:05:26Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a36"
  },
  "title": "Homework 6",
  "points": 53,
  "due": "2020-08-22T16:49:14Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a37"
  },
  "title": "Homework 7",
  "points": 77,
  "due": "2020-07-10T11:46:13Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a38"
  },
  "title": "Homework 8",
  "points": 63,
  "due": "2020-08-28T09:03:53Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a39"
  },
  "title": "Homework 9",
  "points": 81,
  "due": "2020-08-04T09:38:24Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a3a"
  },
  "title": "Homework 10",
  "points": 10,
  "due": "2020-09-22T02:13:41Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a3b"
  },
  "title": "Project 1",
  "points": 62,
  "due": "2020-09-24T07:12:08Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a3c"
  },
  "title": "Project 2",
  "points": 78,
  "due": "2020-07-18T19:22:44Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a3d"
  },
  "title": "Project 3",
  "points": 12,
  "due": "2020-09-18T13:09:32Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a3e"
  },
  "title": "Project 4",
  "points": 9,
  "due": "2020-09-02T02:33:17Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a3f"
  },
  "title": "Project 5",
  "points": 22,
  "due": "2020-08-17T15:31:22Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a40"
  },
  "title": "Project 6",
  "points": 64,
  "due": "2020-07-12T12:36:23Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a41"
  },
  "title": "Project 7",
  "points": 79,
  "due": "2020-07-01T20:28:45Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a42"
  },
  "title": "Project 8",
  "points": 97,
  "due": "2020-08-07T20:48:46Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a43"
  },
  "title": "Project 9",
  "points": 29,
  "due": "2020-08-12T10:23:07Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a44"
  },
  "title": "Project 10",
  "points": 62,
  "due": "2020-07-10T02:41:28Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a45"
  },
  "title": "Demo 1",
  "points": 10,
  "due": "2020-07-19T10:21:48Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a46"
  },
  "title": "Demo 2",
  "points": 27,
  "due": "2020-08-10T04:25:43Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a47"
  },
  "title": "Demo 3",
  "points": 59,
  "due": "2020-08-31T09:28:52Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a48"
  },
  "title": "Demo 4",
  "points": 41,
  "due": "2020-09-23T04:07:36Z"
},{
  "_id": {
    "$oid": "5ee13eb213e6b43630db7a49"
  },
  "title": "Demo 5",
  "points": 70,
  "due": "2020-08-04T19:17:58Z"
}]);