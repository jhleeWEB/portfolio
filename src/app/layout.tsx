import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers';

export const metadata: Metadata = {
	title: 'LEE JOONG HOON Portfolio',
	description: 'FrontEnd Developer portfolio',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ko'>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
