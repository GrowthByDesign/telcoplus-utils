import Container from "@/app/(components)/Container";
import MainBranch from "./(branches)/MainBranch";
import ContentSection from "@/app/(components)/ContentSection";

const Locations = () => {
  return (
    <div>
      <MainBranch />
      <div className="tw-text-lg tw-font-semibold">*Closed on Saturdays that fall in a 3 day holiday weekend schedule. Please see Closed Schedule.</div>
    </div >
  )
}

export default Locations;
