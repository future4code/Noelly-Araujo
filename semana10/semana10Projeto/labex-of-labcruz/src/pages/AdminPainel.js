import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { goToCreateTrip, goToShowDetails } from '../routes/coordinator';


const AdminPainel = () => {
    const [listTrip, setListTrips] = useState([])
    const history = useHistory()

  const getTrips = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/noelly-costa-cruz/trips`)

            .then((res) => {
                console.log(res)
                setListTrips(res.data.trips)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getTrips()
    },[])
 const listTrip1 = listTrip.map((trips) => {
        return (
            <>

                <li onClick={() => goToShowDetails(history,trips.id)}>
                    {trips.name}
                </li>




            </>
        )
    })



    return (


        <div>

            <p>Hi i'm Admin Painel</p>
            <ul>
                {listTrip1}
            </ul>

            <button onClick={() => goToCreateTrip(history)}>Create a trip</button>


        </div>

    )
}

export default AdminPainel;