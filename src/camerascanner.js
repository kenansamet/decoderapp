import * as UI from "./ui";
import * as QR from "./qr";

// Scan button
window.addEventListener("load", (event) => {
  const scanButton = document.getElementById("start-scan");
  scanButton.addEventListener("click", (event) => {
    UI.setProgressText("Loading scanner");
    QR.scanner
      .start()
      .then(() => {
        UI.reset();
        UI.hideQRCanvas();
        UI.scanner.hidden = false;
        UI.setProgressText("Awaiting for scan results");
      })
      .catch((err) => {
        UI.hideProgress();
        //UI.showErrorMessage(`You may need to grant camera access on the ${window.location.hostname} domain from your browser's settings.`, err)
        alert(
          err +
            "\n\nNote: If this device has a working camera, you may need to grant camera access to this page. Check the site permissions. Camera streams also require an HTTPS connection"
        );
      });
  });
});
