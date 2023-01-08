import styled from "styled-components";

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: 400;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        width: 86%;
    }
`;

export const BaseInput = styled.input`
    background: transparent;
    height: 2rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme["gray-500"]};
    font-weight: bold;
    font-size: 1rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["green-300"]};
    -moz-appearance: textfield; // remove increment and decrement button in mozilla firefox

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme["green-500"]};
    }

    &::placeholder {
        border-color: ${(props) => props.theme["gray-500"]};
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export const TaskInput = styled(BaseInput)`
    flex: 1;
    /* letter-spacing: 1px; */

    &::webkit-calendar-picker-indicator {
        display: none !important;
    }
`;
export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;

    @media (max-width: 768px) {
        width: 2.5rem;
    }
`;

export const BaseCountdownButton = styled.button`
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-100"]};
    transition: background 0.2s;

    cursor: pointer;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export const StartCountdownButton = styled(BaseCountdownButton)`
    background: ${(props) => props.theme["green-500"]};

    &:not(:disabled):hover {
        background: ${(props) => props.theme["green-700"]};
    }
`;

export const StopCountdownButton = styled(BaseCountdownButton)`
    background: ${(props) => props.theme["red-500"]};

    &:not(:disabled):hover {
        background: ${(props) => props.theme["red-700"]};
    }
`;
