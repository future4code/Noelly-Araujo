import React from 'react';
import styled from 'styled-components'
import Button from '@material-ui/core/Button'


const PostListsPage = () => {
return(
<div>
    <h1>Post Lists Page</h1>

    <ContainerYourPost>


    <ButtonLocal >
              Post
      </ ButtonLocal>
    </ContainerYourPost>

    <ContainerListPosts>

    </ContainerListPosts>
</div>

)
}

export default PostListsPage;

const ContainerYourPost = styled.div`
height: 200px;
border: solid 3px black;
width: 45%;
display: flex;
`

const ButtonLocal = styled.div`
width: 100%;
height: 30px;
background-color: teal;
padding-bottom: 15px;
`
const ContainerListPosts = styled.div`


`
