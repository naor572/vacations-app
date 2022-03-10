import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

const EditAndDelete = (props) => {
  const styleLink = {
    margin: "10px",
  };
  return (
    <div>
      <p>{"Followers:" + `${props.numOfFollowers}`}</p>
      <Link to={`/vacation/admin/delete/${props.vacationId}`}>Delete</Link>
      <Link style={styleLink} to={`/vacation/admin/edit/${props.vacationId}`}>
        Edit
      </Link>
    </div>
  );
};

export default EditAndDelete;
