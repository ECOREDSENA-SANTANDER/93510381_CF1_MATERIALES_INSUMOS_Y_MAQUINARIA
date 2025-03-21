<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p En este componente se presenta la estructura y clasificación de las fibras e hilos, resaltando su composición y características principales. Las fibras se componen de diversas propiedades y se dividen en cuatro grandes categorías: fibras de origen animal, como la lana y la seda; fibras de origen vegetal, como el algodón y el lino; fibras de origen mineral, menos comunes y utilizadas en aplicaciones específicas; y fibras sintéticas y artificiales, creadas mediante procesos industriales, como el poliéster y la viscosa. Por otro lado, los hilos también poseen propiedades específicas y se clasifican según su composición, lo que influye en su resistencia, elasticidad y aplicación en distintos tipos de tejido. En general, tanto las fibras como los hilos son elementos esenciales en la industria textil, y su correcta selección depende del origen, las propiedades y el uso que se les dará en la confección de distintos productos.
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Las fibras e hilos se clasifican según su composición y propiedades. Las fibras pueden ser de origen animal, vegetal, mineral, sintéticas o artificiales. Los hilos, por su parte, se diferencian según su composición, lo que influye en su uso y resistencia en la confección textil.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
