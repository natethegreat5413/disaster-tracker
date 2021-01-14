const LocationInfoBox = ({ info }) => {
	console.log('info', info);
	return (
		<div className="location-info">
			<h2>Event Location Info</h2>
			<ul>
				<li>
					ID: <strong>{info.id}</strong>
				</li>
				<li>
					Title: <strong>{info.title}</strong>
				</li>
				<li>
					{info.description !== '' ? (
						<>
							Description: <strong>{info.description}</strong>
						</>
					) : null}
				</li>
			</ul>
		</div>
	);
};

export default LocationInfoBox;
