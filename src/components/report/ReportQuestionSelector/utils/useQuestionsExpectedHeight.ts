import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface Args {
  questionsWrapperRef: React.MutableRefObject<HTMLDivElement | null>;
}

interface Output {
  expectedHeight: number;
}

const RESET_HEIGHT_DELAY = 1000; // 1 s

export const useQuestionsExpectedHeight = ({
  questionsWrapperRef,
}: Args): Output => {
  const [expectedHeight, setExpectedHeight] = useState<number>(0);

  const resetExpectedHeight = useCallback(() => {
    const questionsWrapper = questionsWrapperRef.current;
    if (!questionsWrapper) return;

    const questionsElements = [...questionsWrapper.children];
    const questionsElementsHeights = questionsElements.map(
      (child) => child.getBoundingClientRect().height,
    );
    const questionMaxHeight = Math.max(...questionsElementsHeights);
    setExpectedHeight(questionMaxHeight);
  }, [questionsWrapperRef]);

  const debouncedResetExpectedHeight = useDebouncedCallback(
    resetExpectedHeight,
    RESET_HEIGHT_DELAY,
  );

  const handleResetExpectedHeightOnResize = useCallback(() => {
    setExpectedHeight(0);
    debouncedResetExpectedHeight();
  }, [debouncedResetExpectedHeight]);

  useEffect(() => {
    const questionsWrapper = questionsWrapperRef.current;
    if (!questionsWrapper) return;

    window.addEventListener("resize", handleResetExpectedHeightOnResize);
    return () => {
      window.removeEventListener("resize", handleResetExpectedHeightOnResize);
    };
  }, [
    questionsWrapperRef,
    resetExpectedHeight,
    setExpectedHeight,
    handleResetExpectedHeightOnResize,
  ]);

  useLayoutEffect(() => {
    const questionsWrapper = questionsWrapperRef.current;
    if (!questionsWrapper) return;

    resetExpectedHeight();
  }, [questionsWrapperRef, resetExpectedHeight]);

  return {
    expectedHeight,
  };
};
