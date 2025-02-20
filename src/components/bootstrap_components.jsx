import { useState } from "react";

export function Modal({ actionMethod, closedMethod, shown}) {

    const [show, setShow] = useState(shown);

    if(closedMethod == null) {
        closedMethod = () => {}
    }

    return show ? <>
        <div className="modal fade show bg-dark" style={{display: "block"}} tabIndex="-1">
            <div className="modal-dialog my-0 d-flex flex-column justify-content-center min-vh-100">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Supprimer un logement ?</h5>
                </div>
                <div className="modal-body">
                    <p>Etes-vous sûr de vouloir supprimer ?</p>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={() => { closedMethod(); setShow(false); }} className="btn btn-secondary">Fermer</button>
                    <button type="button" onClick={() => { actionMethod(); setShow(false) }} className="btn btn-primary">Enregistrer</button>
                </div>
                </div>
            </div>
        </div>
    </> : <></>
}

export const Toast = ({ closedMethod, children }) => {

    if(closedMethod == null) {
        closedMethod = () => {

        }
    }

    return <div className="toast text-bg-danger border-0 position-fixed top-0 end-0 m-3" style={{display: "block"}} role="alert">
    <div className="d-flex">
      <div className="toast-body">
        {children}
      </div>
      <button type="button" onClick={closedMethod} className="btn-close btn-close-white me-2 m-auto"></button>
    </div>
  </div>
}