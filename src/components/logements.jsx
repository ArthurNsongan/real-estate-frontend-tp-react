import Logement from "./logement";

export default function Logements() {

    var listeLogements = [
        {
            type: 'Appartement',
            nb_salons: 1,
            nb_douches: 2,
            nb_chambres: 3,
            nb_cuisines: 1,
            loyer: 50000,
            etat: "Occupé"
        },
        {
            type: 'Duplex',
            nb_salons: 1,
            nb_douches: 2,
            nb_chambres: 4,
            nb_cuisines: 1,
            loyer: 200000,
            etat: "Occupé"
        }
    ];

    const compterLogemntsDispos = () => {
        let compteurLogements = 0;
        listeLogements.forEach((logement) => {
            if(logement.etat == "Disponible") {
                compteurLogements++;
            }
        });
        alert(`Le nombre de compteurs de logements est de : ${compteurLogements}`);
    }

    return <>
        <h1>Liste des différents logements : </h1>
        <button onClick={compterLogemntsDispos}>Afficher le nombre des logements disponibles</button>
        <table>
            <thead>
                <tr>
                    <th>Type de logement</th>
                    <th>Nombre de salons</th>
                    <th>Nombre de douches</th>
                    <th>Nombre de chambres</th>
                    <th>Nombre de cuisines</th>
                    <th>Loyer</th>
                    <th>Etat</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {listeLogements.map((logement, index) => {
                    return (
                        // <tr key={index}>
                        //     <td>{logement.type}</td>
                        //     <td>{logement.nb_salons}</td>
                        //     <td>{logement.nb_douches}</td>
                        //     <td>{logement.nb_chambres}</td>
                        //     <td>{logement.nb_cuisines}</td>
                        //     <td>{logement.loyer}</td>
                        //     <td>{logement.etat}</td>
                        // </tr>
                        <Logement key={index} data={logement} id={index}/>
                    );
                })}
            </tbody>
        </table>    
    </>
}