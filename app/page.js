export default function Home() {
  return (
    <div className="container">
      <div className="star-container">
        <img src="./icon-star.svg" alt="icon-star" />
      </div>
      <div className="title">How did we do?</div>
      <p className="comment">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="round-button-container">
        <div className="number-container">1</div>
        <div className="number-container">2</div>
        <div className="number-container">3</div>
        <div className="number-container">4</div>
        <div className="number-container">5</div>
      </div>
      <button>Submit</button>
    </div>
  )
}
