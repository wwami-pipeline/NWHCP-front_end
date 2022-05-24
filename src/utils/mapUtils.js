function getbound(lat, lo) {
  const adjustDegree = 0.05;
  const minLat = lat - adjustDegree;
  const minLng = lo - adjustDegree;
  const maxLat = lat + adjustDegree;
  const maxLng = lo + adjustDegree;
  return [
    [minLat, minLng],
    [maxLat, maxLng],
  ]
}

export {
  getbound
}