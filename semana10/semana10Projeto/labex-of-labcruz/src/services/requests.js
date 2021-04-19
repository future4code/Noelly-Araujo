import axios from 'axios';
import { BASE_URL } from '../paramaters';
import { goToAdminPainel, goToLoginPage } from '../routes/coordinator';


export const SendApplication = (body, tripId, clear) => {
    axios.post(`${BASE_URL}/trips/${tripId}/apply`, body)
        .then(() => {
            alert('Application sent successfully!')
            clear()
        })
        .catch((error) => {
            alert(error.response.message)
        })
}

export const login = (body, history) => {
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            goToAdminPainel(history)
        })
        .catch((error) => {
            alert(error.response.data.message)
        })

}

export const logout = (history) => {
    localStorage.removeItem('token')
    goToLoginPage()
}

export const delTrip = (id, getTrips) => {
    axios.delete(`${BASE_URL}/trips/${id}`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then(() => {
            alert('Successfully deleted trip!')
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}

export const createTrip = (body, clear) => {
    axios.post(`${BASE_URL}/trips`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then(() => {
            alert('Successfully deleted trip!')
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}

export const decideCandidate = (tripId, candidateId, decision, getTripDetails) => {
    const body = {
        approve: decision
    }
    axios.put(`${BASE_URL}/trips//${tripId}/candidates/${candidateId}/decide`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
        .then(() => {
            alert('Decision recorded successfully!')
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}