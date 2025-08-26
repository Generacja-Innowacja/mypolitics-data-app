import { twMerge } from "tw-merge";

interface Props {
  className?: string;
}

const Skeleton = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={twMerge(
        `bg-white rounded-full dark:bg-gray-hover animate-pulse ${className}`,
      )}
    />
  );
};

export default Skeleton;
