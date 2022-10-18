export const mergeSort = array => {
    const animations = []
    if (array.length <= 1) return array
    const auxiliaryArray = array.slice()
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations)
    return animations
}

const mergeSortHelper = (
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations
) => {
    if (startIdx === endIdx) return
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations)
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations)
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations)
}

const doMerge = (
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations
) => {
    let k = startIdx
    let i = startIdx
    let j = middleIdx + 1
    while (i <= middleIdx && j <= endIdx) {
        animations.push([i, j])
        animations.push([i, j])
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]])
            mainArray[k++] = auxiliaryArray[i++]
        } else {
            animations.push([k, auxiliaryArray[j]])
            mainArray[k++] = auxiliaryArray[j++]
        }
    }
    while (i <= middleIdx) {
        animations.push([i, i])
        animations.push([i, i])
        animations.push([k, auxiliaryArray[i]])
        mainArray[k++] = auxiliaryArray[i++]
    }
    while (j <= endIdx) {
        animations.push([j, j])
        animations.push([j, j])
        animations.push([k, auxiliaryArray[j]])
        mainArray[k++] = auxiliaryArray[j++]
    }
}

export const bubbleSort = array => {
    const animations = []
    if (array.length <= 1) return array
    bubbleSortHelper(array, animations)
    return animations
}

const bubbleSortHelper = (array, animations) => {
    const length = array.length
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            animations.push([j, j + 1])
            animations.push([j, j + 1])
            if (array[j] > array[j + 1]) {
                animations.push([j, array[j + 1]])
                animations.push([j + 1, array[j]])
                swap(array, j, j + 1)
            } else {
                animations.push([-1, -1])
                animations.push([-1, -1])
            }
        }
    }
}

const swap = (array, firstIdx, secondIdx) => {
    let temp = array[firstIdx]
    array[firstIdx] = array[secondIdx]
    array[secondIdx] = temp
}


