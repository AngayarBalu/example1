
var arrayBuf = []
function Recording(regno,value){
    const record = document.querySelector('.record');
    const stop = document.querySelector('.stop');
    const soundClips = document.querySelector('.sound-clips');
    const canvas = document.querySelector('.visualizer');
    const mainSection = document.querySelector('.main-controls');

    // disable stop button while not recording

    stop.disabled = true;

    // visualiser setup - create web audio api context and canvas

    let audioCtx;
    const canvasCtx = canvas.getContext("2d");

    //main block for doing the audio recording

    if (navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia supported.');

    const constraints = { audio: true };
    let chunks = [];

    let onSuccess = function(stream) {
        const mediaRecorder = new MediaRecorder(stream);

        visualize(stream);

        mediaRecorder.start();
        console.log(mediaRecorder.state);
        console.log("recorder started");
        record.style.background = "red";

        stop.disabled = false;
        record.disabled = true;


        stop.onclick = function() {
        mediaRecorder.stop();
        console.log(mediaRecorder.state);
        console.log("recorder stopped");
        record.style.background = "";
        record.style.color = "";
        // mediaRecorder.requestData();

        stop.disabled = true;
        record.disabled = false;
        }

        mediaRecorder.onstop = function(e) {
        console.log("data available after MediaRecorder.stop() called.");

        const clipName = prompt('Enter a name for your sound clip?','My unnamed clip');

        const clipContainer = document.createElement('article');
        const clipLabel = document.createElement('p');
        const audio = document.createElement('audio');
        audio.setAttribute('id',"record"+regno+""+value)
        const deleteButton = document.createElement('button');
        var link = document.createElement('a');


        clipContainer.classList.add('clip');
        audio.setAttribute('controls', '');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';

        if(clipName === null) {
            clipLabel.textContent = 'My unnamed clip';
        } else {
            clipLabel.textContent = clipName;
        }

        clipContainer.appendChild(audio);
        clipContainer.appendChild(clipLabel);
        clipContainer.appendChild(deleteButton);
        soundClips.appendChild(clipContainer);

        audio.controls = true;
        const blob = new Blob(chunks, { 'type' : 'audio/mpeg; codecs="mp3"' });
        var arrayBuffer;
        var fileReader = new FileReader();
        fileReader.onload = function() {
            arrayBuffer = this.result;
            arrayBuf = arrayBuffer;
            console.log(arrayBuffer)
            console.log(new DataView(arrayBuffer).getInt8(0))
            // alert(arrayBuffer)

            // localStorage.setItem("blobData"+regno+""+value,JSON.stringify(arrayBuffer))
        };
        fileReader.readAsArrayBuffer(blob);
        // var bData = atob(blob);
        // console.log('------ bData : ', bData);
        // const array = Uint8Array.from(bData, b => b.charCodeAt(0));

        // alert("byte array : " + array)
        // var byteArray = new Uint8Array(arrayBuffer);
        // alert("byte array : "+byteArray)
        chunks = [];

        // (async () => {
        //     // const blob = new Blob(chunks, { 'type' : 'audio/mpeg; codecs="mp3"' });
        //     const buf = await blob.arrayBuffer();
        //     console.log( buf.byteLength ); // 5
        //     console.log(buf)
        //   })();


        const audioURL = window.URL.createObjectURL(blob);
       
        // alert(audioURL)
        // // alert(regno)
        // // alert(value)
        // alert(typeof(audioURL))
       
        audio.src = audioURL;

        link.href = audioURL;

        console.log("recorder stopped");

       

        deleteButton.onclick = function(e) {
            let evtTgt = e.target;
            evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
            localStorage.setItem("blobData"+regno+""+value,null)
        }

        clipLabel.onclick = function() {
            const existingName = clipLabel.textContent;
            const newClipName = prompt('Enter a new name for your sound clip?');
            if(newClipName === null) {
            clipLabel.textContent = existingName;
            } else {
            clipLabel.textContent = newClipName;
            }
        }
        }

        mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
        alert(e.data)
        }
    }

    let onError = function(err) {
        console.log('The following error occured: ' + err);
    }

    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);

    } else {
    console.log('getUserMedia not supported on your browser!');
    }

    function visualize(stream) {
    if(!audioCtx) {
        audioCtx = new AudioContext();
    }

    const source = audioCtx.createMediaStreamSource(stream);

    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 2048;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);
    //analyser.connect(audioCtx.destination);

    draw()

    function draw() {
        const WIDTH = canvas.width
        const HEIGHT = canvas.height;

        requestAnimationFrame(draw);

        analyser.getByteTimeDomainData(dataArray);

        canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        canvasCtx.lineWidth = 2;
        canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

        canvasCtx.beginPath();

        let sliceWidth = WIDTH * 1.0 / bufferLength;
        let x = 0;


        for(let i = 0; i < bufferLength; i++) {

        let v = dataArray[i] / 128.0;
        let y = v * HEIGHT/2;

        if(i === 0) {
            canvasCtx.moveTo(x, y);
        } else {
            canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
        }

        canvasCtx.lineTo(canvas.width, canvas.height/2);
        canvasCtx.stroke();

    }
    }

    window.onresize = function() {
    canvas.width = mainSection.offsetWidth;
    }

    window.onresize();
}