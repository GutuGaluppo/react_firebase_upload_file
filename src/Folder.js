import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import NewPhoto from './NewPhoto';
import { app } from './base'


const db = app.firestore()

export default function Folder() {
	const [images, setImages] = useState([])
	const [folderName, setFolderName] = useState('')

	const match = useRouteMatch(`/:folder`)
	const { folder } = match.params

	useEffect(() => {
		const unmount = db.collection('folder')
			.doc(folder)
			.onSnapshot((doc) => {
				setImages(doc.data().images || [])
				setFolderName(doc.data().name)
			})
		return unmount
	})

	return (
		<>
			<div>
				<h1>{folderName}</h1>
				<div className="list">
					<ul>
						{images.map(image => (
							<li key={image.name}>
								<p>{image.name}</p>
								<img src={image.url} alt="album" width="60" />
							</li>
						))}
					</ul>
				</div>
			</div>
			<NewPhoto currentFolder={folder} />
		</>
	)
}
