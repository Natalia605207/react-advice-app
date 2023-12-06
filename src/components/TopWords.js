import image from '../assets/bored.jpg';

function TopWords() {
    return <div>
        <p className="wordsOnTop">If you feel <span className="markedWord">bored</span></p>
        <p className="wordsOnTop">and</p>
        <p className="wordsOnTop">have <span className="markedWord">nothing</span> to do</p>
        <img className="boredPhoto" src={image} alt="bored" />
        <p className="wordsBelowImage">Click this button and get an advice</p>
    </div>
}

export default TopWords;