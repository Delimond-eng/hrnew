export default {
  install: (app, opt) => {
    /**
     * @var Swal Global sweetalert static instance
     * */
    window.Swal = app.config.globalProperties.$swal;

    app.config.globalProperties.$closeBsModal = (modalId) => {
      $(`#${modalId}`).on("hidden.bs.modal", function (e) {
        $(this).removeClass(function (index, className) {
          return (className.match(/(^|\s)effect-\S+/g) || []).join(" ");
        });
      });
      $(`#${modalId}`).modal("hide");
    };
    app.config.globalProperties.$showBsModal = (modalId, animation) => {
      $(`#${modalId}`).on("show.bs.modal", function (event) {
        $(this).addClass(`${animation}`);
      });
      $(`#${modalId}`).modal("show");
    };

    app.config.globalProperties.$showFailMessage = () => {
      Swal({
        icon: "warning",
        title: "Echec".toUpperCase(),
        text: "Une erreur est survenue lors de l'envoie des données au serveur, veuillez réessayer ultérieurement !",
        showConfirmButton: false,
        showCancelButton: false,
        timer: 4000,
      });
    };
    app.config.globalProperties.$showSuccessMessage = (message) => {
      Swal({
        icon: "success",
        title: "Succès".toUpperCase(),
        text: message,
        showConfirmButton: false,
        showCancelButton: false,
        timer: 4000,
      });
    };
  },
};
