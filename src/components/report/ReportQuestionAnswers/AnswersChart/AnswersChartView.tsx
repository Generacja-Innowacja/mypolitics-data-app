import { ReportAnswer } from "@/types/models/reportData";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getAnswerColor } from "../../utils/getAnswerColor";

ChartJS.register(ArcElement, Tooltip);

interface Props {
    answers: ReportAnswer[];
}

const AnswersChart = ({ answers }: Props): JSX.Element => {
    const data = {
        responsive: true,
        labels: answers.map(a => a.text),
        datasets: [{
            data: answers.map(a => a.value),
            backgroundColor: answers.map((answer, index) => getAnswerColor(answer, index)),
            hoverOffset: 4
        }]
    };

    return (
        <div className="hidden sm:block h-[128px] md:h-[196px]">
            <Doughnut className="h-full" data={data} />
        </div>
    )
}

export default AnswersChart;
