import { CommonReport } from "@/types/report";

interface Props {
  report: CommonReport;
}

const ReportFooter = ({ report }: Props): JSX.Element => {
  return (
    <div className="flex flex-col p-8 gap-6 border border-bluish-gray rounded-[32px]">
      {report.footer.map((item, index) => {
        const isLastIndex = index === report.footer.length - 1;

        return (
          <>
            <div
              key={index}
              className="flex gap-2 flex-col text-left text-dark-sea"
            >
              {item.icon && <div className="mb-2">{item.icon}</div>}
              <span>{item.description}</span>
            </div>
            {!isLastIndex && <hr className="border-t border-bluish-gray" />}
          </>
        );
      })}
    </div>
  );
};

export default ReportFooter;
