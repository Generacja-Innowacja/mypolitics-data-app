import { QUESTION_ELEMENT_DATA_ID } from "../ReportQuestionSelectorConstants";

export const scrollQuestionIntoView = (questionId: string) => {
  const questionElement = document.querySelector(
    `[data-${QUESTION_ELEMENT_DATA_ID}='${questionId}']`,
  );
  if (!questionElement) {
    return;
  }

  const { scrollX, scrollY } = window;
  questionElement.scrollIntoView({ behavior: "smooth", inline: "center" });
  window.scroll(scrollX, scrollY);
};
