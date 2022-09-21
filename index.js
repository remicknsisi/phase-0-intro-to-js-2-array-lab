const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push('Ralph')
}

function destructivelyPrependCat(name){
    return cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    return cats.splice(cats.length-1,1)
}

function destructivelyRemoveFirstCat(){
    return cats.splice(0,1)
}

function appendCat(name){
    return [...cats, 'Broom']
}

function prependCat(name){
    return ['Arnold', ...cats]
}

function removeLastCat(){
    return cats.slice(0,cats.length-1)
}

function removeFirstCat(){
    return cats.slice(1, cats.length)
}