import { ReportAnswer } from "@/types/models/reportData";
import { useWindowWidth } from '@react-hook/window-size';
import { ArcElement, Chart as ChartJS } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { getAnswerColor } from "../../utils/getAnswerColor";

ChartJS.register(ArcElement);

interface Props {
    answers: ReportAnswer[];
}

const AnswersChart = ({ answers }: Props): JSX.Element => {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 768;
    const chartSize = isMobile ? 128 : 196;

    const data = {
        responsive: true,
        labels: answers.map(a => a.text),
        datasets: [{
            data: answers.map(a => a.value),
            backgroundColor: answers.map((answer, index) => getAnswerColor(answer, index)),
            hoverOffset: 4
        }],
    };

    return (
        <div className="hidden sm:block h-[128px] w-[128px] md:h-[196px] md:w-[196px]">
            <Doughnut height={chartSize} width={chartSize} data={data} />
        </div>
    )
}

export default AnswersChart;
