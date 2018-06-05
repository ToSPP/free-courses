/*
var d = parseInt(process.argv[2]),
    m = String(process.argv[3]),
    y = parseInt(process.argv[4]);

var months = ["января",   "февраля", "марта",  "апреля",
              "мая",      "июня",    "июля",   "августа",
              "сентября", "октября", "ноября", "декабря"];

function answer(d, m, y) {
  var date_in = new Date(y, months.indexOf(m), d);
  var date_to = new Date(y, 11, 31);
  var m_sec   = date_to.getTime() - date_in.getTime();
  return m_sec / 1000 / 60 / 60 / 24;
}

if (d >= 1 && d <= 31   &&
    y >= 1 && y <= 2999 &&
    months.includes(m)) {
       process.stdout.write(String(answer(d, m, y)));
}
