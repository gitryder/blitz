let btnGetPresentees = document.getElementById('btn_get_absentees');
let btnDownloadTxt = document.getElementById('btn_download_txt');

btnDownloadTxt.onclick = function() {
    chrome.tabs.executeScript({
        file: 'content.js'
    });
}