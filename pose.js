// =========================
// MediaPipe Pose
// =========================

let pose;

// 初期化
function startPose(video, canvas, ctx){

    const status = document.getElementById("status");

    status.textContent = "AIを初期化しています...";

    pose = new Pose({

        locateFile: (file) => {

            return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;

        }

    });

    pose.setOptions({

        modelComplexity:1,

        smoothLandmarks:true,

        enableSegmentation:false,

        smoothSegmentation:false,

        minDetectionConfidence:0.5,

        minTrackingConfidence:0.5

    });

    pose.onResults((results)=>{

        drawPose(results,canvas,ctx);

    });

    analyzeVideo(video);

}
// =========================
// 動画解析
// =========================

async function analyzeVideo(video){

    while(true){

        if(video.paused || video.ended){

            await new Promise(r=>setTimeout(r,30));

            continue;

        }

        await pose.send({

            image:video

        });

    }

}
// =========================
// 骨格描画
// =========================

function drawPose(results,canvas,ctx){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if(!results.poseLandmarks){

        return;

    }

    for(const landmark of results.poseLandmarks){

        ctx.beginPath();

        ctx.arc(

            landmark.x*canvas.width,

            landmark.y*canvas.height,

            5,

            0,

            Math.PI*2

        );

        ctx.fillStyle="red";

        ctx.fill();

    }

}