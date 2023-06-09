type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return <div className="container-de">{children}</div>;
};

export default Container;
