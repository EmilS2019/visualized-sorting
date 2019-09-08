let newArray = [];
let recordedChanges = [];

const randomArray = () =>{
    let arr = []
    for (let i = 0; i < linesSlider.value; i++) {
        arr.push(parseInt(Math.random()*600))
    }
    return arr;
}

const init = arr => {
    document.getElementsByClassName("line-container")[0].innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        let height = arr[i];
        newArray.push({ height: height, pos: i });

        let line = document.createElement("div");
        line.classList = "line";
        line.style = `height:${height}px; order:${i};`;
        line.id = `line-${i}`;
        document.getElementsByClassName("line-container")[0].appendChild(line);
  }
}

init(randomArray());
let interval;

const Vizualisation = () => {
    let i = 0;
    interval = setInterval(() => {
        init(recordedChanges[i]);
        if (recordedChanges[i+1] === undefined) clearInterval(interval)
        i++
    }, speedSlider.value);
};

const reset = () =>{
    newArray=[]
    recordedChanges=[]
    clearInterval(interval)
    init(randomArray())
    sortCont[0].style = ""          
    sortCont[0].removeAttribute("disabled")
    alreadyClicked=false;

}