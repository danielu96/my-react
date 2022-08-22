import React from "react";
const FOOT = () => {
  return (
    <>
      <footer class="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block"></div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div align="center">
                <img src="images/LOGO.png" width="70px" alt="LOGO"></img>
              </div>
              <hr class="my-5" />
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>................
                </h6>
                <p>Zapraszamy .</p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  OFERTA FIRMY...............
                </h6>
                <p>
                  <a href="plyta_meblowa.php" class="text-reset">
                    .............
                  </a>
                </p>
                <p>
                  <a href="drzwiczki_meblowe.php" class="text-reset">
                    ......................
                  </a>
                </p>
                <p>
                  <a href="blaty_kuchenne.php" class="text-reset">
                    ................
                  </a>
                </p>
                <p>
                  <a href="akcesoria.php" class="text-reset">
                   ...................
                  </a>
                </p>
                <p>
                  <a href="uslugi.php" class="text-reset">
                  .............
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <a href="" class="text-reset">
                    KONTAKT&nbsp;
                  </a>
                </h6>
                <p>
                  <i class="fas fa-home me-3"></i>
                  ....................
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  ....@.....
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>...............
                </p>
                <p>
                  <i class="fas fa-print me-3"></i>.............
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style={{ background: "rgba(0, 0, 0, 0.05);" }}
        >
          2022
        </div>
      </footer>
    </>
  );
};
export default FOOT;
