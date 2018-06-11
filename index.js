var EARTH_RADIUS = 6378137.0;    //单位M
var PI = Math.PI;

getRad(d) {
    return d * this.PI / 180.0;
  }
  getFlatternDistance(lat1, lng1, lat2, lng2) {//坐标距离算法（椭圆地球，两组经纬度数据）
    let f = this.getRad((lat1 + lat2) / 2);
    let g = this.getRad((lat1 - lat2) / 2);
    let l = this.getRad((lng1 - lng2) / 2);

    let sg = Math.sin(g);
    let sl = Math.sin(l);
    let sf = Math.sin(f);

    let s, c, w, r, d, h1, h2;
    let a = this.EARTH_RADIUS;
    let fl = 1 / 298.257;

    sg = sg * sg;
    sl = sl * sl;
    sf = sf * sf;

    s = sg * (1 - sl) + (1 - sf) * sl;
    c = (1 - sg) * (1 - sl) + sf * sl;

    w = Math.atan(Math.sqrt(s / c));
    r = Math.sqrt(s * c) / w;
    d = 2 * w * a;
    h1 = (3 * r - 1) / 2 / c;
    h2 = (3 * r + 1) / 2 / s;

    return ((d * (1 + fl * (h1 * sf * (1 - sg) - h2 * (1 - sf) * sg))) / 1000).toFixed(2);
  }
