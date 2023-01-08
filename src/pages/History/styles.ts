import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;
    padding: 1.5rem;

    @media (max-width: 768px) {
        padding: 1rem 0;
        /* width: 300px; */
    }

    display: flex;
    flex-direction: column;

    h1 {
        font-size: 1.5rem;
        color: ${(props) => props.theme["gray-100"]};
    }
`;

export const HistoryList = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 1rem;
    max-height: 300px;

    @media (max-height: 668px) and (max-width: 768px) {
        /* max-height: 580px; */
        /* margin-top: 4rem; */

        max-height: 440px;
    }

    @media (min-height: 896px) and (max-width: 768px) {
        /* max-height: 580px; */
        margin-top: 4rem;

        max-height: 580px;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;

        th {
            background: ${(props) => props.theme["gray-600"]};
            padding: 1rem;
            text-align: left;
            color: ${(props) => props.theme["gray-100"]};
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child {
                border-top-right-radius: 8px;
                padding-right: 1.5rem;
            }
        }

        td {
            background: ${(props) => props.theme["gray-700"]};
            border-top: 4px solid ${(props) => props.theme["gray-800"]};
            padding: 1rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child {
                padding-left: 1.5rem;
                width: 50%;

                @media (max-width: 768px) {
                    width: 32%;
                }
            }

            &:last-child {
                padding-right: 1.5rem;
            }
        }
    }
`;

const STATUS_COLORS = {
    yellow: "yellow-500",
    green: "green-500",
    red: "red-500",
} as const;

interface IStatusProps {
    statusColor: keyof typeof STATUS_COLORS;
}

export const Status = styled.span<IStatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: "";
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: ${(props) =>
            props.theme[STATUS_COLORS[props.statusColor]]};
    }
`;
