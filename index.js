let inputArray = [];
let newArray = [];
let recordedChanges = [];

const randomArray = () =>{
    for (let i = 0; i < 20; i++) {
        inputArray.push(parseInt(Math.random()*600))
    }
}

const init = arr => {
    document.getElementsByClassName("line-container")[0].innerHTML = ''
    for (let i = 0; i < 20; i++) {
        let height = arr[i];
        newArray.push({ height: height, pos: i });

        let line = document.createElement("div");
        line.classList = "line";
        line.style = `height:${height}px; order:${i}; background:black;`;
        line.id = `line-${i}`;
        document.getElementsByClassName("line-container")[0].appendChild(line);
  }
};

const Vizualisation = () => {
    let i = 0;
    let interval = setInterval(() => {
        init(recordedChanges[i]);
        if (recordedChanges[i+1] === undefined) clearInterval(interval)
        i++
    }, 200);
};

const options = document.getElementById("options")
const radio = options.children[0].children;
for (let i = 1; i < 4; i++) {
    radio[i].addEventListener("click", function(e){
        console.log("here")
    })  
}


document.getElementById("options").onsubmit = function(e){
    e.preventDefault()
    options[0].setAttribute("disabled", true)
    if (radio[1].checked){
        bubbleSort(newArray);
        Vizualisation();
    }
    else if (radio[2].checked){
        selectionSort(newArray);
        Vizualisation();
    }
    else if (radio[3].checked){
        insertionSort(newArray)
        Vizualisation()
    }

}

randomArray()
init(inputArray);
