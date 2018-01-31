import PropTypes from 'prop-types';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const { InfoBox } = require('react-google-maps/lib/components/addons/InfoBox');

const GoogleAPIBaseUrl = 'https://maps.googleapis.com';
const GoogleAPIMapApi = '/maps/api/js';
const GoogleAPIMapKey = 'AIzaSyAL0WTUubtZszt-iIBfBU9ReVDQJu18eFs';
const GoogleAPIMapExtra = '&v=3.exp&libraries=geometry,drawing,places';
const GoogleAPIFullUrl = GoogleAPIBaseUrl + GoogleAPIMapApi + '?key=' + GoogleAPIMapKey + GoogleAPIMapExtra;

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.73, lng: -73.99 }} // New York !
  >
    {('location_latitude' in props.selectedLocation) &&
    <Marker position={{
      lat: parseFloat(props.selectedLocation.location_latitude),
      lng: parseFloat(props.selectedLocation.location_longitude),
    }}>
      <InfoBox>
        <div className="info-box-outer">
          <div className="info-box-inner">
            {props.selectedLocation.name}
          </div>
        </div>
      </InfoBox>
    </Marker>}
  </GoogleMap>,
));

export default class RestaurantsMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="col-md-6 map">
      <MyMapComponent selectedLocation={this.props.selectedRestaurant}
        googleMapURL={GoogleAPIFullUrl}
        loadingElement={<div className="full-height"/>}
        containerElement={<div className="map-container-element-height"/>}
        mapElement={<div className="full-height"/>}/>
    </div>;
  }
}

RestaurantsMap.propTypes = {
  selectedRestaurant: PropTypes.object.isRequired,
};
