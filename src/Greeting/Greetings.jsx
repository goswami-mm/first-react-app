import s from "./sytle.module.css";

export function Greetings(props) {
  return (
    <>
      <ul>
        <li className={s.box}>Hello</li>
        <li>World</li>
        <li>{props.name}</li>
      </ul>
      {props.image}
      <br />
      {props.children}
    </>
  );
}
