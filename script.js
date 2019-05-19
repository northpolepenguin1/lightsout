/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


function main() {
    let childBox = makePanel();
    registerEvent(childBox);

    // if (isClear(childBox)) {
    //     alert("クリア");
    // }
}

// パネル作成
function makePanel(n=1, cnt=0) {
    let parentBox = document.getElementById("boardTable");
    let childBox = document.createElement("div");
    childBox.classList.add("createbox");
    childBox.setAttribute("id", "box"+cnt);
    parentBox.appendChild(childBox);
    coloredBox(parentBox.children);
    if (n % 5 == 0) {
        let brBox = document.createElement("div");
        childBox.parentNode.insertBefore(brBox, childBox.nextSibling); 
    }

    if ( n < 25 ) {
        makePanel(n+1, cnt+1);
    }
    return parentBox.children;
}

// パネルカラーリング
function coloredBox(children) {
    let parentBox = document.getElementById("boardTable");
    let childNum = children.length;
    let randNum = Math.floor(Math.random() * childNum);
    children[randNum].classList.add('onColor');
}

// イベント登録処理
function registerEvent(childNodes) {
    let childNode = childNodes;
    for (let i = 0; i < childNode.length; i++) {
        childNode[i].addEventListener('click', eventHandler);
    }
}

// クリックされた時の処理
function eventHandler(e) {
    let n = 5;
    let parentBox = document.getElementById("boardTable");
    let target = e.target;
    let targetId = target.id;
    let index = targetId.replace("box", "");
    console.log(index);
    // 端っこのボックス判定
    let isEndTop = Math.floor(index / n) === 0;
    let isEndBottom = Math.floor(index / n) === n - 1;
    let isEndLeft = Math.floor(index % n) === 0;
    let isEndRight = Math.floor(index % n) === n - 1;

    // 隣り合うどうしのものを切り替えるための定義
    let up = Number(index - 5);
    let down = Number(Number(index) + 5);
    let left = Number(index - 1);
    let right = Number(Number(index) + 1);

    if (isEndTop === false && isEndTop === false && isEndLeft === false && isEndRight === false) {
        let upBox = document.getElementById("box"+up);
        let downBox = document.getElementById("box"+down);
        let leftBox = document.getElementById("box"+left);
        let rightBox = document.getElementById("box"+right);
        target.classList.toggle("onColor");
        upBox.classList.toggle("onColor");
        downBox.classList.toggle("onColor");
        leftBox.classList.toggle("onColor");
        rightBox.classList.toggle("onColor");
    }

}

// function isClear(childBox) {
//     let childNodesNum = childBox.length;
//     let isCleared = true
//     for (let i=0; i<childNodesNum; i++) {
//         if (childBox.classList.contains("onColor")) {
//             isCleared = false;
//             return isCleared;
//         }
//     }
//     return isCleared;
// }


main();