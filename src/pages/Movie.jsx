import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
	const params = useParams();
	const [movie, setMovie] = useState({});

	useEffect(() => {
		fetch(`http://localhost:4000/movies/${params.id}`)
			.then((r) => r.json())
			.then((fetchedMovie) => setMovie(fetchedMovie));
	}, []);

	if (!movie.id) {
		return <h1>Loading Movie...</h1>;
	}
	return (
		<>
			<header>
				<NavBar />
			</header>
			<main>
				<h1>{movie.title}</h1>
				<p>{movie.time}</p>
				{movie.genres.map((genre) => (
					<span>{genre}</span>
				))}
			</main>
		</>
	);
}

export default Movie;
