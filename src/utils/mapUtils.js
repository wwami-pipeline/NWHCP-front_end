function getbound(lat, lo) {
  const adjustDegree = 0.05;
  minLat -= adjustDegree;
  minLng -= adjustDegree;
  maxLat += adjustDegree;
  maxLng += adjustDegree;
  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ]
}

function filterAround(arr, bounds) {

}