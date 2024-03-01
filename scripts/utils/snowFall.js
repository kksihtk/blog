let HeaderCanvas = document.createElement('canvas');
HeaderCanvas.id = 'snowfall';
let Header = document.getElementById('header')
Header.appendChild(HeaderCanvas);



const canvas = document.getElementById('snowfall');
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        const snowflakes = [];
        const numberOfSnowflakes = 250;
        function generateSnowflakes() {
            for(let i = 0; i < numberOfSnowflakes; i++) {
                snowflakes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    radius: Math.random() * 0.5 + 1,
                    speed: Math.random() + 0.5
                });
            }
        }
        function drawSnowflakes() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = "#FFF";
            ctx.beginPath();
            for (let i = 0; i < numberOfSnowflakes; i++) {
                const snowflake = snowflakes[i];
                ctx.moveTo(snowflake.x, snowflake.y);
                ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2, true);
            }
            ctx.fill();
            moveSnowflakes();
        }
        function moveSnowflakes() {
            for (let i = 0; i < numberOfSnowflakes; i++) {
                const snowflake = snowflakes[i];
                snowflake.y += snowflake.speed;
                if (snowflake.y > height) {
                    snowflake.y = -5;
                }
            }
        }
        function animateSnowflakes() {
            drawSnowflakes();
            requestAnimationFrame(animateSnowflakes);
        }

        window.addEventListener('resize', function() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            snowflakes.length = 0;
            generateSnowflakes();
        });

        // generateSnowflakes();
        // animateSnowflakes();
        