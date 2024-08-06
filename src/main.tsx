import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App.tsx';
import { RoomsPage, ProfilePage, ConfigureRoomPage, SelectedRoomPage } from './pages';

const router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					index: true,
					element: <Navigate to="/profile" replace />,
				},
				{
					path: '/profile',
					element: <ProfilePage />,
				},
				{
					path: '/rooms',
					element: <RoomsPage />,
				},
				{
					path: '/rooms/:roomId',
					element: <SelectedRoomPage />,
				},
				{
					path: '/rooms/createNew',
					element: <ConfigureRoomPage />,
				},
			],
		},
	],
	{
		basename: '/rent-rooms',
	},
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
