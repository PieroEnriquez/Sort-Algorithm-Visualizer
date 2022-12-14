import React from 'react'
import {mergeSort, bubbleSort} from '.././sortingAlgorithms/sortingAlgorithms'
import {AnimationSpeed} from '../Components/Components'
import './SortingVisualizer.css'

// const ANIMATION_SPEED_MS = 3

const NUMBER_OF_ARRAY_BARS = 150

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

    getAnimationSpeed() {
        const ANIMATION_SPEED_MS = document.getElementById('counter').innerHTML

        return ANIMATION_SPEED_MS
    }

    resetArray() {
        const array = []
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 730))
        }
        this.setState({array})
    }

    mergeSort() {
        const ANIMATION_SPEED_MS = this.getAnimationSpeed()
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
        const ANIMATION_SPEED_MS = this.getAnimationSpeed()
        let animations = bubbleSort(this.state.array)
        for (let i = 1; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = (i % 4 === 0) || (i % 4 === 1)
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(() => {
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgorundColor = color
                }, i * ANIMATION_SPEED_MS)
            } else {
                const [barIdx, newHeight] = animations[i]
                if (barIdx === -1) {
                    continue
                }
                const barStyle = arrayBars[barIdx].style
                setTimeout(() => {
                    barStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS)
            }
        }
    }

    render() {
        const {array} = this.state

        return (
            <>
            <div className='header'>
                <AnimationSpeed />
                <button className='header-button' onClick={() => this.resetArray()}>Generate New Array</button>
                <button className='header-button' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                <button className='header-button' onClick={() => this.mergeSort()}>Merge Sort</button>
                <button className='header-button' onClick={() => this.quickSort()}>Quick Sort</button>
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

