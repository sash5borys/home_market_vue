<template>
  <footer>
    <div class="footer-top-menu col-container">
      <div class="footer-top-menu-start sections col-container">
        <form class="form-one-line row-container" id="subscribe-form" action>
          <input type="text" placeholder="Email-підписка" name="subscribe-email" autocomplete="off" />
          <button class="form-button nav-icon-orange" type="submit" name="subscribe_submit">Отримати</button>
        </form>
        <div class="social-icons nav-items row-container">
          <a href class="nav-icon-blue">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAACQUlEQVRYhe2Yz2sTQRTHv9+3G2JKLyJVbGq63tuTaMFTT1q69iDYowfxWkpA/Bu86k0Q/Adqi9hEiRdvgucW8aSbJqlgISdpStKd5yHdJT/aLmuSRSTf077ZN+99dmb27c4AY50v9tozzvJdo9acqLFGmdhQfKG/W/XelwDoaUCcnr23SeD+KEH6xa1aeftBABUCzTjLS6ryIVmYtoS6VPGKJQCwg0aj1hyDkVM+B8znEWPcBjUPAL7KPIBuICFsDXjEfNn3ihujxJl2XIvKMHfIMcqkfyM72iW+rsyuXLdhHlN5E8QlBX6D2gT4qeYVniUKlM2tPAT0FcC0dr7DbaMV1X+oQFdz7g1QXw8Sd6hrSMCnGPAhhztlxGKXraiocB3AN9uYpogeJgi0agGNy92A+mLfK7yNE2VoU+Y4Byn0fhtVfsWN83/Voamp1clM5jDVtjTd5yCYyOXci4FpzMRRtbrROC/mQCOUyjTe+GTdJ+stlZ99Dqovg/s+WYccrkfFTHTKjNCL8kkUSGC8aJ8E1aTtRfkMtKhTbD1StTMA0CLSAn7tcXliqYZ1qPbjXWQZGAioXC6FC9lxFi+0dLLbQXmwt1f4HifmP1eHxkBRGgNFaQwUpY6NIo6DnxkaWcjmXD9OoGOVVMcWvR2Heiubc49O7WBkAdQwdx+Q0N9VPRkwah5gPg6Q9sC027AGcu2sHoEsmp2QI7hon0JwKw7EkLRZ8YofA6PvOOaa497xVeaTOI6xaHZOYPqHd6wz9AerwMAGbsFDbwAAAABJRU5ErkJggg=="
            />
          </a>
          <a href class="nav-icon-blue">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAAE2klEQVRYhe2XTWxUVRTHf+d2iiFAqtGknQ/6WqW0fLgwIySugErcvBlITGBRV2oofsTEkBgChUpDJUQXGiHBwIYVLIgxOh1WUMCFiUhXEq1t1E4zb1oSSPgKKO2842LevHmUaWemGXec1Xnvnvv+v3fveefcB09tYZNKAS2t29ca8gkRuoBmYEmNGo8Epl0YVXRoKpP+fVFAK1cmN7hGvwA21QhQweSSq+4nU5PpkXKjDeVuxlrtXjXyLfBifWEAaBeRd5qaOu/cvTP289zBJ1YoYiU+FDgeuJUFPSliflSTn2qYldla1PMhDYnbEHZdNoloLxAtqesHzkT6xLxA3jb9BIQAUL4Rd+mebPbcw1og5rNYbMdSDf3zFaq9nvyMq+5rwe0LBSd4OePDOJND79cDpGjei+2OWAkR2AXaaEQ+B14vxpii09K6fS2lBM6Ku3RPvUCilm3HrMR3sfbERgBm5GPA8Ya7I23JrmJsqOTMJtXfQT1ZzTaFLXuNYLaIlxcKDsJwbiI1+nikHFZ4RV0UeDOXSz2ItCZOiXCoIKdJYPQxIISOomuMXlkIJNJqbzUiRxXioIFHFKgiln1NMHudTGq4MCBfo/qRQU6VNLiipamrSwtTXBOkuejnCd2Yh0WiVnIQdJ8uUMMEeRX0QtSyjziZ9EFnInUaOB2MccVMibrFF2l5AohATTIz5MsJeTD7/RvKuBg9qy7XAcSwXlV6gFUFHemLWjZOJn1g7rPMDHktVUHfC80NnM8irfZW0H1FFFUGcpP3P4PLwbp0Lh6PD964Fe5Tpd+D2h+1ksP+9lWwqoG8nCmkiTKQmxwaKBc3MjIyAxyKtdmiKgUo0aPAxqp0qgkKW/aaQgIDynhhZRa25uenB0H+9OZsiLRv66wbkGC2+L7hzJxtKmveSp3x52m+u25AqK70XS+Bq5sXiFUTqxuQiLgBlYpnqBJDMNbV+SNrBNJSmUcM66sFEg3EimTrBoTgf7Kq0hOPxxsrTVm3bscSoKek5Fb12VcFlJtIjSp6zbtcdeNWuK/SnNv3Hx6keMBTrjp/nR+rGxCAYPbiNS5V+mNt9kC5lYrH441RK3EYKEKrGPZWq1N1YXQyqeGoZR8B6QNEVfqnb0beilrhs6j8WqDWl6dv0sNjR18ZzE6kLi8GyO9fbmP5s7aTSR+MWjYg+wEBfQk4gJT9gBRk0MmkPi036IY0FJjma/tbJqjf4Y2q333nihQapWxF+GWeGFCuitDtZFL9BM8nATOUNBSmi76/Qq7KmHhVw3XZBMx7JvIa5cZI+7ZO0Xw36h3cBQejF6tM4M0B34/3C1fYstcY5DfvMqcz0pHLpR5U8eCaLRbbsVQbHo4BMQA1piv39w9/QGDLCn+Ucsm7jMgSvvw/YABoeHCsCANcLMLAnB/F5U0d10XM2979+IpnV0dXLOu8eO/e2Ew9OJqb31j23AtdJxR517v1CHF33rs97ufQE30p2pZ4DyX48+aocsoYrrhipkL5fE1wsw0NjUbdMLBZlV1AxBdX3Z2dTJ8MxpdtlLFWu1fFHAet2CIWabOiuic7mT42d6Bsvbl7Z3xkeVPHeRHTAbTXGeaCYnY6k0PflxuseJSItCW7UE0atFMxLaDP1KYv/wrutIsZxUgqmMBPbTH2H5s31MQHmYGIAAAAAElFTkSuQmCC"
            />
          </a>
        </div>
      </div>
      <div class="footer-top-menu-end col-container">
        <!-- Start Nav Section -->
        <div class="sections col-container">
          <h3 class="category-text">Графік роботи Call-центру</h3>
          <a href id="phone-call">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAABmJLR0QA/wD/AP+gvaeTAAACu0lEQVRYhd3YPWiddRTH8c+5Ca1GmkFB6xs4qKCLIopmERzae28FLWpVdBJFkA46qBTBN+xQCi4uGUREUGmkDiltmlsSFJeiLl10cBAUMcaaio3YYuw9Dgk2N3lyc5N7nzv4G57h/z/nPF/O/+Wc56GNsm4464bb2fRalUKQXbZn1SHptDSbVY/2CygKYO7UNI5rlg2fseDmmDZXNlBLhrLmBunoChi43KC3yoZZBYRR6apCy/BsVt3WN6CsGUGtje0A3smCZS4FSNi9rnW4V81j/QFKN3boczB3uqwcnNY91OlSXK9iXxkwtGbohw34vZB7bOk9TmuGTm7Ab8Dp4ku1W10MekEDf3XoNxqfO18qUEz5QxjrwGdGeLMMmBYgEA7gwjo+L8dxZ/sCFBO+E95tY/+be3xcFswqoKWRV/DrGvZDTpXbjqwCimN+xxOKl27IOe+XWT4Kj25MmpYOFHqE3epe7SsQGPEapgrn0htZ83QZQG1Tn1VXC1/j2oLpf/BwTDrSS6C2t200zEhVCjvFQYxl1YN9A1qC+kbF/fizYPoS4XBWPdUuRu5xaae1r6N6FBO+1PQQ/i6YHhTey5rXV56+rBvOmrfNmzNvLqv2r9e6bOj4Zt0j0iGL3WNRtE9t9YzbnXXSk8JBbF9h9RNeMmksyK6AlkF9iK1rmJyzWKSvaB/IFwY8HxNOdQUEWXWfMI5tm/FfpiY+0vRinFisDpu+cXOXuzUds14mOtMZ6blo+KSrEpB1t0onFN9TG9V5W1zZVdcXx30r3YXPegBU+e/RjaJhxjY7sN/inthkIIfjiPmeVu2sqQofrPn1u7Z+tuCOmDbb00Y9JjVU3CKNWqx1negXTQ/EtFlK7Gtyh5tU7BMex1ChUThqwd6Y8uPFoZK19MNrpzSC69AUvtc0Hg1flf3+/5/+BVovuUyr4EUjAAAAAElFTkSuQmCC"
            />(096)555-22-22
          </a>
          <div class="category-links col-container">
            <span>У будні з 08:00 до 21:00</span>
            <span>Субота з 09:00 до 20:00</span>
            <span>Неділя з 10:00 до 19:00</span>
          </div>
        </div>
        <!-- End Nav Section -->

        <div class="sections col-container">
          <h3 class="category-text">Інформація про компанію</h3>
          <div class="category-links nav-items col-container">
            <a href>Про нас</a>
            <a href>Контакти</a>
          </div>
        </div>
        <div class="sections col-container">
          <span class="category-text">Допомога</span>
          <div class="category-links nav-items col-container">
            <a href>Доставка та оплата</a>
            <a href>Гарантія</a>
            <a href>Запитання та відповіді</a>
          </div>
        </div>
        <div class="sections col-container">
          <h3 class="category-text">Купуйте online з</h3>
          <div class="pay-icons nav-items row-container">
            <img
              src="data:image/png;base64,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"
            />
            <img
              src="data:image/png;base64,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"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-menu row-container">
      <span>© Інтернет-магазин «ХОУМ ШОП» 2020</span>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
footer {
  padding: 1.2rem map-get($padding_container, small);
  box-shadow: 2px 0px 2px #bdbdbd;
  background-color: $color_gray;
  .footer-top-menu {
    @include centered;
    .footer-top-menu-start {
      width: 100%;
      max-width: 500px;
      #subscribe-form {
        input {
          border-radius: 0.3rem 0 0 0.3rem;
        }
        button {
          border-radius: 0 0.3rem 0.3rem 0;
        }
      }
      .social-icons {
        align-self: center;
      }
    }
    .footer-top-menu-end {
      #phone-call {
        margin: 0;
      }
    }
  }
  .footer-bottom-menu {
    @include centered;
    span {
      font-size: map-get($font_size, small);
      margin: map-get($margin_container, small) 0;
    }
  }
}

// Tablet version
@include tabletVersion {
  footer {
    padding: 1.2rem map-get($padding_container, big);
    .footer-top-menu {
      .footer-top-menu-end {
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: flex-start;
        .sections {
          flex: 0 0 40%;
        }
      }
    }
  }
}

// Full version
@include fullVersion {
  footer {
    .footer-top-menu .footer-top-menu-end .sections {
      flex: 0 0 20%;
    }
  }
}
</style>
