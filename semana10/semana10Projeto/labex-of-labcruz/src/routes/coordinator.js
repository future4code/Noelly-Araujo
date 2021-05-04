export const goToHome = (history) => {
    history.push('/')
}

export const goToSeeAllTrips = (history) => {
    history.push('/SeeAllTrips')
}

export const goToSignUp = (history) => {
    history.push('/SignUp')
}

export const goToLoginPage = (history) => {
    history.push('/LoginPage')
}


export const goToAdminPainel = (history) => {
    history.push('/AdminPainel')
}

export const goToCreateTrip = (history) => {
    history.push('/CreateTrip')
}

export const goToShowDetails = (history,id) => {
    history.push(`/ShowDetails/${id}`)
}



