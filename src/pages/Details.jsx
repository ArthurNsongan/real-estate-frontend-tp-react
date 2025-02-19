import React from 'react'

export default function Details({logement, id}) {

    var properties_images_link = {
        house: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
        appartment: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        villa: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D"
    }

    return (
        <>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-7'>
                    <img src={properties_images_link.appartment} className='object-fit-cover' alt="" width={"100%"} height={"500px"}  />
                </div>
                <div className='col-lg-5'>
                    <p className='pb-2'>Orange Digital Center, Akwa Soudanaise, Douala</p>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <h3 className='text-left'>6</h3>
                            <p className='text-left'>chambre(s)</p>
                        </div>
                        <div className='col-lg-4'>
                            <h3 className='text-left'>6</h3>
                            <p className='text-left'>cuisine(s)</p>
                        </div>
                        <div className='col-lg-4'>
                            <h3 className='text-left'>6</h3>
                            <p className='text-left'>salon(s)</p>
                        </div>
                    </div>
                    <h5 className='pb-2'>35 000 FCFA</h5>
                </div>
            </div>
        </div>
        </>
    )
}
