import React from "react";
import Modal from "./Modal.js";
import { useModal } from "../hooks/useModal.js";

const SongArtist = ({ artist }) => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);
	return (
		<section className="app__artist">
			<img src={artist.strArtistThumb} alt={artist.strArtist} />
			<h3>Artista: {artist.strArtist}</h3>
			<h4>
				Año: {artist.intBornYear} - {artist.intDiedYear || "Presente"}
			</h4>
			<h4>País: {artist.strCountry}</h4>
			<h4>
				Género Músical: {artist.strGenre} - {artist.strStyle}
			</h4>
			<h4>
				Sitio Web:{" "}
				<a
					href={`http://${artist.strWebsite}`}
					target="_blank"
					rel="noreferrer"
				>
					{artist.strWebsite}
				</a>
			</h4>

			<div className="btn-border">
				<button onClick={openModal1} className="btn">
					Ver Biografía
				</button>
			</div>
			<Modal isOpen={isOpenModal1} closeModal={closeModal1}>
				<p>
					Biografía: <br />
					<br /> {artist.strBiographyES}
				</p>
			</Modal>
		</section>
	);
};

export default SongArtist;