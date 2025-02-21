import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Create() {

  let emptyFormData = {
    "type": "",
    "bedrooms": 0,
    "kitchens": 0,
    "living_rooms": 0,
    "toilets": 0,
    "price": 0,
    "address": "",
    "status": ""
  }

  const [formData, setFormData] = useState({
    ...emptyFormData
  });

  const handleChange = (event) => {
    let fieldName = event.target.name;
    let fieldValue= event.target.value;

    setFormData({...formData, [fieldName]: fieldValue});
  }

  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    console.log(formData)
    axios.post("https://real-estate-api-64hf.onrender.com/api/properties", formData)
    .then((res) => {
      console.log(res);
      alert("Enregistré avec succès")
      window.location.href = "/";
    })
    .catch((res) => {
      console.log(res);
      alert(res.response.message)
    });
  }

  return (
    <>
      <Link to={"/"}><button className='btn text-bold mt-5 mb-3'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='mx-2' width={"20"}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              Retour vers la liste</button></Link>
      <form className='row' onSubmit={handleSubmit}>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Type : </label><br/>
            <select className='form-select' name='type' onChange={handleChange}>
              <option value={"appartment"}>Appartement</option>
              <option value={"house"}>Maison</option>
              <option value={"villa"}>Villa</option>
            </select>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de chambres : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='bedrooms'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de cuisines : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='kitchens'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de salons : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='living_rooms'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Nombre de douches : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='toilets'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Prix : </label><br/>
            <input className="form-control" min={0} type='number' onChange={handleChange} name='price'/>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Address : </label><br/>
            <textarea className="form-control" name='address' onChange={handleChange}></textarea>
          </div>
          <div className='col-lg-6 my-2'>
            <label className="form-label">Statut : </label><br/>
            <select onChange={handleChange} className='form-select' name='status'>
              <option value={"available"}>Disponible</option>
              <option value={"under construction"}>En Travaux</option>
              <option value={"occupied"}>Occupé</option>
            </select>
          </div>
          <div className='col-lg-12'>
            <button className="btn btn-success rounded" type='submit'>Enregistrer</button>
          </div>
      </form>
    </>
  )
}
