import React from 'react';
import FindModal from './Modal';

const originalImage = {
    img_fila: 45,
    img_col: 45,
    width: 2880,
    height: 2880,
    scale: 2880 / window.innerWidth
}
const visibleRows = () => {
    let count = parseInt((Math.floor(window.innerHeight / ImageSize) - 10) / 2);
    return count;
}
const setBigPositions = () => {

    let middle = visibleRows();
   
    let center = parseInt(GridSteps.row / 2)
    return [
        { y: middle, x: 0, size: 3 },
        { y: middle - 1, x: 3, size: 3 },
        { y: middle - 3, x: 6, size: 6 },
        { y: middle - 1, x: 12, size: 3 },
        { y: middle, x: 15, size: 3 },
    ]
}
const getPositions = () => {
    let middle = visibleRows();
    let result = [];
    let big_images = [
        { y: middle, x: 0, size: 3 },
        { y: middle - 1, x: 3, size: 3 },
        { y: middle - 3, x: 6, size: 6 },
        { y: middle - 1, x: 12, size: 3 },
        { y: middle, x: 15, size: 3 },
    ];
    let forbiddenPositions = [
        [middle, middle + 1, middle + 2],
        [middle, middle + 1, middle + 2],
        [middle, middle + 1, middle + 2],// IMG 1
        [middle - 1, middle, middle + 1],
        [middle - 1, middle, middle + 1],
        [middle - 1, middle, middle + 1],// IMG 2
        [middle - 3, middle - 2, middle - 1, middle, middle + 1, middle + 2],
        [middle - 3, middle - 2, middle - 1, middle, middle + 1, middle + 2],
        [middle - 3, middle - 2, middle - 1, middle, middle + 1, middle + 2],
        [middle - 3, middle - 2, middle - 1, middle, middle + 1, middle + 2],
        [middle - 3, middle - 2, middle - 1, middle, middle + 1, middle + 2],
        [middle - 3, middle - 2, middle - 1, middle, middle + 1, middle + 2], // IMG 3 
        [middle - 1, middle, middle + 1],
        [middle - 1, middle, middle + 1],
        [middle - 1, middle, middle + 1],// IMG 4
        [middle, middle + 1, middle + 2],
        [middle, middle + 1, middle + 2],
        [middle, middle + 1, middle + 2],// IMG 5
    ]
    big_images.map(img => {
        result.push(img)
    })
    for (let j = 0; j < GridSteps.col; j++) {
        for (let i = 0; i < GridSteps.row; i++) {
            if(forbiddenPositions[i].indexOf(j)==-1){
               
                result.push({ x: i, y: j, size: 1 })
            }
            else{
                console.log('Forbidding '+i+','+j)
            }
        
        }
    }
    return result;
}
const GridSteps = { row: 18, col: 113 } // Tamanho del grid
const ImageSize = window.innerWidth / GridSteps.row; // Tamanho de cada cuadro
class ScrollView extends React.Component {
    state = {
        images: [],
        imageSize: ImageSize,
        showModal: false,
        element: null
    }
    toggleModal = (e) => {
        let element = e.target.getAttribute('value');
        let className = e.target.getAttribute('class');
        this.setState({
            ...this.state,
            showModal: !this.state.showModal,
            element: element,
            className: className
        })
    }
    closeModal = () => {
        this.setState({
            showModal: false
        })
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {

        window.removeEventListener("resize");

    }
    updateDimensions = () => {
        this.setState({
            ...this.state,
            imageSize: ImageSize
        })
    }
    sizes = (steps) => {
        return steps * this.state.imageSize
    }
    render() {
        let p = getPositions();
        console.log(p)
        return (
            <div id='view' style={{ position: 'relative' }} className={this.state.showModal ? 'blurred' : ''}>

                {p.map((element, index) => {
                    return <IMG onClick={this.toggleModal} square={element} count={index}></IMG>
                })

                }
                <FindModal className={this.state.className} show={this.state.showModal} element={this.state.element} close={this.closeModal} />
            </div>
        )
            ;
    }
}
const IMG = (props) => {
    const cars = ['car-1', 'car-2', 'car-3']
    let bgImage = cars[parseInt(Math.random() * 3)]
  
    return (
        <div
            onClick={props.onClick}
            onClose={props.onClose}
            className={`img-square ${bgImage}`}
            style={{
                backgroundSize: `${ImageSize}px ${ImageSize}px`,
                position: 'absolute',
                zIndex: props.square.size > 1 ? 999 : 1,
                top: ImageSize * props.square.y,
                left: ImageSize * props.square.x,
                width: ImageSize * props.square.size,
                height: ImageSize * props.square.size,
            }}
        >

        </div>
    )
}

export default ScrollView;