import { Route, useParams } from "react-router-dom";

const Welcome = () => {
  const params = useParams();

  return (
    <div>
      <h1>This is Welcome Page.</h1>
      <Route path="/welcome/new-user">
        <p>Welcome , New User!</p>
      </Route>
    </div>
  );
};

export default Welcome;
