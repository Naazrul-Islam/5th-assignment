let hearts = document.getElementsByClassName("heart-shape");
for(heart of hearts){
    heart.addEventListener("click", function(){
        let countSpan = document.getElementById("heart-count");
        let count = parseInt(countSpan.innerText);
        count++;
        countSpan.innerText = count;
    });
}