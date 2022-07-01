import React from "react";

const SongLyric = ({ lyrics }) => {
	console.log(lyrics.artist_names);
	return (
		<section className="app__artist">
			<img src={lyrics.header_image_thumbnail_url} alt="" />
			<h3>Titulo: {lyrics.title}</h3>
			<h4>Artista: {lyrics.artist_names}</h4>
			<h4>Fecha de Lanzamiento: {lyrics.release_date_for_display}</h4>

			<div className="btn-border">
				<button className="btn">
					<a href={lyrics.url} target="_blank" rel="noreferrer">
						Ver Letra
					</a>
				</button>
			</div>
		</section>
	);
};

export default SongLyric;