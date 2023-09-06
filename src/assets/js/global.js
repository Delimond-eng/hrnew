$(function () {
  "use strict";

  const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
  );
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );

  new PerfectScrollbar(".contact-sidebar-body", {
    suppressScrollX: true,
  });

  new PerfectScrollbar(".contact-content-body", {
    suppressScrollX: true,
  });
});
