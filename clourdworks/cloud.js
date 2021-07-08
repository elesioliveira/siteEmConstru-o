
//ScrollReveal
window.sr = ScrollReveal ();
sr.reveal ('.navbar-brand',{
    duration : 2000,
    origin:'left',
    distance: '240px'
});
 sr.reveal ('.nav-a',{
    duration:2000,
    origin:'top',
    distance:'300px'
});
sr.reveal ('.nav-b',{
    duration:2500,
    origin:'top',
    distance:'300px'
});
sr.reveal ('.nav-c',{
    duration:3000,
    origin:'top',
    distance:'300px'
});
sr.reveal ('.nav-d',{
    duration:3500,
    origin:'top',
    distance:'300px'
});

//Logo //
let img = document.getElementById('logo')

function trocaLogo () {
    img.src = '/icon/nemColorida.png'
}

function voltaLogo () {
    img.src = '/icon/nuvemPreto.png'
}


img.addEventListener('mouseenter', trocaLogo)
img.addEventListener('mouseleave', voltaLogo)