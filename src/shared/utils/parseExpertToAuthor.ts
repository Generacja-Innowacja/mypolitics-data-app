import { ReportExpert } from "@/types/models/reportData";
import { ReportAuthor } from "@/types/report";

export const parseExpertToAuthor = (expert: ReportExpert): ReportAuthor => ({
  name: expert.person.name,
  position: expert.person.role,
  description: expert.person.description,
  photoUrl: expert.person.imageUrl,
  socials: {},
  organisation: {
    name: expert.organisation.name,
    imageUrl: expert.organisation.imageUrl,
    description: expert.organisation.description,
    websiteUrl: expert.organisation.websiteUrl,
  },
});
