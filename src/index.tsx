import './tailwind.css';
import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { HeroUIProvider } from '@heroui/react';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<BrowserRouter basename='/'>
			<HeroUIProvider>
				<App />
			</HeroUIProvider>
		</BrowserRouter>
	</React.StrictMode>
);
