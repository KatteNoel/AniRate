import { useState, useEffect, useRef } from "react";

import { api } from "../rest/api";
import { Anime } from "./anime";
import { CreateAnimeForm } from "./createanimeform";
import { UpdateModal } from "./updateModal";

export const Home = () => {
    const [ animes, setAnimes ] = useState([]);
    const [ modal, setShowModal ] = useState(false);
    const [ id, setId ] = useState(null);
    const [ animeToUpdate, setAnimeToUpdate ] = useState(null);

    const animeName = useRef(null);
    const url = useRef(null);
    const rating = useRef(null);
    const description = useRef(null);

    const updateName = useRef(null);
    const updateURL = useRef(null);
    const updateRating = useRef(null);
    const updateDescription = useRef(null);

    useEffect(() => {
        getAnimes();
     }, []);

    async function getAnimes() {
        const data = await api.get();
        setAnimes(data);
    }

    async function createAnime() {
        let anime = {name: animeName.current.value, imageURL: url.current.value, rating: rating.current.value, description: description.current.value};
        clearFormValues();
        await api.create(anime);
        getAnimes();
    }

    function clearFormValues() {
        animeName.current.value = "";
        url.current.value = "";
        rating.current.value = "";
        description.current.value = "";
    }

    function clearUpdateFormValues() {
        updateName.current.value = "";
        updateURL.current.value = "";
        updateRating.current.value = "";
        updateDescription.current.value = "";
    }

    async function deleteAnime(id) {
        await api.delete(id);
        getAnimes();
    }

    async function updateAnime(animeToUpdate, id) {
        let anime = animeToUpdate;

        if (updateName.current.value !== "") {
            anime.name = updateName.current.value;
        }

        if (updateURL.current.value !== "") {
            anime.url = updateURL.current.value;
        }

        if (updateRating.current.value !== "") {
            anime.rating = updateRating.current.value;
        }

        if (updateDescription.current.value !== "") {
            anime.description = updateDescription.current.value;
        }

        clearUpdateFormValues();
        showModal(false);

        await api.put(anime, id);
        getAnimes();
    }

    function showModal(bool, _animeToUpdate, _id) {
        setId(_id);
        setAnimeToUpdate(_animeToUpdate);

        setShowModal(bool);
    }

    return (
        <>
        {modal ? <UpdateModal updateName={updateName} updateURL={updateURL} updateRating={updateRating} updateDescription={updateDescription} modal={modal} setShowModal={setShowModal} updateAnime={updateAnime} id={id} animeToUpdate={animeToUpdate}/>: null}
        <CreateAnimeForm createAnime={createAnime} animeName={animeName} url={url} rating={rating} description={description}/>
        <h2 className="text-center font yellow">My Rated Anime</h2>
        <div className="anime-cards">
            {animes.map((anime, index) => <Anime key={index} anime={anime} deleteAnime={deleteAnime} updateAnime={updateAnime} showModal={showModal}/>)} 
        </div>
        </>
    );
}