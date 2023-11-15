import { useState } from "react"
import AddDoctor from "./AddDoctor";
import EditDoctor from "./EditDoctor";

export default function MainBar(){
    const data=[{
        doc_name:"Priya",
        hospital_name:"Apollo Hospital",
        specialization:"Surgery",
        status:"Available"
    },
    {
        doc_name:"Ramya",
        hospital_name:"Kaveri Hospital",
        specialization:"Ortho",
        status:" Available"
    },]

    const[doctorData,setDoctorData]=useState(data);
    const [showForm,setShowForm] = useState(true);
    const [ editId,setEditId] =useState("");

    const deletDoctorDetails =(id)=>{
        const remainingDoctors = doctorData.filter((docinfo,idx)=>idx != id);
        setDoctorData(remainingDoctors);
    };
    const handleEdit =(id) =>{
        setShowForm(false);
        setEditId(id);
    };

    const handleStatusChange = (id,event)=>{
        doctorData[id].status = event.target.value;
        setDoctorData([...doctorData]);
    };
    return <div className="main-bar">
        {showForm === true ? (
            <AddDoctor doctorData={doctorData}setDoctordata={setDoctorData}/>

        ) : (
            <EditDoctor
            doctorData={doctorData}
            setDoctordata={setDoctorData}
            showForm={showForm}
            setShowForm={setShowForm}
            editId={editId}
            />
        )}
        {doctorData && (
            <>
            {doctorData?.map((docinfo,idx)=>(
                <div
                key={idx}
                className="card card-compact w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{docinfo.doc_name}</h2>
                        <p>{docinfo.hospital_name}</p>
                        <p>{docinfo.specialization}</p>
                        <select className="select select-bordered select-sm w-36 max-w-xs">
                            <select
                            className="select select-borderd select-sm w-36 max-w-xs"
                            onChange={(e)=> handleStatusChange(idx,e)}
                            ></select>
                        {docinfo.status == "Available" ? (
                    <option>Available</option>
                  ) : (
                    <option>Not Available</option>
                  )}
                  {docinfo.status == " Available" ? (
                    <option>Available</option>
                  ) : (
                    <option>Not Available</option>
                  )}
                        </select>
                        
                        <div className="card-actions justify-end">
                            
                            <button
                            className="btn btn-primary"
                            onClick={()=> handleEdit(idx)}
                            >
                                edit
                            </button>
                            <button
                            className="btn btn-error"
                            onClick={()=> deletDoctorDetails(idx)}
                            >
                                delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            </>
        )}

    </div>
}