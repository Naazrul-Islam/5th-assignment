let hearts = document.getElementsByClassName("heart-shape");
for(heart of hearts){
    heart.addEventListener("click", function(){
        let countSpan = document.getElementById("heart-count");
        let count = parseInt(countSpan.innerText);
        count++;
        countSpan.innerText = count;
    });
}
// **************call btn****************

let stars = 100;
let callbtns = document.getElementsByClassName("call-btn");

for (let callbtn of callbtns) {
    callbtn.addEventListener("click", function(e) {
        e.preventDefault();
        if (stars < 20) {
            alert("no stars");
            return;
        }



        let serviceNumber = this.parentNode.parentNode.querySelector(".sarvice-title").innerText;
        let phoneNumber = this.parentNode.parentNode.querySelector(".phn-number").innerText
        alert(`Calling ${serviceNumber} at ${phoneNumber}`);
        stars -= 20;
        document.getElementById("star-count").innerText = stars;





        let now = new Date();
        let time = now.toLocaleTimeString();
        let historyContainer = document.getElementById("history");
        let newP = document.createElement("div");
        newP.className = "call-history-entry flex justify-between items-center bg-[#FAFAFA] rounded-2xl p-[15px] mt-2 gap-3 max-h-83px";
        newP.innerHTML = `<div>${serviceNumber} <br> ${phoneNumber}</div> <div>${time}</div>`;
        historyContainer.appendChild(newP);
    });
}

// ********************* clear button *********************


let clearBtn = document.querySelector("#history button");
clearBtn.addEventListener("click", function() {
    let historyContainer = document.getElementById("history");
    let entries = historyContainer.querySelectorAll(".call-history-entry");
    entries.forEach(entry => entry.remove());
});
// ********************* copy button *********************
let copyCounts = 0;
let copyBtns = document.getElementsByClassName("copy-btn");

for (let copyBtn of copyBtns) {
    copyBtn.addEventListener("click", function() {
        let phoneNumber = this.parentNode.parentNode.querySelector(".phn-number").innerText;
        navigator.clipboard.writeText(phoneNumber).then(() => {;
            alert(`Copied ${phoneNumber} to clipboard`);
        });

        let countContainer = document.getElementById("copy-count");
        let count = parseInt(countContainer.innerText);
        count++;
        countContainer.innerText = count;
    });
}
