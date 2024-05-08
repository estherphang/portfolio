import { useParams } from "react-router-dom";

export default function IndividualCodProject() {
  const { url } = useParams();

  //tanstack

  return <div>indidivual page - {url}</div>;
}
