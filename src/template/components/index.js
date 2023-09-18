import BBtn from "./src/bs__button";
import DataLoading from "./src/data__loading";
import FpIcon from "./src/fp_icon";
import ScanModal from "@/template/view/pages/public/modals/scannig.modal";
export default {
  install: (app, opt) => {
    app.component("bs-button", BBtn);
    app.component("data-loading", DataLoading);
    app.component("fp-icon", FpIcon);
    app.component("scan-modal", ScanModal);
  },
};
