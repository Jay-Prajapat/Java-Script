function myMap() {
  const ss_office = { lat: 23.028217245452694, lng: 72.49937209773258 };
  var mapOptions = { zoom: 17.56, center: ss_office };
  const googlemap = new google.maps.Map(
    document.getElementById("googleMap"),
    mapOptions
  );
  var marker = new google.maps.Marker({
    position: ss_office,
    map: googlemap,
  });
}
const cursor = document.querySelector(".cursorPointer");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});
