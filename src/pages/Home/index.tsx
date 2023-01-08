import { HandPalm, Play } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
// import { differenceInSeconds } from "date-fns";

import {
    HomeContainer,
    StopCountdownButton,
    StartCountdownButton,
} from "./styles";
import { Countdown } from "./components/Countdown";
import { NewCycleForm } from "./components/NewCycleForm";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext";
import { differenceInMinutes } from "date-fns";

const newCycleValidationSchema = zod.object({
    task: zod.string(),
    minutesAmount: zod
        .number()
        .min(1, "O ciclo precisa ser de no mínimo 5 minutos. ")
        .max(60, "O ciclo precisa ser de no máximo 60 minutos. "),
});

type INewCycleFormData = zod.infer<typeof newCycleValidationSchema>;

export function Home() {
    const { createNewCycle, activeCycle, interruptCurrentCycle, cycles } =
        useContext(CyclesContext);

    const newCycleForm = useForm<INewCycleFormData>({
        resolver: zodResolver(newCycleValidationSchema),
        defaultValues: {
            task: "Trabalho da faculdade",
            minutesAmount: 25,
        },
    });

    // const isLastCycleFinished = cycles[cycles.length - 1]?.finishedDate || null;

    // let differenceInMinutesRefLastCycleFinished = 0;

    // if (isLastCycleFinished) {
    //     const lastCycle = cycles[cycles.length - 1];
    //     // console.log(lastCycle);

    //     differenceInMinutesRefLastCycleFinished = differenceInMinutes(
    //         new Date(),
    //         lastCycle.startDate
    //     );
    //     console.log(differenceInMinutesRefLastCycleFinished);
    // }

    const { handleSubmit, watch /* reset */ } = newCycleForm;

    function handleCreateNewCycle(data: INewCycleFormData) {
        console.log(data);
        createNewCycle(data);
        // reset();
        // the reset is commented out, because I want to keep the title of the last task
    }
    const task = watch("task");
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <Countdown />

                {activeCycle ? (
                    <StopCountdownButton
                        type="button"
                        // disabled={isSubmitDisabled}
                        onClick={interruptCurrentCycle}
                    >
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <StartCountdownButton
                        type="submit"
                        // disabled={isSubmitDisabled}
                    >
                        <Play size={24} />
                        Iniciar
                    </StartCountdownButton>
                )}
            </form>
        </HomeContainer>
    );
}
