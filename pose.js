// =========================
// 跳び箱AI Pose
// Version1
// =========================

function startPose(video, canvas, ctx){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="lime";

    ctx.beginPath();

    ctx.arc(

        canvas.width/2,

        canvas.height/2,

        40,

        0,

        Math.PI*2

    );

    ctx.fill();

}