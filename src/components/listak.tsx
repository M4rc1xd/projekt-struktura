let Listak = () => {
    return(
        <div className="row mb-2">
        <div className="col-sm-4 kartya">
          <h2>Gyakori alapanyagok</h2>

          <ul className="list-group">
            <li className="list-group-item">Alma</li>

            <li className="list-group-item">Körte</li>

            <li className="list-group-item">Szilva</li>

            <li className="list-group-item">Meggy</li>

            <li className="list-group-item">Kajszibarack</li>
          </ul>
        </div>

        <div className="col-sm-4 kartya mb-2">
          <h2>Népszerű pálinkák</h2>

          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Szilvapálinka</li>

            <li className="list-group-item">Barackpálinka</li>

            <li className="list-group-item">Körtepálinka</li>

            <li className="list-group-item">Almapálinka</li>

            <li className="list-group-item">Birsalmapálinka</li>
          </ol>
        </div>

        <div className="col-sm-4 kartya mb-2">
          <h2>Íz- és illatjegyek</h2>

          <ol className="list-group list-group-numbered">
            <li className="list-group-item">Gyümölcsös</li>

            <li className="list-group-item">Illatos</li>

            <li className="list-group-item">Érett gyümölcsre jellemző</li>

            <li className="list-group-item">Harmonikus</li>

            <li className="list-group-item">Tiszta lecsengésű</li>
          </ol>
        </div>
      </div>
    )
}

export default Listak