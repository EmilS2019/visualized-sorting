let newArray = [];
let recordedChanges = [];

const init = () => {
  for (let i = 0; i < 20; i++) {
    let height = parseInt(Math.random() * 600);
    newArray.push({height:height, pos:i});

    let line = document.createElement("div");
    line.classList = "line";
    line.style = `height:${height}px; margin-left:2px;`;
    line.innerText = height;
    document.getElementsByClassName("line-container")[0].appendChild(line);
  }
};

const scan = () => {};

const swap = () => {};

const bubbleSort = arr => {
    let arrInt=[]
     arr.forEach(line =>{
        arrInt.push(line.height)
    })
  for (let i = 0; i < arrInt.length; i++) {
    for (let j = 0; j < arrInt.length - i - 1; j++) {

      if (arrInt[j] > arrInt[j+1]){
        recordedChanges.push(arr[j]) 
        [arrInt[j], arrInt[j+1]] = [arrInt[j+1], arrInt[j]]

      }
    }
  }
  console.log(arrInt)
};

const interval = () => {
  setInterval(() => {
  }, 500);
};

init();
bubbleSort(JSON.parse(JSON.stringify(newArray)));

interval();






//let num = parseInt(document.getElementsByClassName("line")[j].innerText);
//if (num > maxNum) {
// maxNum = num;