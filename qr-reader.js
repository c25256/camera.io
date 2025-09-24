function onScanSuccess(decodedText, decodedResult) {
    document.getElementById('result').innerText = `読み取り結果: ${decodedText}`;
    html5QrcodeScanner.clear();
  }
  
  function onScanFailure(error) {
    // console.warn(`読み取り失敗: ${error}`);
  }
  
  let html5QrcodeScanner = new Html5Qrcode("reader");
  html5QrcodeScanner.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    onScanSuccess,
    onScanFailure
  ).catch(err => {
    console.error(`カメラ起動失敗: ${err}`);
  });
  
