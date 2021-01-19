import { useState, useEffect } from 'react'
import './App.css';
import { app } from './base'
import { Route, Switch } from 'react-router-dom';
import Folder from './Folder';
import Home from './Home';
import NavBar from './NavBar';

const db = app.firestore()

function App() {
	const [folders, setFolders] = useState([])

	useEffect(() => {
		const unmount = db.collection('folder').onSnapshot((snapshot) => {
			const tempFolder = []
			snapshot.forEach(doc => {
				tempFolder.push({ ...doc.data(), id: doc.id }) // distructoring to get the folder id
			})
			setFolders(tempFolder)
		})
		return unmount
	}, [])

	return (
		<>
			<NavBar />
			<div className="content">
				<Switch>
					<Route exact path="/" render={() => <Home folders={folders} />} />
					<Route path="/:folder" component={Folder} />
				</Switch>
			</div>
		</>
	);
}

export default App;
