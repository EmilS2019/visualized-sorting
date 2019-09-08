const options = document.getElementById("options")
const sortCont = options.children[0].children[0].children;
let chosenSortMethod = ""

const optionsSetUp = () =>{
    for (let i = 1; i < 5; i++) {
        sortCont[i].addEventListener("click", function(e){
        for (let j = 1; j < 5; j++) {
            let button = options.children[0].children[0].children[j]
            button.classList.remove("selectedSortMethod")
            }
        this.classList.add("selectedSortMethod");
        chosenSortMethod = this.attributes.value.value;
        })  
    }
}
optionsSetUp()

const buttonsSetUp = () =>{
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
            case "quick":
                quickSort(newArray, 0, newArray.length - 1)
                Vizualisation()
                break;
            default:
                alreadyClicked=false;
                sortCont[0].style = ""          
                sortCont[0].removeAttribute("disabled")
            }
        }
    })
}
buttonsSetUp()

const sliderSetUp = (slider) =>{
    slider.addEventListener("mouseup", function(e){
        reset()
    })
}
let linesSlider = document.getElementById("linesSlider");
let speedSlider = document.getElementById("speedSlider");
sliderSetUp(linesSlider)
sliderSetUp(speedSlider)