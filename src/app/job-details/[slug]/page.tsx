import { notFound } from "next/navigation";
import FooterSection from "~/app/_components/footer1";
import NavigationSection from "../../_components/navigation1";
import YourJourney from "~/app/_components/study-abroad/your-journey";
import JobInfo from "~/app/_components/job-details/info";
import ApplyForm from "~/app/_components/job-details/ApplyForm";
import { jobData } from "~/app/_components/job-details/jobData"; // move jobData here

type Props = {
  params: {
    slug: string;
  };
};

export default function JobDetailsPage({ params }: Props) {
  const decodedTitle = decodeURIComponent(params.slug);
  const job = jobData.find((j) => j.title === decodedTitle);

  if (!job) return notFound();

  return (
    <>
      <NavigationSection />
      <JobInfo job={job} />
      <ApplyForm />
      <YourJourney />
      <FooterSection />
    </>
  );
}
