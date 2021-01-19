import React, { useState } from 'react'
import firebase from 'firebase'
import { app } from './base'

const db = app.firestore()
const storage = app.storage()

export default function NewPhoto({ currentFolder }) {

	const [file, setFile] = useState(null)

	const onFileChange = e => {
		setFile(e.target.files[0])
	}

	const onUpload = async () => {
		const storageRef = storage.ref()
		const fileRef = storageRef.child(file.name)
		await fileRef.put(file)
		db.collection("folder").doc(currentFolder).update({
			images: firebase.firestore.FieldValue.arrayUnion({
				name: file.name,
				url: await fileRef.getDownloadURL()
			})
		})
	}

	const hiddenFileInput = React.useRef(null);

	const handleClick = event => {
		hiddenFileInput.current.click();
	}

	return (
		<>
			<input
				type="file"
				accept=".jpeg, .pdf, .png"
				style={{ display: 'none' }}
				ref={hiddenFileInput}
				onChange={onFileChange}
			/>

			<button onClick={handleClick} width="20%">Choose file</button>

			<button onClick={onUpload}>Upload image</button>
		</>
	)
}
