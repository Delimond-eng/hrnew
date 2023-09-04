import BBtn from "./src/bs__button";
import DataLoading from "./src/data__loading";
export default {
  install: (app, opt) => {
    app.component("bs-button", BBtn);
    app.component("data-loading", DataLoading);
  },
};
