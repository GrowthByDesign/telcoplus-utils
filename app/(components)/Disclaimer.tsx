type DisclaimerProps = {
  children: React.ReactNode
}

const Disclaimer = ({ children }: DisclaimerProps) => {
  return (
    <small className="tw-text-sm tw-italic">{children}</small>
  )
}

export default Disclaimer
