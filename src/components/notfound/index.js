import React from 'react'
import { Button, PokemonInfo, Title, NotFound } from './styles';
import notfoundgif from './404.gif'

const App = () => (
    <>
        <Button to={process.env.PUBLIC_URL + '/'}>Return</Button>
        <PokemonInfo>
            <Title>
                <h1>Page not found.</h1>
                <p>Please, return and try again.</p>
            </Title>
            <NotFound>
                <img src={notfoundgif} alt={notfoundgif} />
            </NotFound>
        </PokemonInfo>
    </>
)

export default App;