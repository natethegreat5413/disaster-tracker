import { Icon } from '@iconify/react';
import carEmergency from '@iconify/icons-mdi/car-emergency';

const Header = () => {
	return (
		<header className="header">
			<h1>
				<Icon icon={carEmergency} className="header-icon" /> Disaster Tracker
			</h1>
		</header>
	);
};

export default Header;
