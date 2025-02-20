import React, { useState } from 'react'

export default function Search() {

    const [searchField, setSearchField] = useState({})
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (event) => {
        var fieldName = event.target.name;

    }

    const [loading, setLoading] = useState(false)

    const getSearchResults = () => {

        var keys = Object.keys(searchField);

        keys.forEach((key, keyIndex) => {
            
            switch(key) {
                
            }

        });

    }
    
    return (
        <>
            <div className='container py-2 rounded-4 bg-light shadow-sm'>
                <h4 className='text-center'>Recherche</h4>
                <div className='row align-items-end border-top pt-3 mt-1'>
                    <div className='col-lg-2'>
                        <label className="form-label">Type</label>
                        <select type='text' className='form-select' value={searchField.type} onChange={handleChange} name='type'>
                            <option value={"appartment"}>Apaprtement</option>
                            <option value={"house"}>House</option>
                            <option value={"villa"}>Villa</option>
                        </select>
                    </div>
                    <div className='col-lg-2'>
                        <label className="form-label">Chambres Min.</label>
                        <input type='number' min={1} max={10} className='form-control' value={searchField.min_bedrooms} onChange={handleChange} name='min_bedrooms' />
                    </div>
                    <div className='col-lg-2'>
                        <label className="form-label">Prix Max.</label>
                        <input type='number' min={1} maxLength={10} className='form-control' value={searchField.max_price} onChange={handleChange} name='max-price' />
                    </div>
                    <div className='col-lg-2'>
                        <label className="form-label">Statut</label>
                        <select onChange={handleChange} className='form-select' value={searchField.status} name='status'>
                            <option value={""}>Tous les statuts</option>
                            <option value={"available"}>Disponible</option>
                            <option value={"under construction"}>En Travaux</option>
                            <option value={"occupied"}>Occupé</option>
                        </select>                
                    </div>
                    <div className='col-lg-4'>
                        <button onClick={() => getSearchResults()} className='btn btn-info w-100'>Search</button>
                    </div>
                </div>
            </div>
            <div className='container py-5 rounded-4 bg-light shadow-sm'>
                {
                    loading ?
                        <>
                            <div class="d-flex justify-content-center align-items-center">
                                <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <span className='text-bold'>Chargement...</span>
                            </div>
                        </> :
                        <></>
                }
            </div>
        </>
    )
}
