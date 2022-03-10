import { useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import WrongUrl from "../dddd/WrongUrl";
const RouterApp = () => {
  const linksList = useSelector((state) => state.links.value);
  return (
    <div>
      <Routes>
        {linksList.map((element, index) => {
          const { path, exact } = element;
          return (
            <Route
              key={"route" + index}
              path={path}
              element={<element.component />}
            />
          );
        })}
        <Route path="*" element={<WrongUrl />}></Route>
      </Routes>
    </div>
  );
};

export default RouterApp;
