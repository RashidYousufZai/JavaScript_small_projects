Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
  faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
]).then(startVideo);

function startVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      const video = document.createElement("video");
      video.srcObject = stream;
      video.autoplay = true;
      video.addEventListener("loadeddata", function () {
        const canvas = faceapi.createCanvasFromMedia(video);
        document.body.append(canvas);
        const displaySize = {
          width: video.videoWidth,
          height: video.videoHeight,
        };
        faceapi.matchDimensions(canvas, displaySize);

        // Load the glasses image
        const glassesImage = new Image();
        glassesImage.src = "glasses.png";

        glassesImage.onload = function () {
          setInterval(async function () {
            const detections = await faceapi
              .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
              .withFaceLandmarks();
            const resizedDetections = faceapi.resizeResults(
              detections,
              displaySize
            );
            canvas
              .getContext("2d")
              .clearRect(0, 0, canvas.width, canvas.height);
            faceapi.draw.drawDetections(canvas, resizedDetections);
            faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);

            // Overlay glasses on the detected faces
            resizedDetections.forEach((detection) => {
              const { landmarks } = detection;
              const glassesWidth =
                landmarks.getRightEye()[0].x - landmarks.getLeftEye()[0].x;
              const glassesHeight =
                glassesWidth * (glassesImage.height / glassesImage.width);

              const topLeft = landmarks.getLeftEye()[0];
              const glassesX = topLeft.x - glassesWidth * 0.15; // Adjust position for better alignment
              const glassesY = topLeft.y - glassesHeight * 0.3; // Adjust position for better alignment

              canvas
                .getContext("2d")
                .drawImage(
                  glassesImage,
                  glassesX,
                  glassesY,
                  glassesWidth * 1.3,
                  glassesHeight * 1.3
                );
            });
          }, 100);
        };
      });
    })
    .catch(function (error) {
      console.log("Error accessing the camera: " + error);
    });
}
