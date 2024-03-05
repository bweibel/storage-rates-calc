import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_MAPS_API_KEY, RDM_YARD_LATLONG } from './utils/constants';
import { metersToMiles, scrollToNext } from './utils/functions';
import './AddressInput.css';


const AddressInput = ({ addressType, setDeliveryAddress, setDeliveryLatLng, setDeliveryDistance, setPickupDistance }) => {
    const [address, setAddress] = useState("");
    const [latLng, setLatLng] = useState(null);
    const [distance, setDistance] = useState(null);
    const autocompleteInputRef = useRef(null);

    useEffect(() => {
        // Reset states when address type changes
        setAddress("");
        setLatLng(null);
        setDistance(null);

        if (!autocompleteInputRef.current) return;
        const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInputRef.current);

        autocomplete.addListener("place_changed", () => {
            const selectedPlace = autocomplete.getPlace();

            if (selectedPlace.geometry) {
                const selectedAddress = selectedPlace.formatted_address;
                const selectedLatLng = selectedPlace.geometry.location.toJSON();
                
                // set local state
                setAddress(selectedAddress);
                setLatLng(selectedLatLng);
                
                // set parent state
                setDeliveryAddress(selectedAddress);
                setDeliveryLatLng(selectedLatLng);
                
                // Calculate distance to RDM_YARD_LATLONG
                const deliveryLatLng = new window.google.maps.LatLng(selectedLatLng.lat, selectedLatLng.lng);
                const yardLatLng = new window.google.maps.LatLng(RDM_YARD_LATLONG.lat, RDM_YARD_LATLONG.lng);

                const computedDistance = window.google.maps.geometry.spherical.computeDistanceBetween(deliveryLatLng, yardLatLng);
                calculateDrivingDistance(deliveryLatLng, yardLatLng, (e, distance) => {
                    console.log('distance:' + metersToMiles(distance));
                    const distanceInMiles = metersToMiles(distance);
                    setPickupDistance(distanceInMiles);
                    setDeliveryDistance(distanceInMiles);

                    if ( addressType == 'initial' ) {
                        scrollToNext("initialaddress");
                    } else {
                        scrollToNext("finaladdress");
                    }
                })
                
            }
        });

        return () => {
            // Remove listener on cleanup to avoid memory leaks
            // window.google.maps.event.clearInstanceListeners(autocompleteInputRef.current);
        };
    }, [addressType, setDeliveryAddress, setDeliveryLatLng, setDeliveryDistance, setPickupDistance]);

    function calculateDrivingDistance(deliveryLatLng, yardLatLng, callback) {
        var directionsService = new google.maps.DirectionsService();
    
        var request = {
            origin: deliveryLatLng,  // LatLng object
            destination: yardLatLng, // LatLng object
            travelMode: google.maps.TravelMode.DRIVING,
        };
    
        directionsService.route(request, function(response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                // Get the distance from the response
                var distance = response.routes[0].legs[0].distance.value; // Distance in meters
                callback(null, distance);
            } else {
                // Handle the error
                callback(new Error('Cannot retrieve driving distance: ' + status));
            }
        });
    }

    return (
        <div className="address-input has-shadow content-box" id={"address-" + addressType }>
            <h3>Please provide your { addressType } delivery address:</h3>
            <input
                ref={autocompleteInputRef}
                type="text"
                value={address}
                placeholder="Enter Delivery Address"
                onChange={(e) => setAddress(e.target.value)}
            />
            
            <div className="map">
            {latLng && 
                <iframe 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latLng.lat},${latLng.lng}`}>
                    </iframe>}
                    {distance && <p>Distance to Yard: {distance.toFixed(2)} miles</p>}

            </div>
        </div>
    );
}

export default AddressInput;
