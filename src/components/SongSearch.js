import React, { useState, useEffect } from "react";
import SongForm from "./SongForm.js";
import SongDetails from "./SongDetails.js";
import Loader from "./Loader.js";
import { helpHttp } from "../helpers/helpHttp.js";

const SongSearch = () => {
	const [search, setSearch] = useState(null);
	const [lyric, setLyric] = useState(null);
	const [bio, setBio] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (search === null) return;

		const fetchData = async () => {
			const { artist, song } = search;

			const options = {
				headers: {
					'X-RapidAPI-Key': 'd5513fc387msh1217526fa2aa6e5p17daefjsnef096ed4cbe1',
					'X-RapidAPI-Host': 'genius.p.rapidapi.com'
				}
			};

			let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
			let songUrl = `https://genius.p.rapidapi.com/search?q=${artist}+${song}`;

			console.log(artistUrl, songUrl);

			setLoading(true);

			const [artistRes, songRes] = await Promise.all([
				helpHttp().get(artistUrl),
				helpHttp().get(songUrl, options),
			]);

			// console.log(artistRes, songRes);
			setBio(artistRes);
			setLyric(songRes);
			setLoading(false);
		};

		fetchData();
	}, [search]);

	const handleSearch = (data) => {
		setSearch(data);
	};

	return (
		<>	

			<SongForm handleSearch={handleSearch} />		
			{loading && <Loader />}
			
			{search && !loading && (
				<SongDetails search={search} lyric={lyric} bio={bio} />
			)}
		</>
	);
};

export default SongSearch;