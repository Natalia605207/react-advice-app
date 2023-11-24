import happy from './assets/happy.jpg';

function BottomPart() {
    return <div>
        <img className="happyPeople" src={happy} alt="happy" />
        <hr />
        <p className="footer">Designed and developed by <a className="footer" href="https://natalia-musikhina-portfolio.glitch.me/" target="_blank" rel="noreferrer">Natalia Musikhina</a></p>
        <p className="footer">The data: <a className="footer" href="http://www.boredapi.com/api/activity/" target="_blank" rel="noreferrer">www.boredapi.com</a></p>
        <p className="footer">The images: <a className="footer" href="https://www.freepik.com/" target="_blank" rel="noreferrer">www.freepik.com</a></p>
    </div>
}

export default BottomPart;