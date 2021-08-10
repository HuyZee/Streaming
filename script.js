const videoElement = document.getElementById("video");
const startButton = document.getElementById("button");
const requestButton = document.getElementById("request-button");

// Prompt to select a media stream, pass to the video element, then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=> {
            videoElement.play();
        }
    }catch(error){
        alert(e);
    }
}

startButton.addEventListener("click", async () => {
    // Disable button
    startButton.disabled = true;
    //Start Picture in Picture
    await videoElement.requestPictureInPicture();
    //Reset button
    startButton.disabled = false;
}) 

requestButton.addEventListener("click", async ()=>{
    await selectMediaStream();
    requestButton.disabled = true;
    requestButton.hidden = true;
    startButton.hidden = false;
})
