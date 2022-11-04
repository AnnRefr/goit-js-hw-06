const listOfCategories = {
    allCat: document.querySelector('#categories'),
    numOfCat: document.querySelectorAll('.item')
}
    console.log(`Number of categories:${listOfCategories.numOfCat.length}`)

for ( let i = 0; i < listOfCategories.numOfCat.length; i += 1){
    console.log(`Category: ${listOfCategories.numOfCat[i].querySelector('h2').textContent}`)
    console.log(`Elements: ${listOfCategories.numOfCat[i].querySelectorAll('ul li').length}`)
}

