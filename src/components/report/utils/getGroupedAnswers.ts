import { STANDARD_GROUP_ANSWERS } from "@/constants/report";
import { ReportAnswer } from "@/types/models/reportData";

export const getGroupedAnswers = (answers: ReportAnswer[]): ReportAnswer[] => {
    const groupedAnswers: Record<string, ReportAnswer[]> = {};

    for (const answer of answers) {
        const groupNameAnswers = Object.entries(STANDARD_GROUP_ANSWERS).find(([, values]) => values.includes(answer.text));
        if (!groupNameAnswers) {
            groupedAnswers[answer.text] = [answer];
            continue;
        }

        const [groupName] = groupNameAnswers;
        if (groupedAnswers[groupName]) {
            groupedAnswers[groupName] = [...groupedAnswers[groupName], answer];
        } else {
            groupedAnswers[groupName] = [answer];
        }
    }

    return Object.entries(groupedAnswers).map(([groupName, groupAnswers]) => ({
        id: groupAnswers.reduce((ids, answer): string => [ids, answer.id].join("-"), ""),
        text: groupName,
        value: groupAnswers.reduce((sum, answer) => sum + answer.value, 0),
    }))
}