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
        line.style = `height:${height}px; order:${i}`;
        //line.innerText = height;
        line.id = `line-${i}`;
        document.getElementsByClassName("line-container")[0].appendChild(line);
  }
};

const scan = () => {};

const swap = () => {};

const bubbleSort = arr => {
  let arrInt = []
    arr.forEach(line => {
      arrInt.push(line.height);
    });
    for (let i = 0; i < arrInt.length; i++) {
        for (let j = 0; j < arrInt.length - i ; j++) {
        if (arrInt[j] > arrInt[j + 1]) {
            [arrInt[j], arrInt[j + 1]] = [arrInt[j + 1], arrInt[j]];
            recordedChanges.push(JSON.parse(JSON.stringify(arrInt)));
            }
        }
    }
    return arrInt
};

const Vizualisation = () => {
    let i = 0;
    let lines = document.getElementsByClassName("line")
    let interval = setInterval(() => {
        init(recordedChanges[i])
        if (recordedChanges[i+1] === undefined) clearInterval(interval)
        i++
    }, 20);
};

const handleSubmit = (event) =>{
    event.preventDefault()
}



const options = document.getElementById("options")
const radio = options.children
document.getElementById("options").onsubmit = function(e){
    e.preventDefault()
    
    if (radio[1].checked){

        bubbleSort(JSON.parse(JSON.stringify(newArray)));
        Vizualisation();
    }

}

randomArray()
init(inputArray);