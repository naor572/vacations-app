import Button from "@mui/material/Button";
import axios from "axios";

export default function FollowUser(props) {
  const incrementFollow = async () => {
    try {
      const token = sessionStorage.getItem("tokenUser");
      await axios.get(
        `http://localhost:4100/vacations/AddFollow/${props.vacationId}`,
        {
          headers: { Authorization: token },
        }
      );
      props.getAllVacationUser();
    } catch (error) {
      console.log(error);
    }
  };

  const decrementFollow = async () => {
    try {
      const token = sessionStorage.getItem("tokenUser");
      await axios.get(
        `http://localhost:4100/vacations/Unfollow/${props.vacationId}`,
        {
          headers: { Authorization: token },
        }
      );
      props.getAllVacationUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>{"Followers: " + props.numOfFollowers}</p>
      {props.user_id && <Button onClick={decrementFollow}>Unfollow</Button>}
      {!props.user_id && <Button onClick={incrementFollow}>follow</Button>}
    </div>
  );
}
