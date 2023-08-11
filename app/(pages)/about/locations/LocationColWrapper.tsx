type LocationColWrapperProps = {
  children: React.ReactNode,
}

const LocationColWrapper = ({ children }: LocationColWrapperProps) => {
  return (
    <div className="tw-flex tw-flex-col tw-gap-8 lg:tw-mx-auto">{children}</div>
  )
}

export default LocationColWrapper;
