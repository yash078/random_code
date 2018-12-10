function isSelfDescriping(x) {
  sum = [];
  k = x.toString().split("");
  k = k.map((x) => Number(x));
  numLength = k.length;
  tally = k.reduce((tally, x) => (tally || 0) + x);
  if (tally != numLength || Math.max(k) > numLength) {
    return false;
  }
  sum = k.map(x => 0);
  for (var j = 0; j < numLength; j++) {
    sum[k[j]] = (sum[k[j]] || 0) + 1;
  }
  sum = sum.join("");
  k = k.join("");
  return sum == k;
}


start = Date.now();
for (var i = 0; i < 33000000; i++) {
  if (isSelfDescriping(i)) {
    console.log(i, (Date.now() - start) / 1000);
  }
}