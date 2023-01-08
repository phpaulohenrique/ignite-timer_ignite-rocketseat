import { version } from "../../package.json";
import {
    ReactNode,
    createContext,
    useEffect,
    useReducer,
    useState,
} from "react";
import { ICycle, cyclesReducer } from "../reducers/cycles/reducer";
import {
    ActionTypes,
    addNewCycleAction,
    interruptedCurrentCycleAction,
    markCurrentCycleFinishedAction,
} from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextType {
    cycles: ICycle[];
    activeCycle: ICycle | undefined;
    activeCycleId: string | null;
    markCurrentCycleAsFinished: () => void;
    amountSecondsPassed: number;
    setSecondsPassed: (seconds: number) => void;
    createNewCycle: (data: CreateCycleData) => void;
    interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType);

interface CyclesContextProviderProps {
    children: ReactNode;
}

export function CyclesContextProvider({
    children,
}: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(
        cyclesReducer,
        {
            cycles: [],
            activeCycleId: null,
        },
        () => {
            const storedStateAsJSON = localStorage.getItem(
                `@ignite-timer:cycles-state-${version}`
            );

            if (storedStateAsJSON) {
                return JSON.parse(storedStateAsJSON);
            }

            return {
                cycles: [],
                activeCycleId: null,
            };
        }
    );

    const { cycles, activeCycleId } = cyclesState;

    // let activeCycleId = "";
    // if (cyclesState.activeCycleId) {
    //     activeCycleId = cyclesState.activeCycleId;
    // }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if (activeCycle) {
            return differenceInSeconds(
                new Date(),
                new Date(activeCycle.startDate)
            );
        }
        return 0;
    });

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState);
        localStorage.setItem(
            `@ignite-timer:cycles-state-${version}`,
            stateJSON
        );
    }, [cyclesState]);

    function setSecondsPassed(seconds: number) {
        setAmountSecondsPassed(seconds);
    }

    function markCurrentCycleAsFinished() {
        dispatch(markCurrentCycleFinishedAction());
    }

    function createNewCycle(data: CreateCycleData) {
        console.log(data);

        const id = String(new Date().getTime());

        const newCycle: ICycle = {
            id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        };

        dispatch(addNewCycleAction(newCycle));

        setAmountSecondsPassed(0);
    }

    function interruptCurrentCycle() {
        dispatch(interruptedCurrentCycleAction());
    }

    return (
        <CyclesContext.Provider
            value={{
                cycles,
                activeCycle,
                activeCycleId,
                markCurrentCycleAsFinished,
                amountSecondsPassed,
                setSecondsPassed,
                createNewCycle,
                interruptCurrentCycle,
            }}
        >
            {children}
        </CyclesContext.Provider>
    );
}
