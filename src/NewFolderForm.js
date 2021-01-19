import React, { useState } from 'react'
import { app } from './base'

const db = app.firestore()

export default function NewFolderForm() {

	const [folderName, setFolderName] = useState('')

	const onFolderNameChange = e => {
		setFolderName(e.target.value)
	}

	const createFolder = () => {
		if (!folderName) { return }
		db.collection("folder").doc(folderName).set({
			name: folderName
		})
		setFolderName("")
	}

	return (
		<>
			<input
				type="text"
				value={folderName}
				onChange={onFolderNameChange}
			/>
			<button onClick={createFolder}>Create Folder</button>
		</>
	)
}
