import { useState } from 'react';
import '../Main.css'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const AddPirate = () => {
    const [pirate, setPirate] = useState(    
        {
            name : "",
            url : "",
            treasures: 0,
            phrase : "",
            position : "",
            pegLeg : true,
            eyePatch : true,
            hookHand : true
        }
    );
    const navigate = useNavigate();
    const clickSign = (event, isIncrement) =>{
        isIncrement ?  setPirate(  {...pirate, treasures : pirate.treasures + 1}  ) :
        setPirate(  {...pirate, treasures : pirate.treasures - 1}  ) 
    }
    const clickAdd = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates/create', {
            name : pirate.name,
            url : pirate.url,
            treasures: pirate.treasures,
            phrase : pirate.phrase,
            position : pirate.position,
            pegLeg : pirate.pegLeg,
            eyePatch : pirate.eyePatch,
            hookHand : pirate.hookHand,
        },{withCredentials : true})
        .then(response => { 
                alert(`The Pirate ${pirate.name} has been added succesfully`)
                navigate("/pirates");          
        })
        .catch(error => console.log( error.response.data.error.message))
    }

    return (
<div className="container text-center">
    <div className="row">
        <div className="col" id="colheader">
            <nav className="navbar navbar-light navbarDefault">
                <div className="container-fluid">
                    <h1>Add Pirate</h1>
                    <form className="d-flex" role="search">
                        <Link to="/pirates">
                            <button className="btn btn-outline-success" id='top-btn' type="submit">Crew Board</button>
                        </Link>
                    </form>
                </div>
            </nav>
        </div>
    </div>
    <div className="formsContainer row">
            <div id='register-form-container' className="col" >
                <div id="whitebox-left-container">
                    <form>
                        <div className="form" id="row-default">
                            <h5>Pirate Name: </h5>
                            <input type="text" className="form"  value={pirate.name} placeholder="Enter Pirate Name" onChange={(e) => setPirate( {...pirate, name : e.target.value} ) } />
                        </div>
                        <div className="form">
                            <h5>Image URL: </h5>
                            <input type="text" className="form" value={pirate.url} placeholder="Enter the image URL" onChange={(e) => setPirate( {...pirate, url : e.target.value} ) } />
                        </div>
                        <div className="form" id='row-default'>
                            <h5> Number of Treasure Chests: </h5>
                            <div className='number-container'>
                                    <span id='plus-sign' onClick={(e) => clickSign(e,true) }> + </span>
                                    <span id='number'> {pirate.treasures} </span>
                                    <span id='minus-sign' onClick={(e) => clickSign(e,false)} > - </span>
                            </div>
                        </div>
                        <div className="form">
                            <h5>Pirate Catch Phrase:</h5>
                            <input type="text" className="form" value={pirate.phrase} placeholder="Catch Phrase" onChange={(e) => setPirate( {...pirate, phrase : e.target.value} ) } />
                        </div>
                    </form>
                </div>
            </div>
            <div id='register-form-container' className="col">
                <div id="whitebox-left-container">
                    <form>
                        <div className="form" id="row-default">
                            <h5> Crew Position </h5>
                            <select className="form-select" aria-label="Default select example" onChange={(e) => setPirate( {...pirate, position : e.target.value} ) }>
                                <option defaultValue={null}>Choose one crew position</option>
                                <option value="Captain">Captain</option>
                                <option value="First Mate">First Mate</option>
                                <option value="Quarter Master">Quarter Master</option>
                                <option value="Boatswain">Boatswain</option>
                                <option value="Powder">Powder </option>
                                
                            </select>
                        </div>
                        <div className='checkbox-container'>
                            <div className='row-checkboxs'>
                                <input type="checkbox" className='checkbox-input' checked={pirate.pegLeg}  onChange={ () =>setPirate({...pirate, pegLeg : !(pirate.pegLeg)}) } />
                                <span className="checkmsark"></span>
                                <label className='checkbox-title'>Peg leg</label> 
                            </div>
                            <div className='row-checkboxs'>
                                <input type="checkbox" className='checkbox-input' checked={pirate.eyePatch} onChange={ () =>setPirate({...pirate, eyePatch : !(pirate.eyePatch)}) } />
                                <span className="checkmsark"></span>
                                <label className='checkbox-title'>Eye Patch</label> 
                            </div>
                            <div className='row-checkboxs'>
                                <input type="checkbox" className='checkbox-input' checked={pirate.hookHand} onChange={ () =>setPirate({...pirate, hookHand : !(pirate.hookHand)}) } />
                                <span className="checkmsark"></span>
                                <label className='checkbox-title'>Hook Hand</label> 
                            </div>
                        </div>
                        <div className='register-btn-container'>
                            <button type="submit" className="btn-register" onClick={clickAdd}>Add Pirate</button>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</div>
    )
}

export default AddPirate