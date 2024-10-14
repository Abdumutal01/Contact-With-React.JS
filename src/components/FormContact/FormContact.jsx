import React from 'react';

function FormContact(props) {
    return (
        <div>
            <form onSubmit={props.formSubmit}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputText1" className="form-label">Name Contact</label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputText1"
                            onChange={props.typeHandlar}
                            value={props.name}
                            placeholder="Enter Name"

                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputNum1" className="form-label">Number</label>
                        <input
                            type="tel"
                            className="form-control"
                            id="exampleInputNum1"
                            onChange={props.typeHandlar}
                            value={props.number}
                            placeholder="Enter number"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputNum1" className="form-label">Age</label>
                        <input
                            type="number"
                            className="form-control"
                            id="exampleInputNum1"
                            onChange={props.typeHandlar}
                            value={props.age}
                            placeholder="Enter Age"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputNum1" className="form-label">Job</label>
                        <input
                            type="search"
                            className="form-control"
                            id="exampleInputNum1"
                            onChange={props.typeHandlar}
                            value={props.job}
                            placeholder="Enter Job"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default FormContact;
