export default {
  install: (app, opt) => {
    app.config.globalProperties.$closeBsModal = (modalId) => {
      $(`#${modalId}`).modal("hide");
    };
    app.config.globalProperties.$showBsModal = (modalId) => {
      $(`#${modalId}`).modal("show");
    };
  },
};
