import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router';
import './tailwind.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<BrowserRouter basename='/'>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
