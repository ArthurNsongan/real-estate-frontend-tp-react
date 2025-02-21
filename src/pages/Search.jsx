import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Search() {

    const [searchField, setSearchField] = useState({})
    const [searchResults, setSearchResults] = useState([])

    const handleChange = (event) => {
        setSearchField({...searchField, [event.target.name]: event.target.value});
        console.log(searchField, "searchField")
    }

    const [loading, setLoading] = useState(false)

    const getSearchResults = () => {

        setLoading(true)

        let query = {};

        let keys = Object.keys(searchField);

        keys.forEach((key) => {
            
            switch(key) {

                case "type": {
                    if(!(searchField.type == "" || searchField.type == null || searchField.type?.length == 0)) {
                        query["type"] = searchField.type
                    }
                    break;
                }

                case "status": {
                    if(!(searchField.status == "" || searchField.status == null || searchField.status?.length == 0)) {
                        query["status"] = searchField.status
                    }
                    break;
                }

                case "min_bedrooms": {
                    if(!(searchField.min_bedrooms == "" || Number(searchField.min_bedrooms) <= 0 
                        || searchField.min_bedrooms == null || searchField.min_bedrooms?.length == 0)) {
                        query["min_bedrooms"] = searchField.min_bedrooms
                    }
                    break;
                }

                case "max_price": {
                    if(!(searchField.max_price == "" || Number(searchField.max_price) <= 0 || 
                        searchField.max_price == null || searchField.max_price?.length == 0)) {
                        query["max_price"] = searchField.max_price
                    }
                    break;
                }
                
            }

        });

        console.log(query, "query")

        axios.get("https://real-estate-api-64hf.onrender.com/api/properties/search/", {
            params: {
                ...query
            }
        }).
        then((result) => {
            setSearchResults(result.data);
            setLoading(false);
        }).catch((error) => {
            console.log(error);
        });

    }

    

    const getLogementImageLink = (type) => {
        if(type === "house") {
            return properties_images_link.house;
        } else if(type === "appartment" || type === "appartement") {
            return properties_images_link.appartment;
        } else if(type === "villa") {
            return properties_images_link.villa;
        } else {
            return properties_images_link.house;
        }
    };

    var properties_images_link = {
        house: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        appartment: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        villa: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
    }
    
    return (
        <>
            <div className='container py-2 rounded-4 bg-light shadow-sm'>
                <h4 className='text-center'>Recherche</h4>
                <div className='row align-items-end border-top pt-3 mt-1'>
                    <div className='col-lg-2'>
                        <label className="form-label">Type</label>
                        <select type='text' className='form-select' value={searchField.type} onChange={handleChange} name='type'>
                            <option value={""}>Tous</option>
                            <option value={"appartment"}>Appartement</option>
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
                        <input type='number' min={1} maxLength={10} className='form-control' value={searchField.max_price} onChange={handleChange} name='max_price' />
                    </div>
                    <div className='col-lg-2'>
                        <label className="form-label">Statut</label>
                        <select onChange={handleChange} className='form-select' value={searchField.status} name='status'>
                            <option value={""}>Tous</option>
                            <option value={"available"}>Disponible</option>
                            <option value={"under construction"}>En Travaux</option>
                            <option value={"occupied"}>Occupé</option>
                        </select>                
                    </div>
                    <div className='col-lg-4'>
                        <button disabled={loading} onClick={getSearchResults} className='btn btn-info w-100'>{
                            !loading ? "Search" : <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        }</button>
                    </div>
                </div>
            </div>
            <div className='container'>
                {
                    loading ?
                        <>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                                <span className='text-bold ms-2'>Chargement...</span>
                            </div>
                        </> :
                        <>
                        {
                            searchResults.length == 0 ?
                                <>
                                
                                </> 
                            :
                                <>
                                {
                                    searchResults.map((result, resultIndex) => {

                                        return (
                                            <div key={resultIndex} className="row my-4 rounded-5 bg-light shadow-sm">
                                                <div className='col-lg-4 px-0'>
                                                    <img src={getLogementImageLink(result?.type)} className='min-h-100 shadow-sm bg-gray object-fit-cover rounded-5' alt="" width={"100%"} height={'75px'}/>
                                                </div>
                                                <div className='col-lg-4 py-4 border-end border-2'>
                                                    <p className='pb-3'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"20"} className='me-2'>
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                        </svg>
                                                        {result?.address}</p>
                                                    <div className='row px-4'>
                                                        <div className='col-lg-3'>
                                                            <h4 className='text-left'>{result ? result.bedrooms 
                                                                : <div className="spinner-border" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>}</h4>
                                                            <p className='text-left fs-6'>chambres</p>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <h4 className='text-left'>{result ? result.kitchens 
                                                                : <div className="spinner-grow" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>}</h4>
                                                            <p className='text-left fs-6'>cuisines</p>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <h4 className='text-left'>{
                                                                result ? result.living_rooms 
                                                                : <div className="spinner-grow" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div> }</h4>
                                                            <p className='text-left'>salons</p>
                                                        </div>
                                                        <div className='col-lg-3'>
                                                            <h4 className='text-left'>{result ? result.toilets 
                                                                : <div className="spinner-grow" role="status">
                                                                <span className="visually-hidden">Loading...</span>
                                                            </div>}</h4>
                                                            <span className='text-left'>douches</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='d-flex w-100 flex-column justify-content-center align-items-center'>
                                                        <span className='pt-4 fs-3 fw-semibold'>{result ? 
                                                            <>{Number(result?.price).toLocaleString()} FCFA</> : 
                                                            <div className="spinner-border" role="status">
                                                                    <span className="visually-hidden">Loading...</span>
                                                                </div> }</span>
                                                        <p className='text-left fs-6'>Prix</p>
                                                    </div>
                                                    <div className='row mt-3'>
                                                        <div className='col-lg-6'>
                                                            <Link to={("/details/" + result.id)} className='btn d-flex justify-content-center align-items-center btn-outline-dark rounded-pill w-100'>
                                                                <svg className='me-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"20"}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                </svg>Détails</Link>
                                                        </div>
                                                        <div className='col-lg-6'>
                                                            <Link to={("/update/" + result.id)} className='btn d-flex justify-content-center align-items-center btn-outline-primary rounded-pill w-100'>
                                                                <svg className='me-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"20"}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                                                </svg>Modifier</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                                </> }
                        </>
                }
            </div>
        </>
    )
}
