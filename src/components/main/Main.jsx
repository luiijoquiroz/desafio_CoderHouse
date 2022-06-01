import "./Main.scss";

function Main(props) {
  const { children } = props;
  return <main className="Main container mx-auto p-5">{children}</main>;
}

export { Main };
