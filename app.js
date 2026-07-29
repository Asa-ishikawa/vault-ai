import {
  PoseLandmarker,
  FilesetResolver
} from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

async function initAI(){

    const vision = await FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    const poseLandmarker = await PoseLandmarker.createFromOptions(
        vision,
        {
            baseOptions:{
                modelAssetPath:
                    "https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/latest/pose_landmarker_lite.task"
            },
            runningMode:"VIDEO",
            numPoses:1
        }
    );

    console.log("MediaPipe初期化成功");

}

initAI();