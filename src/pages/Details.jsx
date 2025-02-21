import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import blankImage from '../assets/image.png';

export default function Details() {

    // var params = useParams();
    const { id } = useParams();

    // console.log(params);

    const [logementData, setLogement] = useState(null);

    var properties_images_link = {
        house: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        appartment: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        villa: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
    }

    useEffect(() => { 
        axios.get(`https://real-estate-api-64hf.onrender.com/api/properties/${id}`)
        .then((response) => {
            setTimeout(() => setLogement(response.data), 1000);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, [id]);

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

    return (
        <>
        <Link to={"/"}><button className='btn text-bold mt-5 mb-3'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='mx-2' width={"20"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Retour vers la liste</button></Link>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-8'>
                    <img src={logementData ? getLogementImageLink(logementData?.type) : blankImage} className='min-h-100 bg-gray object-fit-cover rounded-5' alt="" width={"100%"} height={"500px"}  />
                </div>
                <div className='col-lg-4 bg-white p-4 shadow-sm rounded-5'>
                    <p className='pb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"20"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        {logementData?.address}</p>
                        <div className='row'>
                            <div className='col-lg-3'>
                                <h2 className='text-left'>{logementData ? logementData.bedrooms 
                                    : <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>}</h2>
                                <p className='text-left fs-6'>chambres</p>
                            </div>
                            <div className='col-lg-3'>
                                <h2 className='text-left'>{logementData ? logementData.kitchens 
                                    : <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>}</h2>
                                <p className='text-left fs-6'>cuisines</p>
                            </div>
                            <div className='col-lg-3'>
                                <h2 className='text-left'>{
                                    logementData ? logementData.living_rooms 
                                    : <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div> }</h2>
                                <p className='text-left'>salons</p>
                            </div>
                            <div className='col-lg-3'>
                                <h2 className='text-left'>{logementData ? logementData.toilets 
                                    : <div className="spinner-grow" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>}</h2>
                                <span className='text-left'>douches</span>
                            </div>
                        </div>
                    <h3 className='py-4'>{logementData ? 
                        <>{Number(logementData?.price).toLocaleString()} FCFA</> : 
                        <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div> }</h3>
                    <div className="rounded-5 bg-light shadow-sm text-black p-4">
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div className='h-100 d-flex flex-column justify-content-between'>
                                    <img src={blankImage} className='rounded-circle' width={50} height={50}></img>
                                    <h6 className='text-bold text-black lh-base mt-3 mb-0'>Arthur NSONGAN</h6>
                                </div>
                            </div>
                            <div className='col-lg-7'>
                                <div className='h-100 d-flex flex-column justify-content-between align-items-end'>
                                    <span>Agent</span>
                                    <button className='btn btn-outline-dark px-5 border-2 mb-1 border-gray rounded-pill'>Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='btn bg-black my-3 text-white w-100 rounded-pill'>
                        <div className='d-flex flex-column p-1 justify-content-center align-items-center'>
                            <span className='fs-5 text-bold mb-0'>Demander une visite</span>
                            <span className=''>Le plus tôt possible</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12 bg-white p-4 mt-4 shadow-sm rounded-4'>
                    <div className='row'>
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <div className='d-flex p-2 border rounded-5 border-dark-subtle justify-content-start'>
                                        <svg className='ms-1 me-3 d-inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"30"}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <div className='d-flex flex-column justify-content-center align-items-baseline'>
                                            <span className='text-body-tertiary' style={{fontSize: "14px"}}>Adresse</span>
                                            <span className='fs-6 fw-medium'>{logementData ? logementData.address : ""}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='d-flex p-2 border rounded-5 border-dark-subtle justify-content-start'>
                                        <svg className='ms-1 me-3 d-inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"30"}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                        </svg>
                                        <div className='d-flex flex-column justify-content-center align-items-baseline'>
                                            <span className='' style={{fontSize: "14px"}}>Property type</span>
                                            <span className='fs-6 fw-semibold'>{logementData ? logementData.type : ""}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='d-flex p-2 border rounded-5 border-dark-subtle justify-content-start'>
                                        <svg className='ms-1 me-3 d-inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"30"}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                        <div className='d-flex flex-column justify-content-center align-items-baseline'>
                                            <span className='text-body-tertiary' style={{fontSize: "14px"}}>Price</span>
                                            <span className='fs-6 fw-medium'>XAF {logementData ? Number(logementData.price).toLocaleString() : ""}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3'>
                                    <div className='d-flex p-2 border rounded-5 border-dark-subtle justify-content-start'>
                                        <svg className='ms-1 me-3 d-inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"30"}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                        <div className='d-flex flex-column justify-content-center align-items-baseline'>
                                            <span className='text-body-tertiary' style={{fontSize: "14px"}}>Bedrooms</span>
                                            <span className='fs-6 fw-medium'>{logementData ? "1-" + logementData.bedrooms : ""}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='row min-h-100'>
                                <div className='col-lg-5 min-h-100'>
                                    <div className='d-flex min-h-100 p-2 border rounded-5 border-dark justify-content-start'>
                                        <svg className='ms-1 me-3 d-inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width={"30"}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                                        </svg>
                                        <div className='d-flex flex-column justify-content-center align-items-baseline'>
                                            <span className='text-dark' style={{fontSize: "14px"}}>More</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-7 min-h-100'>
                                    <button className='d-flex min-h-100 w-100 p-2 rounded-5 btn btn-dark justify-content-center align-items-center'>
                                        <span className='text-white' style={{fontSize: "14px"}}>Search</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
