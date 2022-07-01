import React from "react";
import SongArtist from "./SongArtist.js";
import SongLyric from "./SongLyric.js";
import Message from "./Message.js";

const SongDetails = ({ search, lyric, bio }) => {
	if (!lyric || !bio) return null;

	return (
		<div className="app__search">
			
			{bio.artists ? (
				<SongArtist artist={bio.artists[0]}/>
			) : (
				<Message
					msg={`Error: no existe el interprete "${search.artist}"`}
					bgColor={"#dc3545"}
				/>
			)}

			{lyric.error || lyric.err || lyric.name === "AbortError" ? (
				<Message
					msg={`Error: no existe la canción "${search.song}"`}
					bgColor={"#dc3545"}
				/>
			) : (
				<SongLyric title={search.song} lyrics={lyric.response.hits[0].result}/>
			)}
		</div>
	);
};

export default SongDetails;