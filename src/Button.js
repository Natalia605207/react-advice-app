function Button({getAdvice}) {
    return <div>
        <button className="btn" onClick={getAdvice}>
            <span className="btn-text-one">Click me!</span>
            <span className="btn-text-two">Great!</span>
      </button>
    </div>
}

export default Button;