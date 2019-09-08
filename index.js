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
        line.style = `height:${height}px; order:${i};`;
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
const sortCont = options.children[0].children;
let chosenSortMethod = ""
for (let i = 1; i < 4; i++) {
    sortCont[i].addEventListener("click", function(e){
        for (let j = 1; j < 4; j++) {
            let button = options.children[0].children[j]
            button.classList.remove("selectedSortMethod")
        }
        this.classList.add("selectedSortMethod");
        chosenSortMethod = this.attributes.value.value;
    })  
}
alreadyClicked = false;
sortCont[0].addEventListener("click", function(e){
    if (alreadyClicked === false){
        alreadyClicked = true;
        sortCont[0].style = "color:lightgrey;"
        switch(chosenSortMethod){
            case "bubble":
                bubbleSort(newArray);
                Vizualisation();
                break;
            case "selection":
                selectionSort(newArray);
                Vizualisation();
                break;
            case "insertion":
                insertionSort(newArray)
                Vizualisation()
                break;
            default:
            alreadyClicked=false;
            sortCont[0].style = ""          
            sortCont[0].removeAttribute("disabled")
        }
    }
})



randomArray()
init(inputArray);
