

function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var x = canvas.getContext('2d');

        x.beginPath();
        x.strokeStyle = '#ffc34d';
        x.lineWidth = 25;
        x.arc(600,300,100,0,100);
        x.stroke();

        x.beginPath();
        x.fillStyle = '#ffcc00';
        x.arc(600,300,100,0,100);
        x.fill();

        x.fillStyle = '#ffffff';
        x.beginPath();  
        x.arc(560,293,30,0,100);
        x.fill();

        x.beginPath();
        x.arc(640,293,30,0,100);
        x.fill();

        x.fillStyle = '#000000';
        x.beginPath();
        x.arc(560,290,30,0,100);
        x.fill();

        x.beginPath();
        x.arc(640,290,30,0,100);
        x.fill();

        
        x.beginPath();
        x.fillStyle = 'white';
        x.ellipse(551, 283, 15, 20, Math.PI / 5, 0, 2 * Math.PI);
        x.fill();

        x.beginPath();
        x.fillStyle = 'white';
        x.ellipse(631, 283, 15, 20, Math.PI / 5, 0, 2 * Math.PI);
        x.fill();

        x.beginPath();
        x.fillStyle = 'white';
        x.ellipse(570, 305, 5, 8, Math.PI / 5, 0, 2 * Math.PI);
        x.fill();

        x.beginPath();
        x.fillStyle = 'white';
        x.ellipse(650, 305, 5, 8, Math.PI / 5, 0, 2 * Math.PI);
        x.fill();

        x.beginPath();
        x.strokeStyle = 'black';
        x.lineWidth = 7;
        x.moveTo(580,350);
        x.arcTo(600,330,640,390,20);
        x.stroke();

        x.beginPath();
        x.strokeStyle = 'black';
        x.lineWidth = 7;
        x.moveTo(580,350);
        x.arcTo(600,330,640,390,20);
        x.stroke();
//
        /*x.beginPath();
        x.strokeStyle = 'black';
        x.lineWidth = 2;
        x.moveTo(580,220);
        x.lineTo(540,260);
        x.lineTo(500,280);
        x.stroke();*/


        x.beginPath();
        x.strokeStyle = 'black';
        x.lineWidth = 6;
        x.moveTo(550,240);
        x.arcTo(540,260,490,280,50);
        x.stroke();
//
        /*x.beginPath();
        x.strokeStyle = 'black';
        x.lineWidth = 2;
        x.moveTo(650,220);
        x.lineTo(660,260);
        x.lineTo(690,280);
        x.stroke();*/


        x.beginPath();
        x.strokeStyle = 'black';
        x.lineWidth = 6;
        x.moveTo(650,240);
        x.arcTo(660,260,720,280,50);
        x.stroke();



    }
 }
        