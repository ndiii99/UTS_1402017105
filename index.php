<html>

<head>

  <!--Font -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
    integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
    crossorigin="anonymous" />
  <title>EDU-COVID</title>

  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="slider">
    <button class="prev"><i class="fas fa-chevron-left"></i></button>
    <button class="next"><i class="fas fa-chevron-right"></i></button>
    <div class="slides-container">
      <div class="slide active">
        <div class="col-left">
          <h2>EDU-COVID</h2>
          <p>
            EDU-COVID adalah website yang berisi tentang penyuluhan 5M dan data Covid-19 di Indonesia
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="col-left">
          <h2>5M</h2>
          <p>
            5M adalah hal yang harus kita lakukan guna menghindari terpapar Covid-19
          </p>
        </div>
        <div class="col-right">
          <img src="5m.jpg" alt="" />
        </div>
      </div>
      <div class="slide">
        <div class="col-left">
          <h2>Data Covid-19 Indonesia</h2>
          <table class="table">
            <tr>
              <td> Positif </td>
              <td> : 1.482.559 </td>
            </tr>
            <tr>
              <td> Sembuh </td>
              <td> : 1.317.199 </td>
            </tr>
            <tr>
              <td> Meninggal </td>
              <td> : 40.081 </td>
            </tr>
            <tr>
              <td> Update Terakhir </td>
              <td> : 25-03-2021 </td>
            </tr>
            <tr>
              <td> Sumber </td>
              <td href="covid.go.id"> : covid.go.id </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="slide">
        <div class="col-left">
          <h2> Kuis </h2>
          <div id='container'>
            <div id='quiz'></div>
            <div class='button' id='next'><a href='#'>Next</a></div>
            <div class='button' id='prev'><a href='#'>Prev</a></div>
          </div>
          <script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'>
          </script>
          <script type="text/javascript" src='questions.json'></script>
          <script type='text/javascript' src='jsquiz.js'></script>
          <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
        </div>
      </div>
      <div class="slide">
        <div class="col-left">
          <div id="kontak">
            <div class="kontak">
              <h2> Kontak Kami </h2><br>
              <form>
                <table class="tablekontak" cellpadding="1">
                  <tr>
                    <td class="kolom1"> Nama Lengkap </td>
                    <td class="kolom2"> <INPUT TYPE=text NAME=txtNama size="50"> </td>
                  </tr>
                  <tr>
                    <td> E-mail </td>
                    <td> <INPUT TYPE=text NAME=txtemail size="50"> </td>
                  </tr>
                  <tr>
                    <td> Pertanyaan </td>
                    <td> <textarea cols="80" rows="10"></textarea> </td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>

                  <tr>
                    <td>&nbsp;</td>
                    <td><INPUT TYPE=submit NAME=kirim value=&nbsp;&nbsp;kirim&nbsp;&nbsp;>&nbsp;&nbsp;<INPUT TYPE=Reset
                        Name=reset Value=&nbsp;&nbsp;reset&nbsp;&nbsp;> </td>
                  </tr>
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>

  <script src="main.js"></script>
</body>

</html>