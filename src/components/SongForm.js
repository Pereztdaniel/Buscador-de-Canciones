import React, { useState, useEffect } from "react";



const initialForm = {
	artist: "",
	song: "",
};

const SongForm = ({ handleSearch }) => {
	const [form, setForm] = useState(initialForm);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.artist || !form.song) {
			alert("Datos Incompletos");
			return;
		}

		handleSearch(form);
		setForm(initialForm);
	};

	return (
		<>
			<form onSubmit={handleSubmit} className="app__inputs">
				<input
					type="text"
					name="artist"
					placeholder="Nombre del Interprete"
					onChange={handleChange}
					value={form.artist}
				/>
				<input
					type="text"
					name="song"
					placeholder="Nombre de la canción"
					onChange={handleChange}
					value={form.song}
				/>
				<div className="app__input">
					<input type="submit" value="Buscar" />
				</div>
			</form>
		</>
	);
};

export default SongForm;