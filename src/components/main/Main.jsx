import "./Main.scss";

function Main(props) {
  const { children } = props;
  return <main className="Main container mx-auto p-5  bg-[url('assets/img/jiu-jitsu-.jpg')]">{children}</main>;
}

export { Main };
