import React from 'react'
import {mergeSort} from '.././sortingAlgorithms/sortingAlgorithms'
import './SortingVisualizer.css'

const ANIMATION_SPEED_MS = 5

const NUMBER_OF_ARRAY_BARS = 200

const PRIMARY_COLOR = 'aquamarine'

const SECONDARY_COLOR = 'red'

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: []
        }
    }

    componentDidMount() {
        this.resetArray()
    }

    resetArray() {
        const array = []
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730))
        }
        this.setState({array})
    }

    mergeSort() {
        const animations = mergeSort(this.state.array)
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = i % 3 !== 2
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgorundColor = color
                }, i * ANIMATION_SPEED_MS)
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i]
                    const barOneStyle = arrayBars[barOneIdx].style
                    barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    quickSort() {

    }

    heapSort() {

    }

    bubbleSort() {

    }

    insertionSort() {

    }

    render() {
        const {array} = this.state

        return (
            <>
            <div className='header'>
                <button className='header-button' onClick={() => this.resetArray()}>Generate New Array</button>
                <button className='header-button' onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className='header-button' onClick={() => this.quickSort()}>Quick Sort</button>
                <button className='header-button' onClick={() => this.heapSort()}>Heap Sort</button>
                <button className='header-button' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button className='header-button' onClick={() => this.insertionSort()}>Insertion Sort</button>
            </div>
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{height: `${value}px`}}></div>
                ))}
            </div>
            </>
        )
    }
}

const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

