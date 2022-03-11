import { Button, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link, Route, Switch, useHistory, useParams } from "react-router-dom";
import { userContext } from "../App";

const UserPageName = () => {
  const params = useParams();
  const history = useHistory();
  const user = useContext(userContext);

  useEffect(() => {
    if (params.username !== user) history.push("/products");
  }, [params.username]);

  return <Typography>{JSON.stringify(params)}</Typography>;
};

const UserPage = () => {
  const history = useHistory();

  return (
    <>
      <Typography variant="h1">Usuario</Typography>
      <Button
        variant="contained"
        onClick={() => {
          history.push("/products");
        }}
      >
        Home
      </Button>
      <br />
      <Link to="/user/name">User name</Link>
      <br />
      <Link to="/user/lastname">User lastname</Link>
      <Switch>
        <Route path="/user/name">
          <Typography variant="h2">Daniel</Typography>
        </Route>
        <Route path="/user/lastname">
          <Typography variant="h2">Villalba</Typography>
        </Route>
        <Route path="/user/:username" component={UserPageName} />
      </Switch>
    </>
  );
};

export default UserPage;
