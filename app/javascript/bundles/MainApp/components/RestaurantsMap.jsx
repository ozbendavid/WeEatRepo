import PropTypes from 'prop-types';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
));

export default class RestaurantsMap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="col-md-6 map">
      <MyMapComponent isMarkerShown={this.props.isMarkerShown}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: '100%' }}/>}
        containerElement={<div style={{ height: '450px' }}/>}
        mapElement={<div style={{ height: '100%' }}/>}/>
    </div>;
  }
}

RestaurantsMap.propTypes = {
  isMarkerShown: PropTypes.bool.isRequired,
};
