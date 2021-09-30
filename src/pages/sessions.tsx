import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSessionsAction } from "../redux/action/sessions";
// import faker from "faker";

function Sessions() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionsAction([]));
  }, [dispatch]);
  const sessions = useSelector((state: any) => state.sessions);

  console.log("sessions :>> ", sessions);

  return <div>Sessions Page</div>;
}

export default Sessions;
