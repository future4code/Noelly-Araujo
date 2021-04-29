export const goToHomePage = (history) => {
    history.push('/')
}


export const goToLogin = (history) => {
    history.push('/login')
}

export const goToPostListsPage = (history) => {
    history.push('/lista-de-posts')
}

export const goToPostPage = (history, id) => {
    history.push(`/post/${id}`)
}

export const goToSignUpPage = (history) => {
    history.push('/cadastro')
}