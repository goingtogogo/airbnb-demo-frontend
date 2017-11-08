import React from "react";
import { Link, Title, Links } from "./Styled";

export function List(props) {
  const links = props.links;
  const linksItems = links.map(link => <Link href={props.hrefs}>{link}</Link>);
  return (
    <div>
      <Title>{props.title}</Title>
      <Links>{linksItems}</Links>
    </div>
  );
}
export default function(props) {
  return List(props);
}
