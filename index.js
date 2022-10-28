
function geoFindMe() {

  const _status = document.querySelector('#status');
  const mapLink = document.querySelector('#map-link');

  mapLink.href = '';
  mapLink.textContent = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    _status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
  }


  function error() {
    _status.textContent = 'Unable to retrieve your location';
  }
  

    if (!navigator.geolocation) {
        _status.textContent = 'Geolocation is not supported by your browser';
    } else {
        _status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }

  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);
  