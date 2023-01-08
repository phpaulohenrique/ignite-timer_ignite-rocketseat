import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 75rem;
    height: calc(100vh - 8rem);
    margin: 4rem auto;
    /* background-color: #ccc;   */
    padding: 3rem 2rem;

    background: ${(props) => props.theme["gray-800"]};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 1.5rem;
        /* background-color: red; */
        height: calc(100vh - 4rem);
        margin: 2rem auto;
        border-radius: 0px;
    }
`;
