import { Icon } from '@iconify/react';
import wildfireIcon from '@iconify/icons-mdi/fire-alert';

const LocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={wildfireIcon} className="location-icon" />
		</div>
	);
};

export default LocationMarker;
