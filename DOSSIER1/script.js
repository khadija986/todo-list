var btn = document.querySelector('.btn');
var textarea = document.getElementById('textarea');
var tachesection = document.querySelector('.taches');
var finished = document.querySelector('finished');
btn.onclick = function(){
    if(textarea.value != ""){
        var tache = document.createElement('li')
        //lorsque le contenu de l'input n'est pas vide, creer un element p qui serra la tache
    //reduire l'element a la meme valeur que ce qui est dans l'input
    tache.innerText = textarea.value;
    tache.classList.add('tache');
    //mettre le paragraphe dans la section tache
    tachesection.appendChild(tache);
     //mettre le paragraphe dans la section finished quand on clique dessus
     tache.addEventListener('click',function(){
      var tachefinie = document.createElement('li');
      var poubelle = document.createElement('span');
      poubelle.innerHTML = '<i class="bx bx-trash"></i>';
       poubelle.addEventListener('click',function(event){
        event.stopPropagation();
        tachefinie.innerText = "";
      });
      poubelle.classList.add('poubelle');
      tachefinie.appendChild(poubelle);
      tachefinie.innerText = tache.innerText;
      finished.appendChild(tachefinie);
      tachefinie.classList.add('tachefinie');
      tache.innerText = "";
     
    });
    //vider l'input lorsquon appuie sur le bouton
    textarea.value = "";
    }
   
   
    
}