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

const interval = () => {
    let i = 0;
    let lines = document.getElementsByClassName("line")
    console.log(recordedChanges)
    let interval = setInterval(() => {

        //init(recordedChanges[i].map(({height})=> height))
        init(recordedChanges[i])
        if (recordedChanges[i+1] === undefined) clearInterval(interval)
        i++
    }, 20);
};

randomArray()
init(inputArray);
let sortedArray = bubbleSort(JSON.parse(JSON.stringify(newArray)));

interval();