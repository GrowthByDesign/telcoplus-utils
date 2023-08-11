type LinkTextProps = {
  label: string,
  href: string,
}

const LinkText = ({ label, href }: LinkTextProps) => {
  return (
    <a className="tw-text-brandingBlue-400 hover:tw-underline" href={href}>{label}</a>
  )
}

export default LinkText;
