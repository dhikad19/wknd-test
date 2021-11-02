import "./cards.scss";

export default function Card() {
  return (
    <div className="cards-container" id="cards-container">
      <div className="heading">
        <h1 className="heading__title">Help & Tips</h1>
        <br />
      </div>
      <div className="cards">
        <div className="card card-1">
          <div className="card-text">
            <h2 className="card__title">Start quickly with simple steps</h2>
          </div>
          <div className="card-text-right">
            <img src="assets/arrow.svg" className="arrow-logo" alt="" href="#" />
          </div>
        </div>

        <div className="card card-2">
          <div className="card-text">
            <h2 className="card__title">Run smoothly at vero eos et accusamus</h2>
          </div>
          <div className="card-text-right">
            <img src="assets/arrow.svg" className="arrow-logo" alt="" href="#" />
          </div>
        </div>

        <div className="card card-3">
          <div className="card-text">
            <h2 className="card__title">Denounce with righteous indignation</h2>
          </div>
          <div className="card-text-right">
            <img src="assets/arrow.svg" className="arrow-logo" alt="" href="#" />
          </div>
        </div>
      </div>
    </div>
  )
}
