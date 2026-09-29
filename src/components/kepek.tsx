let Kepek = () => {
  return (
    <div className="row mb-1">
      <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
        <h2>Banán</h2>

        <img src="/src/data/images/banan.jpg" className="img-fluid" alt="Banán" />

        <p className="mt-2">
          A banán trópusi gyümölcs, amely Magyarországon nem jellemző
          pálinkaalapanyag.
        </p>
      </div>

      <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
        <h2>Birsalma</h2>

        <img
          src="/src/data/images/birsalma.jpg"
          className="img-fluid"
          alt="Birsalma"
        />

        <p className="mt-2">
          A birsalma jellegzetes illatú gyümölcs, amelyből gyümölcspárlat is
          készíthető.
        </p>
      </div>

      <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
        <h2>Mogyoró</h2>

        <img
          src="/src/data/images/mogyoro.jpg"
          className="img-fluid"
          alt="Mogyoró"
        />

        <p className="mt-2">
          A mogyoró olajos mag, ezért nem a hagyományos gyümölcspárlatok
          alapanyagai közé tartozik.
        </p>
      </div>

      <div className="col-sm-3 col-md-6 col-lg-3 kartya mb-3 h-100">
        <h2>Gránátalma</h2>

        <img
          src="/src/data/images/granatalma.jpg"
          className="img-fluid"
          alt="Gránátalma"
        />

        <p className="mt-2">
          A gránátalma gyümölcs, jellegzetes édes-savanykás ízzel és sok apró
          maggal.
        </p>
      </div>
    </div>
  );
};

export default Kepek;
