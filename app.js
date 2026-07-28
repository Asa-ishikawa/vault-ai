const videoFile = document.getElementById("videoFile");
const video = document.getElementById("video");
const canvas = document.getElementById("outputCanvas");
const ctx = canvas.getContext("2d");

videoFile.addEventListener("change", () => {

    const file = videoFile.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    video.src = url;
    video.load();

});

video.addEventListener("loadeddata",()=>{

    canvas.width = video.clientWidth;

    canvas.height = video.clientHeight;

    video.play();

});

document.getElementById("detectBtn").addEventListener("click", () => {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";

    ctx.beginPath();

    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        40,
        0,
        Math.PI * 2
    );

    ctx.fill();

});