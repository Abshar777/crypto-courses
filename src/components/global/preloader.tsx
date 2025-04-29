const Preloader = () => {
  return (
    <div id="preloader">
      <div id="container" className="container-preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text="A" className="characters">A</span>
            <span data-text="R" className="characters">R</span>
            <span data-text="O" className="characters">O</span>
            <span data-text="L" className="characters">L</span>
            <span data-text="A" className="characters">A</span>
            <span data-text="X" className="characters">X</span>
          </div>
        </div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
    </div>
  );
};

export default Preloader;
