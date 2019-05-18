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

//クリックされた時の処理
function eventHandler(e) {
    let parentBox = document.getElementById("boardTable");
    let target = e.target;
    console.log(target);
}

function checkedEndBox(index, n) {
    const isTop = Math.floor(index / n) === 0;
    const isBottom = Math.floor(index / n) === n - 1;
    const isLeft = Math.floor(index % n) === 0;
    const isRight = Math.floor(index % n) === n - 1;
    
    console.log(isTop, isBottom, isLeft, isRight);
    if (!isTop) {
        toggleColor(index, n);
    }
    if (!isBottom) {
        toggleColor(index, n);
    }
    if (!isLeft) {
        toggleColor(index, n);
    }
    if (!isRight) {
        toggleColor(index, n);
    }
}

main();