import { useNavigate as _useNaevigate } from "react-router-dom";
export const useNavigate = () => {
  const navigate = _useNaevigate();

  return (path: any) => {
    navigate(path);
  }
}