import { Icon } from '@iconify/react';
import volcanoIcon from '@iconify-icons/emojione/volcano';

const VolcanoLocationMarker = ({ latitude, longitude, onClick }) => {
	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={volcanoIcon} className="volcano-icon" />
		</div>
	);
};

export default VolcanoLocationMarker;
