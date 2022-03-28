import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { styled } from '@mui/system';
// import styled from "styled-components";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const AcceptedUserContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '90vh',
    width: '90vw',
    padding: '15px',
    background: 'rgba(255, 255, 255, 0.80)',
    borderRadius: '10px',
    color: 'black',
    letterSpacing: '0.3rem'
});

const UserPortal = ({ logOut }) => {
    const [text, setText] = React.useState('')
    const [images, setImages] = React.useState([])

    const apiVariables = {
        amount: 20,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '26361437-3162ef8d14bb73f819d9f00b9',
    }

    React.useEffect(() => {
        if (text === '') {
            setImages([])
        } else {
            axios
                .get(
                    `${apiVariables.apiUrl}/?key=${apiVariables.apiKey}&q=${text}&image_type=photo&per_page=${apiVariables.amount}&safesearch=true`
                )
                .then(res => setImages(res.data.hits))
                .catch(err => console.log(err));
        }
    }, [text])


    return (
        <AcceptedUserContainer>
            <h1>Welcome {localStorage.getItem("name")}</h1>
            <Button variant="contained" onClick={logOut}>Log Out</Button>
            <br />
            <TextField id="outlined-basic" value={text} onChange={(e) => { setText(e.target.value) }} label="Search Images" variant="outlined" fullWidth={true} />
            {images.length > 0 ? (
                <Box sx={{ width: 'auto', height: 'auto', overflowY: 'scroll', padding: '10px' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {images.map((item) => (
                            <ImageListItem key={item.id}>
                                <img
                                    src={item.largeImageURL}
                                    srcSet={item.largeImageURL}
                                    alt={item.user}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
            ) : null}
        </AcceptedUserContainer >
    )

}


// const AcceptedUserContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 90vh;
//   width: 90vw;
//   padding:15px;
//   background: rgba(255, 255, 255, 0.80);
//   border-radius: 10px;
//   color: black;
//   letter-spacing: 0.3rem;
// `;


export default UserPortal;



