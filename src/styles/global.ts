import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}
    }

    body{
        background-color: ${(props) => props.theme['gray-900']};
        color:${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    *::-webkit-scrollbar {
        /* width: 4px; */
        height: 8px;

    }

    *::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme['gray-600']};
    border-radius: 5px;

    }


    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme['gray-900']};
        border-radius: 5px;
        border: 1px solid ${(props) => props.theme['gray-800']};
    }

`
