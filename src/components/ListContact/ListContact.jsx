import React from "react";

function ListContact(props) {
    let { name,  number,  age,  job, deleteBtn} = props
    return (
        <div>
            <div className="card mt-4" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Tel: +998 {number} </p>
                    <p className="card-text">Age: {age} </p>
                    <p className="card-text">Job: {job} </p>

                    <div className="d-flex justify-content-center mt-3 ">
                        <button
                            className='btn btn-danger'
                            onClick={()=> deleteBtn(name)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListContact;

