<template>
  <div class="overlay-mobile-menu col-container" id="overlay-mobile-menu">
    <!-- Start Header -->
    <div class="overlay-mobile-menu-start nav-items row-container">
      <a href id="logo">
        <span class="logo-text-short">
          <i>Х</i>Ш
        </span>
      </a>
      <button class="nav-icon-orange" id="mobile-menu-close-button" @click="mobileMenuHandler">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAB2klEQVRYhe3Xz0sCQRTA8e9shR09BIF5zYMQQSBd0/KgEvinBqUeDIWOBUEEBXW1KOzQscUf06FNZ9cdnV1HSehdhMfszoeZ58xb+I8VCxFMyBJZJDk2qIlzPhYxqTxlix4VBDeiwYMW5GFugQTQweFY1HmyiimTYUgL2AFcBAcqyvGNHnLoYQDSDGnLMhnLmLaHAUggyalj/CCHC+BFyaRsoRRMSkm/IKhrQaJBlwH5CZTkSpbIxsYU2fW2ScW8sUZRNOj6DNoXrPmWFgTvQCFYhEaY4Lt+MAVR4zE4PhRkCxUVMxU0LyoOZiYoLiouxggUFaUd65CfhTEGmaJs1J0xaNaE9OnZ+GdGAoH2gHv1fv05h3zUqycyCLRFq7411pkVGzQVNQcGgnfZH4jV37JFF3WkLQu9tQXvCIoMOMJCl7CaB6OVq8MQtbzL1RC13PbD4FltUWtbCNOlb/I80Q5LtoHWtEIPBU3tZ6JclDFQkx+KczRXuoiyff4PxSpJvrgH0ko61gE3gQo/UDtssifO+PxN+LfMpbIIDICo84RDnvGpDpD25hyFH9TnGnBHekuYEFTHS7nenOMxwYdkkV3W2SfBpbqUNkNWSeJyQp870eR5EXP8x9LiG2u4FSSSSpHKAAAAAElFTkSuQmCC"
        />
      </button>
    </div>
    <!-- End Header -->

    <!-- Start Navlinks -->
    <div class="overlay-mobile-menu-center col-container">
      <div class="sections nav-items col-container">
        <a href class="category-text nav-icon-blue">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAEUklEQVRYhe2XS2xUVRiAv//cGUsrsSAWdO4w00IAJRGo4kIlsbqQ0JmpIOkCDSYqiZroFiKrJhpfceGCBdEEAkZowA22A4GNJMQXXZiAhWAQZsqdIfUBTQCLzp3zu5iZphTmWdz1X/3nf37n5J5z7oEZmZHpiUy3wMKF6xarcVaAzLMwx6h1cv/kdoyOHrvRSL1AYxDdq61j3kFZZ6GtYFUEUBGcWU154NNGate1QgsWb5gf8HO7ge4pLgv8oaACDwKjks8t97yjV/43ILcjvhIrR0AfKpp+FmWPFTmRTV87Bcf9cDjuqsN5YBagwGlEd2ZSN76A4/5dA5rf0bMgaO1JIAL8qSJbsqmBQ3cEj8R2IvLGLU2UY9aXDdnswN/VeplagILWflaEGVNj1pSDARCju0u6wleAqvC8CerHtfSqukLhcHyJOpwFHBXdlE0l+wueXicUufkkoqtQ5olwHyILsboKYQlwc87s5tax6+NbgfcAlbxZ6nnfnK/Ur+ouU0c2gzrAuWzqiQOQJBTt6RTG9wEP3zIt1QldVPuGhw/+C70futHxLUBUjX0N2D4tIBHtUgURDkGfbW9fPyen/lEmtjsecB7kiqJ/GdHLijnipQd/LLgP5lUS/aK6DeGZav2qr5DyOIBFvgfwbf4VhDbQFI6uzVw4/Gu1Gkb1Jy2onRTWUMvGVioUCiVagBYAJ08WwBr7OyKfK+b9WmAAxNpLRbW5ra333kqxFVfIGJ1bmoqqjgEUP+r+WkBKohoYK5yd0NQ03gpcL9uzSq2WkuIHArl6ICaLHzCTD8WWsoFVgRw+KWo24PsNAxVzLYA68lFDQKGOnmUK6wFEbMzzBjMlnxuNPetGE2PhSGzb1Dy3Pf6uG02MhdvjXSWb5w1mRGysMNIXw+H4krqBDDSVdGucM7c4hQhoq4osuy3R6lLQVrVEJpvzwtmJQdA01w3kXWwaBn4BkLwOudH4/pIvk0ruQWxnczD/1tS85nvsm4jtzIwM7i3Z3Gh8v7HmZGEycrpY+45S8eoILUpEJK/7gacKYHaF5x0+XSlnqoTD3Y+qY04VRvqdOual7IWBkXLxFbd9MfFpNxo/AzyCYzYDW+sBKuYg6BkvnVxTLbym2x7YB6DwMvQ6tdP0GYVNFJL3VgmuHcga+2WBh5AbGe+qFScUGXoOCAPWBgP77hrQ5YuH08APACK8XSuQYSL2ePa3Q5cqBtcDBKAiOwAUXnA74iurxbvt3atUpAdAYEetfWoGyqZmHQDOAYJll+tumFcuNhRKPICaXYAoDHvp1WX/MBsGgoN54FXABx6TQG4oHE1shK5JO7Ur4EZivRK0QxR+NXwj9nXos7V2qfuh6EZjMZB+YHbRdBW0eJLLcmBu0X4NdFMmnUzWU7+hl2skEluURz5A2MjtZ5kPfO0j20fTAxfrrT2tp3Q4vPZ+nECXSuHeEmXEKN+OjCSvTqfujMzIdOQ/SmiPf5V4JF0AAAAASUVORK5CYII="
          />
          Особистий кабінет
        </a>
        <a href class="category-text nav-icon-blue">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVRYhe2XS2xUVRjHf9+ZKdBCBbThMZ3pbUVYKETB+EARfCVAZzpFXUhComjckRgNGg3GyMJEoi4MbogLFQNRwwLpDEMrJFowxoCPKCt5tdNOB3ktkNKSwpzPxdyZXsZ5tcCu/82ce87/+77fPffcc+7AhCZ0Y5JKhkCgrc7U6OOozgPqrJjzxsiRVE/HUUBL5Q22RBdZqw8YtQ3AEGJOkJnyYyq1a3hcQIFAWwOT9F1RXgHqiliOIfLBQG9s+yjYZhNwjqwX5C1gQZGYIVQ+I+N/f2Bg94WqgQJO2xJB9wDBcncDoEjnFN/wWmunyYhmvhZ0VaUYlH4V055OdvxRESgYjMxXH78At3u6/xI4aEUui6oDshp0umf8T/f3Xk/qi6D7VCRpVKeqyApUF3liLhibeai/f99Jb31/IaD62YnmYS6o8lK6Lx7zmpqb18wYIfO2qL4JmOtBsKp8OMU/vOXUqQMXvXGB5rZ2Uf3cvdk7rPHtAB7BsxalIGCNqO52L4cUs6zYtOYUdCLrFL5yoQCswAupZHxnqRh3OfwE1AKoEvXesPGaRfX5XFuVreVgAFLJ+E6EDe4dKsKGcjAA6WTsdxE+HS3KWu+4ud6uD+dafmRHucQ5DfTGt4nIJhHZNNAb31ZNDNdsPreBpd6hgjUkc/JGc+kkVSrVG9tSrTerqScgux0pzPWOFMwQV/ONq7UNYytSvezkkXxugZGSQALH8hc+/323CoiRa4tzTRX+LgmkSNcona6/VTxizIueol3esetnKCNfkN8TJDqnqf3umw3T1NR2D2g0h2Ns5suSQKlUxwmg0/XW+CSzlSoO4DFIMtlX3n2ZJFG4Uxcuaiy6ESS3uJ8KNkVevVk0jU7kddAnXJiramRjocdX2DF48fj56TMW1AOPZuN4ctpt87sH/z3edyMwoZbW5aqyPVdTlY/Sydi3hb7/zRDA7IbT7wA/u5eTfEbiASe6uJi3GgWDrYusNd8BkwBQDs+sr32vmLfk+pjb0uoYaw4Ds7I5+MdnM8sKn3llmOhd1mcPCeQ23bPW2AdP9ySSxfxFZwjgdE8iKYY24LJLPkeNb38otHreWGDUl9nvgRk01oZLwZQFAkj1xA8b0eeAKwAKLdb4D4VC4YWVYEKh8EL16UGQZrfriqp5tr8/8Wu5uLJAAP29e7tE7DM5KNC51kh3oxNZWiqm0YkstUa6QXPn1LAaaU/3deyvVK8iEECqN9EpIquyX4FA9gPrQKMTDhd6A03hp4EuRr84B1U1mu6JfV9NraqAslCxbmPtMiDtdtWB7Ak44ZdznqATWSdiEkC923VGMcvTfXsPVFtnzLtwdqHaLuBOt0uBN9z2x56cpyRjVrq7f9Ua17EwqyU6u8baBLCkeFY5Ktd0dSoVHxhr7qofmVdnezrOjAzVrtCCk9ql+WGyGX5sPDDjBgI4d27X4Mz62ijwTa5PYXeNXGot/LcxFt2Ek3yzCTi/fQKQTt7/Gmy2N55zQhMav/4DfBufruFnBugAAAAASUVORK5CYII="
          />
          Сподобалося
        </a>
        <a href class="category-text nav-icon-blue">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAADkklEQVRYhe2XTWgcZRjHf8/sbKhpRDxE62bcTdJYpLViKXjKoZduqckWRAIl5uDVapF685abBw9VUPEgiNQWIeRgkhqbSsSDUJAqRVuhprbZ3e6lpdIPbXAn7+Nh52uT2U1ms1HEPqd5Pvb9/2bfr2fggf3HTNZTlMkWBhFzXJDnADuhhovwoxrrWKU49d2GgTL9haws6yVga0KQlXZP7dTOypUvSs2KrLVGEaNvtgEGoEtc99iaes2S3d0jXR2dS2XQRwBUrXylOHU2CUWmr5AXo2c89+799LJza2H2TqP6pv9QuvP+Kz4McLlSnPo6CQxA5er0WeAXz314S9Uea1bfDEgEXvMdRd4DNCkQoAofBIOib9BkZhoCPdk7lAee9ty7S2n3sxZgAKj++dCnILc9d0emr7A/MZBR62jo6cfN5n0tu3Fj4h7KJ74vRo82qo0FcpxDA6AHfRpS+lGrMIGQuu8DxnOHevpf2LFuILXN65Hc6eu/fXl5o0Cl0uwVkFnPFdzUq3F1/uKSTG/hsGVMFkDFeivYXSITYsz5jQIBqGXtRXXEk7wtat4GMJZVrFyb/hxQAXByhVFFT7ZDtFUT5OXy4vSp2rSo6fo3YaIMtYvSpOZJmWj2uIr112bqi5oOkPAqMal5iBxQPbnCAuh2ABHZV742/e1mAjm9w/tU+caDuFpenOmH+l025z+okt9MGAA1oYYiX/nPAZBKCCTogdVDjFtOdmjMyQ6NUXf0J417GhIBimgHQEu2Ow9SrRGzZ9vAwe7oAE72+1EVOaEiJ5zc8GircYDHt7/4mMIeD61a014BdGth9o6InvPjdtWuv28sGQhfj6dajgNpt7rf1xbRc9Frqe6kVv1n1pFGp0vlTDRXB2SZMKmiB1hnz53QBJXg37fMcmOgUmnveeBm7Vdsc/oO7Q6SRheCZ+XXVuM9fcPPgj7huTdLped/aAgE4wYIukJjTLDbysXTJwXGakf8zKlW49HtXtMaj57Iqz9pVJgT5TCAQB54x0+VF2fi7rtEcYHwSJH69QMx7YflMkfYqg5mMoXOGLGWzBtrMAhU3VU9euyi7ckN/wQ8U/P0Q1GK7QBSsXKgfh/08/XFmd0ra2K/QkWYVPWB5Ii2ba+F3wgiTMZVxHaMNva7wIV2YcTYBU9jlTV89127Rjp+/2PpJVHdqSLpdlCIalVFLj26dcvkxYsTm9rePLD/r/0NNnNlDBP+iEwAAAAASUVORK5CYII="
          />
          Кошик
        </a>
      </div>
    </div>
    <div id="horizontal-container">
      <i id="horizontal-line"></i>
    </div>
    <div class="overlay-mobile-menu-end col-container">
      <div class="sections nav-items col-container">
        <a href class="category-text nav-icon-blue">Контакти</a>
        <a href class="category-text nav-icon-blue">Доставка та оплата</a>
        <a href class="category-text nav-icon-blue">Запитання та відповіді</a>
        <a href class="category-text nav-icon-blue">Про нас</a>
      </div>
    </div>
    <!-- End Navlinks -->
  </div>
</template>

<script>
export default {
  name: "OverlayMobileMenu",
  props: {
    mobileMenuHandler: Function
  },
  setup(props) {
    return { props };
  }
};
</script>

<style lang="scss" scoped>
#overlay-mobile-menu {
  position: fixed;
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  z-index: 10;
  overflow-x: hidden;
  transition: 0.5s;
  box-shadow: 2px 0px 2px $color_gray;
  background-color: $color_white;
  .overlay-mobile-menu-start,
  .overlay-mobile-menu-center,
  .overlay-mobile-menu-end {
    padding: 0.8rem map-get($padding_container, small);
  }
  .overlay-mobile-menu-start {
    justify-content: space-between;
    background-color: $color_blue;
  }
  &.open {
    width: 65%;
  }
}

// Tablet version
@include tabletVersion {
  #overlay-mobile-menu {
    display: none;
  }
}
</style>
