import '../Main.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// eslint-disable-next-line 
import { useNavigate, Link } from 'react-router-dom';
const ListCrew = () => {
    const [piratesCrew, setPiratesCrew] = useState([]);
    const [hasDeleted, setHasDeleted] = useState(false);
    //const navigate = useNavigate();
    useEffect( () => {
        axios.get('http://localhost:8000/api/pirates/get',{withCredentials : true})
        .then(response => {
            setPiratesCrew(response.data.pirates);
            console.log(piratesCrew);})
            // eslint-disable-next-line 
    }, [hasDeleted]  ); 
    const clickDelete = (e, id) => {
        e.preventDefault();
        setHasDeleted(!hasDeleted);
        axios.delete(`http://localhost:8000/api/pirates/delete/${id}`,{withCredentials : true}) 
        .then(response => console.log('submit edit page successful',response))
        .catch(error => console.log('error on edit page submit', error));
    }
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col" id="colheader">
                    <nav className="navbar navbar-light navbarDefault">
                        <div className="container-fluid">
                            <h1>Pirate Crew</h1>
                            <form className="d-flex" role="search">
                                <Link to="/pirate/new">
                                    <button className="btn btn-outline-success" id='top-btn' type="submit">Add Pirate</button>
                                </Link>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="formsContainer row">
                <div id='register-form-container' className="col" >
                        { piratesCrew.map ( (pirate, idx)=>{ 
                            return(
                                <div className='crew-member-container' key={idx}>
                                    <div className='image-container'>
                                        <img src={`${pirate.url}`} alt="Pirate referencial"></img>
                                    </div>
                                    <div className='crew-btn-container'>
                                        <h3> {pirate.name}  </h3>
                                        <div className='register-btn-container'>
                                                <Link to={`/pirate/${pirate._id}`}>
                                                    <button type="button" className="btn-register">View Pirate</button>
                                                </Link>
                                                <button type="button" className="btn-register" id='btn-delete' onClick={ e => clickDelete(e, pirate._id)}>Walk the plank</button>
                                        </div>
                                    </div>
                                </div>
                        )})}
                </div>
            </div>
        </div>
    )
}

export default ListCrew