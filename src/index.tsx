import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { BrowserRouter } from 'react-router';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter basename='/'>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
