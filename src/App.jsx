// mport { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import realEstateLogo from './assets/real_estate_logo.png'
import './App.css'
// import Logements from './components/logements'
// import LoginForm from './components/LoginForm'
import Home from './pages/Home'
import Details from './pages/Details'
import Update from './pages/Update'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Create from './pages/Create'
import { createContext } from 'react'
import Search from './pages/Search'

function App() {

  var listeLogements = [
    {
        type: 'Appartement',
        living_rooms: 1,
        toilets: 2,
        bedrooms: 3,
        kitchens: 1,
        price: 50000,
        address: 'Rue Boulevard Ahmadou Ahidjo',
        status: "Disponible"
    },
    {
      type: 'Duplex',
      living_rooms: 1,
      toilets: 2,
      bedrooms: 4,
      kitchens: 1,
      price: 200000,
      address: 'Rue Boulevard de la Liberté',
      status: "Occupé"
    }
  ]

  return (
    <AppContext.Provider value={listeLogements}>
      <BrowserRouter>
      <Routes>
        <Route element={<NavbarMenu />}>
          <Route path={"/"} element={<Home />}/>
          <Route path={"/details/:id"} element={<Details />}/>
          <Route path={"/update/:id"} element={<Update />}/>
          <Route path={"/create"} element={<Create />}/>
          <Route path={"/search"} element={<Search />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  )
}

var AppContext = createContext([]);

export { AppContext };


// function App() {
//   return (
//     <>
//       <nav className="navbar bg-body-tertiary mb-2">
//         <div className='container-fluid'>
//           <div className="navbar-brand d-flex justify-content-center align-items-center w-100">
//             <img src={realEstateLogo} alt="Logo" width="50" height="auto" 
//               className="d-inline-block align-text-top"/>
//             <span className='text-bold'>RealEstate</span>
//           </div>
//         </div>
//       </nav>
//       <div className='container'>
//       <BrowserRouter>
//         <Routes>
//           <Route path={"/"} element={<Home />}/>
//           <Route path={"/details"} element={<Details />}/>
//           <Route path={"/create"} element={<Create />}/>
//         </Routes>
//       </BrowserRouter>
//       </div>
//     </>
//   )
// }

const NavbarMenu = () => (
  <>
    <nav className="navbar bg-transparent mb-2">
      <div className='container-fluid'>
        <div className="navbar-brand d-flex justify-content-center align-items-center w-100">
          <img src={realEstateLogo} alt="Logo" width="50" height="auto" 
            className="d-inline-block align-text-top"/>
          <span className='text-bold'>RealEstate</span>
          <Link to={"/"}>Home</Link>
          <Link to={"/search"}>Search</Link>
        </div>
      </div>
    </nav>
    <div className='container'>
      <Outlet />
    </div>
  </>
);

{/* <div className="container"> */}
        {/* <h5 className='text-center'>Bienvenue sur &laquo; <span className='text-bold'>RealEstate</span> &raquo;</h5> */}
        // //<Home />
        // <Details />
        // <Create />
        {/* <Logements /> */}
        {/* <LoginForm />  */}
      // </div>

export default App
