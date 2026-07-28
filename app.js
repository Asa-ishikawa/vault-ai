// =========================
// 跳び箱AI採点システム
// app.js
// =========================

const videoFile = document.getElementById("videoFile");
const video = document.getElementById("video");
const canvas = document.getElementById("outputCanvas");
const ctx = canvas.getContext("2d");
const status = document.getElementById("status");

// ------------------------
// 動画を選択
// ------------------------

videoFile.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    video.src = url;

    video.load();

});

// ------------------------
// 動画の準備完了
// ------------------------

video.addEventListener("loadeddata", function () {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    canvas.style.width = video.clientWidth + "px";
    canvas.style.height = video.clientHeight + "px";

    status.textContent = "動画の読み込み完了";

});

// ------------------------
// 骨格検出開始
// ------------------------

document.getElementById("detectBtn").addEventListener("click", function () {

    if (!video.src) {

        alert("先に動画を選択してください。");

        return;

    }

    status.textContent = "AI解析中...";

    startPose(video, canvas, ctx);

});