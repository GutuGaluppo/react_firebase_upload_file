import React from 'react'
import NewFolderForm from './NewFolderForm';
import { Link } from 'react-router-dom'

export default function Home({ folders }) {
	return (
		<>
			<section>
				{folders.map(folder => (
					<Link to={`/${folder.id}`}>
						<aside key={folder.name}>
							<img
								src={folder.images ? folder.images[0].url : ''} // folder.images[0].url takes the first image in the folder and uses as the folder img
								alt="album"
								width="200"
							/>
							<h3>{folder.name}</h3>
						</aside>
					</Link>
				))}
			</section>
			<NewFolderForm />
		</>
	)
}
