import { useCallback, useLayoutEffect, useRef } from "react";
import { QUESTION_ELEMENT_DATA_ID } from "../ReportQuestionSelectorConstants";

interface Args {
    setSelectedQuestionId: (id: string) => void;
    questionsWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
}

export const useHandleScrollSnapQuestionIdUpdate = ({ setSelectedQuestionId, questionsWrapperRef }: Args) => {
    const handleScrollSnapChange = useCallback((e: any) => {
        if (!e?.snapTargetBlock || !e?.snapTargetBlock?.dataset?.[QUESTION_ELEMENT_DATA_ID]) return;

        setSelectedQuestionId(e.snapTargetBlock.dataset[QUESTION_ELEMENT_DATA_ID]);
    }, [setSelectedQuestionId])

    useLayoutEffect(() => {
        const questionsWrapper = questionsWrapperRef.current
        if (!questionsWrapper) return

        questionsWrapper.addEventListener("scrollsnapchange", handleScrollSnapChange)
        return () => {
            questionsWrapper.removeEventListener("scrollsnapchange", handleScrollSnapChange)
        }
    }, [handleScrollSnapChange])

    return {
        questionsWrapperRef
    }
}