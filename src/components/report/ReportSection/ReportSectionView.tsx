interface Props {
    title: string | JSX.Element;
    children?: JSX.Element | string;
}

const ReportSection = ({ title, children }: Props): JSX.Element => {
    return (
        <section className="bg-white rounded-[48px] border border-gray w-full">
            <h1 className="p-6 text-xl font-bold w-full text-center">{title}</h1>
            <div className="p-6 w-full bg-gray rounded-[48px]">
                {children}
            </div>
        </section>
    )
}

export default ReportSection;
