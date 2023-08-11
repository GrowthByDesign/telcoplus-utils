type LocationsColProps = {
  title: string,
  largeTitle?: boolean,
  children: React.ReactNode,
}

const LocationsCol = ({ children, title, largeTitle }: LocationsColProps) => {

  const titleSize = largeTitle ? "tw-text-2xl" : "tw-text-xl"

  return (
    <div className="tw-flex tw-flex-col tw-gap-2">
      <div className={`tw-font-semibold ${titleSize}`}>{title}</div>
      {children}
    </div>
  )
}

export default LocationsCol;
