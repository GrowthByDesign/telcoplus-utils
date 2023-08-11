import MainBranch from "./(branches)/MainBranch";
import TylerBroadway from "./(branches)/TylerBroadway";

const Locations = () => {
  return (
    <div>
      <MainBranch />
      <TylerBroadway />
      <div className="tw-text-lg tw-font-semibold">*Closed on Saturdays that fall in a 3 day holiday weekend schedule. Please see Closed Schedule.</div>
    </div >
  )
}

export default Locations;
