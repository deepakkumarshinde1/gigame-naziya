import { useParams } from "react-router-dom";

export function withParams(Component) {
  return (props) => {
    let { id } = useParams();
    props[id] = id;
    return <Component {...props} />;
  };
}
