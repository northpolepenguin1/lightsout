document.body.onload = main;

function main() {
    const n = 5;
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let parentBox = document.getElementById('main');
            let box = document.createElement("div");
            parentBox.appendChild(box);
            box.classList.add('createbox');
            box.setAttribute('id', 'box'+cnt);
            coloring(parentBox.children);
            parentBox.addEventListener('click', eventHandler);
            cnt += 1;
        }

    }
}

// boxクリック時の処理
function eventHandler(e) {
    let target = e.target;
    let targetId = target.id;
    let index = targetId.replace('box', '');
    let n = 5;
    if (target.classList.contains('onColor')) {
        target.classList.remove('onColor');
        checkBox(index, n);
    } else if (target.classList.contains('onColor') === false ) {
        target.classList.add('onColor');
        checkBox(index, n);
    }
}


function checkBox(index, n) {
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

function toggleColor(index, n) {
    let array = new Array()
    array = [index+n, index-n, index+1, index-1];
    for (let i = 0; i < array.length; i++) {
        let coloredBox = document.getElementById('box'+array[i]);
        if (coloredBox.classList.contains('onColor')) {
            coloredBox.classList.remove('onColor');
        } else {
            coloredBox.classList.add('onColor');
        }
    }
}

// クリア判定
function isClear(box) {
    let isFinished = true;
    for (let i=0; i < box.length; i++) {
        if (box[i].classList.contains('onColor')) {
            isFinished = false;
        }
    }
    return isFinished;
}

// 色をつける処理
function coloring(children) {
    let childNum = children.length;
    let randNum = Math.floor(Math.random() * childNum);
    children[randNum].classList.add('onColor');
}