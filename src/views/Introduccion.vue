<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-2.col-md-6.col-6.d-none.d-lg-block
        img(src='@/assets/curso/temas/img_intro.png', alt='')
      .col-lg-10.col-md-12.col-sm-12
        p Las fibras textiles son los filamentos procesados para formar hilos o telas para la industria de la confección y corresponden a un insumo que ha venido evolucionando con el tiempo. Inicialmente la industria solo contaba con las fibras que se obtenían de la naturaleza, pero con los avances tecnológicos y la necesidad de contar con fibras de características especiales, ha obligado a realizar estudios y pruebas para poder diseñar fibras artificiales hechas en laboratorios y con características que le dan un valor agregado a las prendas de vestir, tales como: impermeabilidad, efecto antibacterial, protección, resistencia y durabilidad; un número importante de propiedades que permiten que el hombre pueda no solo satisfacer la necesidad básica de protección, si no a la vez contar con características especiales de acuerdo con las necesidades de uso para el campo personal y laboral.
    
    p.mb-4 De igual manera las fibras aportan estas características a los hilos formando una unidad ideal y necesaria en la creación de los tejidos.

    .row.justify-content-center.align-items-center(data-aos="fade-up-left")           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Falta link del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
