import { useEffect, useState } from 'react';

const useDevice = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
		if (isMobile) {
			// mobile
			setIsMobile(true);
		} else {
			// desktop
			setIsMobile(false);
		}
	}, []);

	return isMobile;
};

export default useDevice;
