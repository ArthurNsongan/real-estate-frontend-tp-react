import { useState } from "react";

export default function LoginForm() {

    var emptyFormData = {
        nom: "",
        prenom: "",
        email: ""
    }

    const [formData, setFormData] = useState({...emptyFormData});

    const [dataList, setDataList] = useState([]);
  
    const handleSubmit = (event) => {

        event.preventDefault();

        if(formData.nom && formData.prenom && formData.email) {
            //1ere session : Code détaillée
            // let newDataList = dataList;
            // newDataList.push(formData);
            // setDataList(newDataList);
            //setFormData({
            //     nom: "",
            //     prenom: "",
            //     email: ""
            // });

            //2e session : Version oneline
            setDataList([...dataList, formData]);
            setFormData({...emptyFormData})
            alert("Enregistré avec succès !!!")
        } else {
            alert("Message d'erreur")
        }
    }

    const handleDelete = (index) => {
        console.log(index)
        dataList.splice(index, 1);
        console.log(index, "c ", dataList)
        setDataList([...dataList]);
    }

    const handleChange = (event) => {
        let field_name = event.target.name;
        let field_value = event.target.value;

        console.log("name : ", field_name, ", value : ", field_value)

        // Première Solution :
        // let old_formData = formData;

        // switch (field_name) {
        //     case "nom":
        //         old_formData.nom = field_value;
        //         break;
            
        //     case "prenom":
        //         old_formData.prenom = field_value;
        //         break;

        //     case "email":
        //         old_formData.email = field_value;
        //         break;
            
        //     default:
        //         break;
        // }

        // setFormData(old_formData);

        // ======================================================

        // Deuxième Solution :
        setFormData({...formData, [field_name]: field_value});

        console.log(formData);
    }

    return (
       <>
         <form onSubmit={handleSubmit} className="">
            <label className="form-label">Nom : </label><br/>
            <input className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" type='text' name='nom' value={formData.nom} onChange={handleChange}/>
            <br/>
            <label className="form-label">Prénom : </label><br/>
            <input className="form-control" type='text' name='prenom' value={formData.prenom} onChange={handleChange}/>
            <br/>
            <label className="form-label">Adresse E-mail : </label><br/>
            <input className="form-control" type='text' name='email' value={formData.email} onChange={handleChange}/>
            <br/>
            <button className="bg bg-success rounded" type='submit'>Enregistrer</button>
        </form>

        <hr/>

        <table border={1} className="table table-hover table-bordered">
            <thead>
                <tr className="bg-primary">
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Adresse</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    dataList.length == 0 ?
                        <tr>
                            <td colSpan={4}>Pas d'élément dans notre tableau</td>
                        </tr>
                    :
                        dataList.map((data, index) => {
                          return (
                            <tr key={index}>
                                <td>{data.nom}</td>
                                <td>{data.prenom}</td>
                                <td>{data.email}</td>
                                <td><button onClick={() => handleDelete(index)}
                                        className="btn btn-danger"
                                    >&times;</button>
                                </td>
                            </tr>
                          )  
                        })
                }
            </tbody>
        </table>
       </>
    )
}
