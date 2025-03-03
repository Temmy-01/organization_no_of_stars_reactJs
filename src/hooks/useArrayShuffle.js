const fisherYatesShuffle = (arr, num) => {
    let newArr=[];
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = arr[i]
        arr[i] = arr[j]
        arr[j] = k
    }
    for(let m=0; m < num; m++) {
        if(arr[m] !== undefined) {
            newArr.push(arr[m])
        }
    }
}

const shuffleArray = {
    fisherYatesShuffle
}

export default shuffleArray