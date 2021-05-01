import React, {useEffect} from 'react';
import {Container, Grid, Paper} from '@material-ui/core';
import {useQuery} from "react-query";
import axios from "axios";
import {ReactQueryDevtools} from "react-query/devtools";

const JOKES_QUERY_KEY = 'jokes'
const fetchJokes = async () => {
    const res = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
    return res.data;
};
const JokesPage = () => {
    const {isLoading, data} = useQuery(JOKES_QUERY_KEY, fetchJokes);
    console.log(111)
    console.log(data)
    useEffect(() => {
        console.log('did mount')
    },[])
    return <div>
        {isLoading ? 'Loading ....' :
            <Container>
                {!!data ? <Grid container>
                    {data?.map((it) => {
                        return <Paper>
                            <Grid key={it.id} item xs>{it.setup}</Grid>
                        </Paper>
                    })}

                </Grid> : ''}
            </Container>
        }
        <ReactQueryDevtools initialIsOpen />
    </div>;
};

export default JokesPage;
