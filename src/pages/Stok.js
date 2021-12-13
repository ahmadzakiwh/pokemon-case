import React, { useState, useEffect} from "react";
import axios from "axios"
import "../styles/stok.css"

function Stok() {
    const [allPokemon, setAllpokemon] = useState([]);
    const [isReady, setIsReady] = useState(false);
    const getAllPokemon = async () => {
        axios
            .get("https://pokeapi.co/api/v2/pokemon/")
            .then((res) => {
                const { data } = res;
                setAllpokemon(data)
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsReady(true))
    }

    useEffect(() => {
        getAllPokemon()
    }, [])

    if (isReady) {
        return (
            <div className="container">
                <div className="title row justify-content-center mt-4">
                    <div className="col">
                        <h1>Stok Pokemon</h1>
                    </div>
                </div>
                <div className="search row mt-3">
                    <div className="col">
                        <div class="input-group flex-nowrap">
                            <span class="input-group-text">@</span>
                            <input type="text" className="form-control" placeholder="Cari Pokemon" />
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table">
                            <thead className="txtHead">
                                <tr>
                                    <th>Nama</th>
                                    <th className="thRight">Stok</th>
                                </tr>
                            </thead>
                            <tbody className="txtBody">
                                {allPokemon.map((item) => {
                                    return (
                                        <tr>
                                            <th><a href="/detail">{item.name}</a></th>
                                            <th className="thRight">10 pcs</th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stok;