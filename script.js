function spinWheel() {
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#F0DB4F', '#E94E77', '#4F86F7', '#6EC1E4', '#5ABDA6', '#FFCC66', '#FF6B6B', '#C0C0C0'];
    const segments = ['BTC', 'PEPE', 'USDT', 'USDC', 'TON', 'NOT', 'CBD', 'STAR', 'FLOKI'];
    const startAngle = 0;
    const arc = Math.PI / (segments.length / 2);

    let currentAngle = 0;
    let spinSpeed = 10; // Tốc độ quay ban đầu
    const spinTimeTotal = 3000; // Thời gian quay
    const spinTime = 0;

    function rotateWheel() {
        currentAngle += spinSpeed;
        spinSpeed *= 0.97; // Giảm tốc dần

        drawWheel(currentAngle);

        if (spinSpeed > 0.1) {
            requestAnimationFrame(rotateWheel);
        } else {
            setTimeout(() => {
                const index = Math.floor((currentAngle / 360) % segments.length);
                alert('Bạn đã trúng: ' + segments[index]);
            }, 500);
        }
    }

    rotateWheel();
}

function drawWheel(currentAngle) {
    const canvas = document.getElementById('wheelCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#F0DB4F', '#E94E77', '#4F86F7', '#6EC1E4', '#5ABDA6', '#FFCC66', '#FF6B6B', '#C0C0C0'];
    const segments = ['BTC', 'PEPE', 'USDT', 'USDC', 'TON', 'NOT', 'CBD', 'STAR', 'FLOKI'];
    const arc = Math.PI / (segments.length / 2);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < segments.length; i++) {
        const angle = currentAngle + i * arc;
        ctx.fillStyle = colors[i % colors.length];
        ctx.beginPath();
        ctx.arc(150, 150, 150, angle, angle + arc, false);
        ctx.lineTo(150, 150);
        ctx.fill();

        ctx.save();
        ctx.translate(150 + Math.cos(angle + arc / 2) * 100, 150 + Math.sin(angle + arc / 2) * 100);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Arial';
        ctx.fillText(segments[i], -ctx.measureText(segments[i]).width / 2, 0);
        ctx.restore();
    }
}

document.getElementById('spinButton').addEventListener('click', spinWheel);
document.addEventListener('DOMContentLoaded', () => drawWheel(0));
