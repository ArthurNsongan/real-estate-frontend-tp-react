import axios from 'axios';
import React, { useState } from 'react'
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
    })
    .catch((res) => {
      console.log(res);
      alert(res.response.message)
    });
  }

  return (
    <>
      <Link to={"/"}><button className='btn btn-primary'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={"20"}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        Retour vers la liste</button></Link>
      <form onSubmit={handleSubmit}>
          <label className="form-label">Type : </label><br/>
          <select className='form-control' name='type' onChange={handleChange}>
            <option value={"appartment"}>Appartement</option>
            <option value={"house"}>Maison</option>
            <option value={"villa"}>Villa</option>
          </select>
          <br/>
          <label className="form-label">Nombre de chambres : </label><br/>
          <input className="form-control" type='number' onChange={handleChange} name='bedrooms'/>
          <br/>
          <label className="form-label">Nombre de cuisines : </label><br/>
          <input className="form-control" type='number' onChange={handleChange} name='kitchens'/>
          <br/>
          <label className="form-label">Nombre de salons : </label><br/>
          <input className="form-control" type='number' onChange={handleChange} name='living_rooms'/>
          <br/>
          <label className="form-label">Nombre de douches : </label><br/>
          <input className="form-control" type='number' onChange={handleChange} name='toilets'/>
          <br/>
          <label className="form-label">Prix : </label><br/>
          <input className="form-control" type='number' onChange={handleChange} name='price'/>
          <br/>
          <label className="form-label">Address : </label><br/>
          <textarea className="form-control" name='address' onChange={handleChange}></textarea>
          <br/>
          <label className="form-label">Statut : </label><br/>
          <select onChange={handleChange} className='form-control' name='status'>
            <option value={"available"}>Disponible</option>
            <option value={"en travaux"}>En Travaux</option>
            <option value={"occupied"}>Occupé</option>
          </select>
          <button className="bg bg-success rounded" type='submit'>Enregistrer</button>
      </form>
    </>
  )
}
