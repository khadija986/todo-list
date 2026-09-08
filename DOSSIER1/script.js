var btn = document.querySelector('.btn');
var textarea = document.getElementById('textarea');
var tachesection = document.querySelector('.taches');
var finished = document.querySelector('.finished');
btn.onclick = function(){
    if(textarea.value != ""){
        var tache = document.createElement('li')
        //lorsque le contenu de l'input n'est pas vide, creer un element p qui serra la tache
    //reduire l'element a la meme valeur que ce qui est dans l'input
    tache.innerText = textarea.value;
    tache.classList.add('tache');
    //mettre le paragraphe dans la section tache
    tachesection.appendChild(tache);
    //vider l'input quand on appuie sur plus
    textarea.value = "";
    //déplacer la tache dans la section finished
    tache.onclick = function(){
      
      finished.appendChild(tache);
      tache.classList.remove('tache');
      tache.classList.add('tachefinie');
     
    }};
   
    };
    
    
   