import * as riot from "riot";
import home from "./components/home.riot";
import "./style.css";

const mountApp = riot.component(home);

const app = mountApp(document.getElementById("root"), {});
