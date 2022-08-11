import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
const Footer = () => {
  return (
    <>
      {/* <div className='footer'>
             <div >
<img src="images/LOGO.png" width= "70px" alt="LOGO"></img>
    </div>
      <Routes>
      <Route path ="/" element = { 
<p>Jesteś na stronie główniej</p>  } />
<Route path ="/cards/:title" element = { 
<p>Jesteś na stronie produktów</p>  } /> 
<Route path ="/contact" element = { 
<p>Jesteś na stronie Kontaktu</p>  } /> 
<Route path ="/Sublimation" element = { 
<p>Strona o Sublimacji</p>  } /> 
      </Routes>
      </div> */}

      <div className="text-center text-lg-start bg-light text-muted">
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div class="me-5 d-none d-lg-block"></div>
        </section>
        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div align="center" class="rzetelna">
                <a href="http://www.rzetelnafirma.pl/4CKWEE3I/1">
                  <img
                    src="../images/baner_cien.png"
                    alt="rzetelna firma"
                    width="172"
                    height="91"
                    border="0"
                    align="middle"
                  />
                </a>{" "}
              </div>
              <hr class="my-5" />
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>P&#321;YTEX BIA&#321;YSTOK{" "}
                </h6>
                <p>Zapraszamy .</p>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  OFERTA FIRMY P&#321;YTEX{" "}
                </h6>
                <p>
                  <a href="plyta_meblowa.php" class="text-reset">
                    P&#321;YTA MEBLOWA
                  </a>
                </p>
                <p>
                  <a href="drzwiczki_meblowe.php" class="text-reset">
                    DRZWICZKI&nbsp; MEBLOWE
                  </a>
                </p>
                <p>
                  <a href="blaty_kuchenne.php" class="text-reset">
                    BLATY&nbsp; KUCHENNE
                  </a>
                </p>
                <p>
                  <a href="akcesoria.php" class="text-reset">
                    AKCESORIA&nbsp;
                  </a>
                </p>
                <p>
                  <a href="uslugi.php" class="text-reset">
                    US&#321;UGI&nbsp;
                  </a>{" "}
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <a href="" class="text-reset">
                    KONTAKT&nbsp;
                  </a>
                </h6>
                <p>
                  <i class="fas fa-home me-3"></i> Bia&#322;ystok ul.
                  Elewatorska 9
                </p>
                <p>
                  <i class="fas fa-envelope me-3"></i>
                  krzys-plytex@wp.pl
                </p>
                <p>
                  <i class="fas fa-phone me-3"></i>(85) 741 52 05
                </p>
                <p>
                  <i class="fas fa-print me-3"></i>(85) 868 40 36{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-4"
          style="background-color: rgba(0, 0, 0, 0.05);"
        >
          P&#322;ytex 2021{" "}
        </div>
      </div>
    </>
  );
};
export default Footer;
