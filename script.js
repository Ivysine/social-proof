function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
var areaOne = getSize(2, 4, 2)[0];
var volumeOne = getSize(2, 4, 2)[1];
