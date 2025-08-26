import { ChevronDownIcon } from "@/assets/icons/ChevronDownIcon";
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon";
import { TwitterXIcon } from "@/assets/icons/TwitterXIcon";
import AnimateChangeInHeight from "@/components/shared/AnimateChangeInHeight";
import Button from "@/components/shared/Button";
import { ReportAuthor as ReportAuthorType } from "@/types/report";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tw-merge";

interface Props {
  author: ReportAuthorType;
}

const ReportAuthor = ({ author }: Props): JSX.Element => {
  const [isDescriptionShown, setIsDescriptionShown] = useState(false);

  const toggleDescription = () => setIsDescriptionShown((v) => !v);

  return (
    <LayoutGroup>
      <AnimateChangeInHeight
        duration={0.3}
        className="bg-white rounded-[32px] border border-dark-sea-storm/10 overflow-hidden"
      >
        <div className="flex flex-col gap-4 rounded-[32px] p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex rounded-full object-cover border border-gray overflow-hidden flex-shrink-0">
                <Image
                  className="block h-12 w-12"
                  src={author.photoUrl}
                  alt={author.name}
                  title={author.name}
                  height={48}
                  width={48}
                />
              </div>
              <div className="flex flex-col">
                <div className="font-bold">{author.name}</div>
                <div>{author.position}</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              {author.socials.linkedIn && (
                <Link
                  href={author.socials.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button styleType="ghost" isIconButton tag="div">
                    <LinkedInIcon className="h-6" />
                  </Button>
                </Link>
              )}
              {author.socials.twitterX && (
                <Link
                  href={author.socials.twitterX}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button styleType="ghost" isIconButton tag="div">
                    <TwitterXIcon className="h-6" />
                  </Button>
                </Link>
              )}
              <Button
                styleType="outlined"
                isIconButton
                onClick={toggleDescription}
              >
                <ChevronDownIcon
                  className={twMerge(
                    `h-6 transition-all duration-300 ${isDescriptionShown ? "rotate-0" : "rotate-180"}`,
                  )}
                />
              </Button>
            </div>
          </div>
          <AnimatePresence mode="sync">
            {isDescriptionShown && (
              <motion.div
                key="author-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.15 }}
              >
                {author.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </AnimateChangeInHeight>
    </LayoutGroup>
  );
};

export default ReportAuthor;
