/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


function main() {
    let childBox = makePanel();
    registerEvent(childBox);
}

// パネル作成
function makePanel(n=1) {
    let parentBox = document.getElementById("boardTable");
    let childBox = document.createElement("div");
    childBox.classList.add("createbox");
    childBox.setAttribute("id", "box"+n);
    parentBox.appendChild(childBox);
    coloredBox(parentBox.children);
    if (n % 5 == 0) {
        let brBox = document.createElement("div");
        childBox.parentNode.insertBefore(brBox, childBox.nextSibling); 
    }

    if ( n < 25 ) {
        makePanel(n+1);
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

    // 端っこのボックス判定
    let isEndTop = Math.floor(index / n) === 0;
    let isEndBottom = Math.floor(index / n) === n - 1;
    let isEndLeft = Math.floor(index % n) === 0;
    let isEndRight = Math.floor(index % n) === n - 1;

    // 隣り合うどうしのものを切り替えるための定義
    let up = index - 1;
    let down = index + 5
    let left = index - 1;
    let right = index + 1;
}


main();