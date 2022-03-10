import { useAppContext } from "../context/appContext";

export const Dashboard = () => {
  const { user } = useAppContext();

  return <h1>Dashboard page for {user && user.name}</h1>;
};
