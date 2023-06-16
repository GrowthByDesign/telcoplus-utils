import Button from "../(components)/Button";

const TopBar = () => {
  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-text-xs tw-font-semibold tw-text-brandingBlue-400 md:tw-justify-end md:tw-text-sm">
      <Button
        text="espanol"
        link="#"
        variant={true}
        wrapperClass="tw-hidden md:tw-flex "
      />
      <div>ROUTING NO:311985791</div>
      <a href="tel:+9037535588">(903) 753-5588</a>
    </div>
  );
};

export default TopBar;
