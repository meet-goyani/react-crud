import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AddEdit.css';
import fireDB from '../firebase';
import { toast } from 'react-toastify';

const initialState = {
    name: "",
    email: "",
    contact: "",
};
const AddEdit = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState({});
    
    const { name, email, contact } = state;
    const history = useHistory();
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please Enter Fildes");
        } else {
            fireDB.child("form-data").push(state, (err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success("Contact Added Successfully");
                }
            });
            setTimeout(() => history.push("/"), 500)
        }
    };

    return (
        <div className="section">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder='Enter Your Name' value={name} onChange={handleInputChange} /><br />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder='Enter Your E-mail' value={email} onChange={handleInputChange} /><br />
                    <label htmlFor="contact">Contact:</label>
                    <input type="number" name="contact" id="contact" placeholder='Enter Your Contact No.' value={contact} onChange={handleInputChange} />
                    <input type="submit" value="Save" />
                </form>
            </div>
        </div>
    )
};

export default AddEdit;
