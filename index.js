function newImage(source, lPos, bPos) {
    let gameImg = document.createElement('img')
    gameImg.src = source
    gameImg.style.position = 'fixed'
    gameImg.style.left = lPos + 'px'
    gameImg.style.bottom = bPos + 'px'
    document.body.append(gameImg)
    return gameImg
}


function newItem(source, lPos, bPos) {
    let item = newImage(source, lPos, bPos)


    item.addEventListener('dblclick', function () {
        item.remove()
    })
}

function bckGrd(source, lPos, bPos) {
    let wallPaper = newImage(source, lPos, bPos)

}





newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/tree.png', 200, 300)

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)
















// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)


// let pineTree = document.createElement('img')
// pineTree.src = 'assets/pine-tree.png'
// pineTree.style.position = 'fixed'
// pineTree.style.left = '450px'
// pineTree.style.bottom = '200px'
// document.body.append(pineTree)