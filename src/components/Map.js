import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import VolcanoLocationMarker from './VolcanoLocationMarker';
import LocationInfoBox from './LocationInfoBox';
import SevereStormsMarker from './SevereStormsMarker';
import IcebergLocationMarker from './IcebergLocationMarker';

const Map = ({ eventData, center, zoom }) => {
	const [locationInfo, setLocationInfo] = useState(null);
	const markers = eventData.map((ev, index) => {
		if (ev.categories[0].id === 8) {
			return (
				<LocationMarker
					key={index}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description })}
				/>
			);
		} else if (ev.categories[0].id === 12 && ev.id !== 'EONET_354') {
			return (
				<VolcanoLocationMarker
					key={index}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description })}
				/>
			);
		} else if (ev.categories[0].id === 10) {
			return (
				<SevereStormsMarker
					key={index}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description })}
				/>
			);
		} else if (ev.categories[0].id === 15) {
			return (
				<IcebergLocationMarker
					key={index}
					lat={ev.geometries[0].coordinates[1]}
					lng={ev.geometries[0].coordinates[0]}
					onClick={() => setLocationInfo({ id: ev.id, title: ev.title, description: ev.description })}
				/>
			);
		} else {
			return null;
		}
	});
	// console.log(markers);
	return (
		<div className="map">
			<GoogleMapReact
				bootstrapURLKeys={{ key: 'AIzaSyCei6Efl5t3DrQRPsCescWZPi1NO1zjaBc' }}
				defaultCenter={center}
				defaultZoom={zoom}>
				{/* {<LocationMarker lat={center.lat} lng={center.lng} />}
				{<VolcanoLocationMarker lat={center.lat} lng={center.lng} />}
				{<SevereStormsMarker lat={center.lat} lng={center.lng} />} */}
				{markers}
			</GoogleMapReact>
			{locationInfo && <LocationInfoBox info={locationInfo} />}
		</div>
	);
};

Map.defaultProps = {
	center: {
		lat: 42.3265,
		lng: -122.8756
	},
	zoom: 6
};

export default Map;
