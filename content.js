function getAllParticipantNamesString() {
    let allParticipantNames = "";

    const tagsWithParticipantNamesIterable = window.document.querySelectorAll(".ZjFb7c");
    for (let i = 0; i < tagsWithParticipantNamesIterable.length; i++) {
        allParticipantNames += `${tagsWithParticipantNamesIterable[i].innerText}\n`;
    }
    return allParticipantNames;
}

function createFileDownload(filename, text) {
    let anchorElement = document.createElement('a');

    anchorElement.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    anchorElement.setAttribute('download', filename);
    anchorElement.style.display = 'none';

    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  }

createFileDownload("participants.txt",  getAllParticipantNamesString());


