<script></script>
<template>
  <div class="contenedor d-flex flex-column justify-content-center border border-white border-5">
    <div class="title-selector row text-center">
      <div class="section-selector col">
        <h1>Elije una opción</h1>
      </div>
    </div>
    <div class="buttons-section row text-center">
      <div class="button-selector col">
        <button type="button" class="btn btn-primary btn-lg">
          <i class="bi bi-cart"></i>
          <span>Administración</span>
        </button>
      </div>
      <div class="button-selector col">
        <button type="button" class="btn btn-primary btn-lg">
          <i class="bi bi-truck"></i>
          <span>Producción</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.contenedor {
  height: 100vh;
  background-color: #929292;
  border-color: #fff;
}

.buttons-section .button-selector button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.buttons-section .button-selector i {
  font-size: 7rem;
}

.buttons-section .button-selector span {
  font-size: 2rem;
}
</style>
