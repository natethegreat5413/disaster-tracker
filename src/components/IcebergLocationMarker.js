import { Icon } from '@iconify/react';
import floatingIceBroken from '@iconify-icons/openmoji/floating-ice-broken';
import iceShelfMelting from '@iconify-icons/openmoji/ice-shelf-melting';
import icebergIcon from '@iconify-icons/openmoji/iceberg';

const IcebergLocationMarker = ({ lat, lng, onClick }) => {
	return (
		<div className="location-icon" onClick={onClick}>
			<Icon icon={icebergIcon} className="iceberg" />
		</div>
	);
};

export default IcebergLocationMarker;
