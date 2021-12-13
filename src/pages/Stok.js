import React, { useState, useEffect} from "react";
import "../styles/stok.css"

function Stok(){
    const [allPokemon, setAllpokemon] = useState([]);
    const [loadMore, setLoadMore] = useState("https://pokeapi.co/api/v2/pokemon/")
    
    useEffect(() => {
        getAllPokemon();
    }, []);

    const getAllPokemon = async () => {
        const res = await fetch(loadMore)
        const data = await res.json()

        setLoadMore(data.next)

        function createPokemonObject(results) {
            results.forEach(async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data = await res.json()
                setAllpokemon(currentList => [...currentList, data])
                await allPokemon.sort((a, b) => a.name - b.name)
            });
        }
        createPokemonObject(data.results)
    }
   
    return (
        <div className="container">
            <div className="title row justify-content-center mt-4">
                <div className="col">
                    <h1>Stok Pokemon</h1>
                </div>
            </div>
            <div className="search row mt-3">
                <div className="col">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text">@</span>
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
                            {allPokemon.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th><a href={`/detail/${item.name}`}>{item.name}</a></th>
                                        <th className="thRight">{`${item.order} pcs`}</th>
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
export default Stok;