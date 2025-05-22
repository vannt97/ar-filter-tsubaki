var blob;
var videoURL;
var canvasUnity;
var mediaRecorder = null;
var mediaStream = null;
var video = document.querySelector("video");
var containerType = "video/webm";

function NativeSetCanvasRecorder() {
    console.log("native set canvas <<<<<<<<<<<<<<<<<<");
    canvasUnity = document.querySelector("#unity-canvas");
}

function PlayAudio(id) { console.log("try to play audio "+id); }
function StopAudio(id) { console.log("try to pause audio "+id); }
function getMediaStream() {// Capture canvas stream only (no audio)
    const canvas = document.querySelector("#unity-canvas");
    return canvas.captureStream(30); // 30 FPS video-only
}
function isIOS() {
  const userAgent = navigator.userAgent.toLowerCase();
  return /iphone|ipod|ipad/.test(userAgent);
}
function createMediaRecorder() {// Create MediaRecorder for video only
    if(mediaStream == null) { mediaStream = getMediaStream(); }
    if (isIOS()){
        if (MediaRecorder.isTypeSupported('video/mp4')) {//Safari 14.0.2 has an EXPERIMENTAL version of MediaRecorder enabled by default
            containerType = "video/mp4";
            var options = {mimeType: 'video/mp4'};
        }
    }
    else{
        if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) { var options = {mimeType: 'video/webm;codecs=vp9'}; }
        else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) { var options = {mimeType: 'video/webm;codecs=h264'}; }
        else if (MediaRecorder.isTypeSupported('video/webm')) { var options = {mimeType: 'video/webm'}; }
        else if (MediaRecorder.isTypeSupported('video/mp4')) {//Safari 14.0.2 has an EXPERIMENTAL version of MediaRecorder enabled by default    
            containerType = "video/mp4";
            var options = {mimeType: 'video/mp4'};
        }
    }
    mediaRecorder = new MediaRecorder(mediaStream, options);
    console.log("MediaRecorder created:", mediaRecorder);
}
function mediaStart() {// Start recording
    console.log("!!!!!!!!!!!!!!start recording is called");
    if (!mediaRecorder) createMediaRecorder();
    const chunks = [];
    mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.onstop = () => {
        blob = new Blob(chunks, { type: mediaRecorder.mimeType });
        videoURL = URL.createObjectURL(blob);
        if (typeof window.NativeSendBlobUrl !== "undefined") { window.NativeSendBlobUrl(videoURL); }        
    };
    mediaRecorder.start();
    console.log("Recording started");
}
function mediaStop() {// Stop recording
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        console.log("Recording stopped");
    }    
}
function downloadVideo() {// Optional: Download video manually
    const link = document.createElement("a");
    link.download = containerType === "video/mp4" ? "video-recording.mp4" : "video-recording.webm";
    link.href = videoURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function GetBlobUrl(){    
    if (videoURL) { window.NativeSendBlobUrl(videoURL); }
    else { console.warn("no blobUrl"); }
}
