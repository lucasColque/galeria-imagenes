//Constantes para IDs y clases
    const progress = document.getElementById('progress');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const circles = document.querySelectorAll('.circle');
    const image = document.getElementById('img');



    // let img = '0%';


//Datos de las imagenes y su progreso
    const imagesData = [
        {src:'./assets/1.jpg', alt:'Dr Stone'},
        {src:'./assets/2.jpg', alt:'Dr Stone'},
        {src:'./assets/3.jpg', alt:'Dr Stone'},
        {src:'./assets/4.jpg', alt:'Dr Stone'}
    ];
    const totalImages = imagesData.length;


    // image.setAttribute('alt','Dr Stone');
    // image.setAttribute('src','./assets/1.jpg');
    // console.log(`Longitud del nodo circulos = ${circles.length}`);
    // console.log(circles);


//Funcion para manejar el boton "next"
    const handleNext = ()=>{
        currentActive++;
        
        if(currentActive > circles.length){
            currentActive = circles.length;
        }
        update();
    }
//Funcion para manejar el boton "prev"
    const handlePrev = ()=>{
        currentActive--;
        if(currentActive < 1){
            currentActive = 1;
        }
        update();
    }
//Funcion para updatear en el inicio y cada vez que toco boton
    const update = ()=> {
        circles.forEach((circle,idx)=>{
            if(idx < currentActive){
                circle.classList.add('active');
            }else{
                circle.classList.remove('active');
            }
        })
        const actives = document.querySelectorAll('.active');
        const progressWidth = ((actives.length - 1)/(circles.length - 1) * 100).toFixed(0);
    
        progress.style.width = `${progressWidth}%`;

        const currentImageData = imagesData[currentActive - 1]

        image.setAttribute('alt',currentImageData.alt);
        image.setAttribute('src',currentImageData.src);
        
        prev.disabled = currentActive === 1;
        next.disabled = currentActive === circles.length;
    }
//Events Listeners
    next.addEventListener('click',handleNext);
    prev.addEventListener('click',handlePrev);

//Inicializacion
    let currentActive = 1;
    update();    