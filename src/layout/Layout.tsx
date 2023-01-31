import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Main } from "../pages/Main/Main";
import { useStyles } from "./LayoutStyles";

export default function Layout() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}
