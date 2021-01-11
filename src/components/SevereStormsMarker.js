import { Icon } from '@iconify/react';
import cycloneIcon from '@iconify-icons/noto/cyclone';

const SevereStormsMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={cycloneIcon} className="cyclone-icon" />
		</div>
	);
};

export default SevereStormsMarker;
