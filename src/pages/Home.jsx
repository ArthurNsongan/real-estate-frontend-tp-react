import axios from 'axios';
import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App'

export default function Home() {

const [listeLogements, setListeLogements] = useState([])

const appContext = useContext(AppContext)

function calculationTotalPrice(list)
{
  let sum = 0
  list.forEach(obj => sum += Number(obj.price));
  return sum;
}

//   var listeLogements = [
//     {
//         type: 'Appartement',
//         living_rooms: 1,
//         toilets: 2,
//         bedrooms: 3,
//         kitchens: 1,
//         price: 50000,
//         address: 'Rue Boulevard Ahmadou Ahidjo',
//         status: "Disponible"
//     },
//     {
//       type: 'Duplex',
//       living_rooms: 1,
//       toilets: 2,
//       bedrooms: 4,
//       kitchens: 1,
//       price: 200000,
//       address: 'Rue Boulevard de la Liberté',
//       status: "Occupé"
//     }
// ]

  const [dataLoaded, setDataLoaded] = useState(false);

  const totalPrice = useMemo(() => {
    let sum = calculationTotalPrice(listeLogements);
    console.log(sum, " <= totalPrice")
    return sum;
  }, [dataLoaded]);

  console.log("AppContext, ", appContext);

  useLayoutEffect(() => {
    
    if(!dataLoaded) {
      axios.get("https://real-estate-api-64hf.onrender.com/api/properties")
    .then((res) => {
      console.log(res.data, typeof res.data);
      if(typeof res.data == "object" && res.data?.length > 0) {
        setTimeout(() => {
          setListeLogements(res.data);
          setDataLoaded(true);
        }, 2000);
      }
    });
    } 

  });

  return (
    <>
      <div className='container'>
        <div className='d-flex justify-content-between'>
          <Link to={"/create"}><button className='btn btn-primary'>+ Nouveau logement</button></Link>
          <div className=''>
            <span>Total : </span><br/>
            <div className='badge text-start text-success-emphasis bg-success-subtle border border-success-subtle rounded-2'><b>{totalPrice}</b> XAF</div>
          </div>
        </div> 
        <table className='my-5 table table-striped text-center align-middle table-hover rounded'>
          <thead>
            <tr className=''>
              <th className='bg-dark text-white text-center'>Type</th>
              <th className='bg-dark text-white text-center'>Prix</th>
              <th className='bg-dark text-white text-center'>Adresse</th>
              <th className='bg-dark text-white text-center'>Statut</th>
              <th className='bg-dark text-white text-center'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              !dataLoaded ?
              <>
                <tr className='bg-danger'>
                  <td colSpan={5}>Chargement ...</td>
                </tr>
              </> :
              <>
              {listeLogements.length == 0 ? 
                <tr className='bg-danger'>
                  <td colSpan={5}>Aucune donnée chargée ...</td>
                </tr>            
              :
              listeLogements.map((logement, index) => (
                <tr key={index}>
                  <td>{logement.type}</td>
                  <td>{logement.price}</td>
                  <td>{logement.address}</td>
                  <td>{logement.status}</td>
                  <td>
                    <div className='d-flex align-items-center justify-content-center'>
                      <button className='btn btn-primary mx-1 d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"20"}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                      <button className='btn btn-warning mx-1  d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"20"}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>
                      <button className='btn btn-outline-danger mx-1  d-flex align-items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"20"}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              </>
            }
          </tbody>
        </table>
      </div>
    </>
  );
}
