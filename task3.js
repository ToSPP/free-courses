/* Task 3 */

var t1 = parseInt(process.argv[2]),
    t2 = parseInt(process.argv[3]);

var period = ["час", "минут", "секунд"];
var suffix = ["а", "ы", "ов"];

function answer(t1, t2) {
  var result = "", T, h, m, s;
  T  = t1 + t2;
  h  = Math.floor(T / 3600);
  m  = Math.floor((T - h * 3600) / 60);
  s  = (T - h * 3600) % 60;
  if (h > 0) result += h + " " + addSuffix(h, period[0]);
  if (h > 0 && m == 0) {
    result += " " + "0 " + period[1];
  } else if (m > 0) {
    result += " " + m + " " + addSuffix(m, period[1]);
  }
  if (s > 0) result += " " + s + " " + addSuffix(s, period[2]);

  return result;
}

if (t1 >= 1 && t2 <= 100000) {
    process.stdout.write(String(answer(t1, t2)));
  }

function addSuffix(num, def) {
  if (num == 1) {
    def = (def == period[0]) ? def : def + suffix[0];
  } else if (num > 1 && num < 5) {
    def = (def == period[0]) ? def + suffix[0] : def + suffix[1];
  } else {
    def = (def == period[0]) ? def + suffix[2] : def;
  }
  return def;
}
