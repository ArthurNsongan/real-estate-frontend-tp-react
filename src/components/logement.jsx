import { useState } from "react";

const Logement = (props) => {

    const [showBookingButton, setShowBookingButton] = useState(false);

    var logement = props.data;
    console.log(logement, "logement");

    return (
        <>
        <tr key={props.id}>
            <td>{logement.type}
                <br/>{
                    showBookingButton ? 
                    <div style={{backgroundColor: "green", color: "white"}}>En cours de réservation</div> 
                    : <></>
                }</td>
            <td>{logement.nb_salons}</td>
            <td>{logement.nb_douches}</td>
            <td>{logement.nb_chambres}</td>
            <td>{logement.nb_cuisines}</td>
            <td>{logement.loyer}</td>
            <td>{logement.etat}</td>
            <td>
                <label>Cochez pour réserver</label>
                <input type="checkbox" checked={showBookingButton} onChange={() => {
                    setShowBookingButton(!showBookingButton);
                }} />
            </td>
        </tr>
        </>
    )
}

export default Logement