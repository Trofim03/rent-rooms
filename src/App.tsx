import { Outlet } from 'react-router-dom';
import './App.scss';
import { useTypedSelector } from './utils/useTypedSelector';
import { Layout, LoginPage } from './pages';

function App() {
	const { id } = useTypedSelector((store) => store.userReducer);

	const renderMainPage = () => {
		if (!id) {
			return <LoginPage />;
		}

		return (
			<Layout>
				<Outlet />
			</Layout>
		);
	};
	return <>{renderMainPage()}</>;
}

export default App;
