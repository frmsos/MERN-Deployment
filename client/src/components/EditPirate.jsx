import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


const EditPirate = () => {
    const {id} = useParams();
    const [pirate, setPirate] = useState({});
    const [toggle, setToogle] = useState(false);
    const clickBtn = (e,item) =>{
        e.preventDefault()
        let newPegLeg, newEyePatch, newHookHand;
        setToogle(!toggle);
        switch(item){
            case "pegLeg":
                newPegLeg = !(pirate.pegLeg);
                newEyePatch = pirate.eyePatch;
                newHookHand = pirate.hookHand;
                console.log("btn", newPegLeg)
                setPirate({...pirate, pegLeg : newPegLeg});
                break;
            case "eyePatch":
                newPegLeg = pirate.pegLeg;
                newEyePatch = !(pirate.eyePatch);
                newHookHand = pirate.hookHand;
                setPirate({...pirate, eyePatch : newEyePatch});
                break;
            default:
                newPegLeg = pirate.pegLeg;
                newEyePatch = pirate.eyePatch;
                newHookHand = !(pirate.hookHand);
                setPirate({...pirate, hookHand : newHookHand});
        }
        axios.put(`http://localhost:8000/api/pirates/update/${id}`,
        {
            pegLeg : newPegLeg,
            eyePatch : newEyePatch,
            hookHand : newHookHand
        },{withCredentials : true})
        .then( response => {
            console.log('update correctly');
        })
        .catch( response => alert('could not update correctly', response))
    }    


    useEffect( () => {
        axios.get((`http://localhost:8000/api/pirates/get/${id}`),{withCredentials : true}) 
        .then(response => {
            setPirate(response.data.pirate);
        })
        // eslint-disable-next-line
    }, [ toggle]);



    return (
        <div className="container text-center">
            <div className="row">
                <div className="col" id="colheader">
                    <nav className="navbar navbar-light navbarDefault">
                        <div className="container-fluid">
                            <h1> {pirate.name} </h1>
                            <form className="d-flex" role="search">
                                <Link to="/pirates"  >
                                    <button className="btn btn-outline-success" id='top-btn' type="submit">Crew Board</button>
                                </Link>
                            </form>
                        </div>
                    </nav>
                </div>
            </div>
    <div className="formsContainer row">
            <div id='register-form-container' className="col" >
                <div id="edit-left-container">
                    <div id='image-edit-container'>
                        <img src={`${pirate.url}`} alt="Pirate referencial"></img>
                    </div>
                    <h2> {`"${pirate.phrase}"`}  </h2>
                </div>
            </div>
            <div id='register-form-container' className="col">
                <div id="whitebox-about-container">
                    <h3> About  </h3>
                    <form>
                        <div className="form-about">
                            <h5 className='field-about'> Position: </h5>
                            <p> {pirate.position} </p>
                        </div>
                        <div className="form-about">
                            <h5 className='field-about'> Treasures: </h5>
                            <p> {pirate.treasures} </p>
                        </div>
                        <div className="form-about">
                            <h5 className='field-about'> Peg Leg: </h5>
                            { pirate.pegLeg ? 
                            <>
                                <p>Yes</p> 
                                <button type="button" className="btn-yes" onClick={e=> clickBtn(e, "pegLeg")}>YES</button>
                            </>
                            : 
                            <>
                                <p>NO</p> 
                                <button type="button" className="btn-no" onClick={e=> clickBtn(e, "pegLeg")} >NO</button>
                            </>
                            }
                        </div>
                        <div className="form-about">
                            <h5 className='field-about'> Eye Patch: </h5>
                            { pirate.eyePatch ? 
                            <>
                                <p>Yes</p> 
                                <button type="button" className="btn-yes" onClick={e=> clickBtn(e, "eyePatch")} >YES</button>
                            </>
                            : 
                            <>
                                <p>NO</p> 
                                <button type="button" className="btn-no" onClick={e=> clickBtn(e, "eyePatch")} >NO</button>
                            </>
                            }
                        </div>
                        <div className="form-about">
                            <h5 className='field-about'> Hook Hand: </h5>
                            { pirate.hookHand ? 
                            <>
                                <p>Yes</p> 
                                <button type="button" className="btn-yes" onClick={e=> clickBtn(e, "hookHand")} >YES</button>
                            </>
                            : 
                            <>
                                <p>NO</p> 
                                <button type="button" className="btn-no" onClick={e=> clickBtn(e, "hookHand")} >NO</button>
                            </>
                            }
                        </div>

                    </form>
                </div>
            </div>
    </div>
</div>
    )
}

export default EditPirate