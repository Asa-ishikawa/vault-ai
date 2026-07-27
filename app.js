const videoFile=document.getElementById("videoFile");
const video=document.getElementById("video");

videoFile.addEventListener("change",()=>{

    const file=videoFile.files[0];

    if(!file) return;

    const url=URL.createObjectURL(file);

    video.src=url;

});

document.getElementById("detectBtn").addEventListener("click",()=>{

    alert("次回からAI骨格検出を追加します。");

});