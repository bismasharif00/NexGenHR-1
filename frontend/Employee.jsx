import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Employee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrashCan, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';

function Employee() {
    const [employee, setEmployee] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/`);
            setEmployee(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = async () => {
        if (searchTerm.trim() === '') {
            fetchEmployees();
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3000/search`, {
                params: { q: searchTerm }
            });
            setEmployee(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/employee/${id}`)
            fetchEmployees();
        }catch(err) {
            console.log(err)
        }
    }



    return (
        <div className='employee-container1'>

            <div className='employee-container2'>
                <div className='leftNav'>
                    <Link to="/" className='leftNavBtn'>Home</Link>
                    <Link className='leftNavBtn'>CV screening</Link>
                    <Link className='leftNavBtn'>Job posting</Link>
                    
                </div>
            </div>


            <div className='employee-container3'>
                <div className='data'>
                    <div className='custom'>
                        <Link to="/add-employee" className='custom-btn custom-btn-success'>Add +</Link>
                        <div class="custom-input-group">
                        <input
                                type="text"
                                className="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button
                                className="btn searchBtn"
                                type="button"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </div>
                    </div>
                    <table className='custom-table'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>{'          '}</td>
                                {/* <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td> */}
                            </tr>
                        </thead>
                        <tbody>
                            {employee.map((data, i)=>(
                                <tr key={i}>
                                    <td>{data.employee_id}</td>
                                    <td>{data.first_name}</td> {/*name should be same as it was written in database like Name with capital N */}
                                    <td>{data.last_name}</td>
                                    <td>{data.em_email}</td>
                                    <td>
                                        <div className='d-inline-flex gap-2'>
                                            <Link to={`show/${data.employee_id}`} className='btn btn-outline-dark'><FontAwesomeIcon icon={faEye} /></Link>
                                            <Link to={`invoice/${data.employee_id}`} className='btn btn-outline-dark'><FontAwesomeIcon icon={faMoneyCheckDollar}/></Link>
                                            <button className='btn btn-danger' onClick={() => handleDelete(data.employee_id)}><FontAwesomeIcon icon={faTrashCan}/></button>
                                        </div>
                                    </td>

                                </tr> 
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    )
}

export default Employee
