<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Hilos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p.mb-4 El hilo es un conjunto de fibras textiles agrupadas, unidas o torcidas, utilizado en la fabricación de tejidos. Su tipo varía según la fibra y la textura de la tela. Cuando se compone de filamentos continuos, se denomina hilo continuo, mientras que, si está formado por fibras discontinuas, se conoce como hilado.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-6.col-11.col-md-8
            img.mb-4(src='@/assets/curso/temas/Tema2/img02.png', alt='')
          .col-lg-6.bg1_4.p-4
            p.mb-3 Los hilos de coser están diseñados para desplazarse rápidamente a través de las máquinas de coser, formando puntadas resistentes y eficientes sin romperse ni deformarse a lo largo de la vida útil del producto. Su función principal es proporcionar resistencia, estética y un buen desempeño en costuras y puntadas.
        p.mb-4 El hilo puede fabricarse con fibras naturales o sintéticas. Entre ellos, el poliéster es uno de los más utilizados debido a su alta resistencia, superior a la del algodón, y a su disponibilidad en una amplia variedad de tamaños y colores (Coats, s.f.).  
      
      .col-lg-3.col-8.col-md-6
        img(src='@/assets/curso/temas/Tema2/img01.png', alt='')

    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Propiedades y características

    p.mb-5 Los hilos se fabrican a partir de fibras de origen natural o artificial, e incluso pueden combinar ambos materiales para obtener hilos de mayor calidad. La calidad del hilo se determina mediante tres características principales:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
        .col-md-8.col-lg-4.mb-3
          .tarjeta-numerada.color-primario2.p-2
            .tarjeta-numerada__numero2
              .h2 A
            br
            p.px-4 #[b Textura del hilo:]  un hilo de buena calidad debe tener una hebra brillante, continua y sin flecos.

        .col-md-8.col-lg-4.mb-3
          .tarjeta-numerada.color-primario2.p-2
            .tarjeta-numerada__numero2
              .h2 B
            br
            p.px-4 #[b Resistencia del hilo:]  debe ser firme y resistente, sin romperse fácilmente al aplicar una ligera tensión. Si se quiebra con facilidad, indica baja calidad.

        .col-md-8.col-lg-4.mb-3
          .tarjeta-numerada.color-primario2.p-2
            .tarjeta-numerada__numero2
              .h2 C
            br
            p.px-4 #[b Torsión del hilo:] influye en el tacto del tejido y en sus posibilidades de acabado. Es un parámetro clave en el diseño textil.
            ul.lista-ul
                li.mb-2.d-flex
                  i.fas.fa-check-circle
                  p #[b Torsión derecha (S):]
                    span.px-1 se enrolla en el sentido de las manecillas del reloj.
          
                li.d-flex.mb-2
                  i.fas.fa-check-circle
                  p #[b Torsión izquierda (Z):]
                    span.px-1 se enrolla en sentido contrario a las manecillas del reloj.
                li.d-flex.mb-2
     

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1. 
          span Torsión del hilo 
        figure
          img(src='@/assets/curso/temas/Tema2/figura1.svg', alt='La torsión del hilo influye en la textura y el acabado del tejido, siendo S cuando gira en sentido horario y Z en sentido antihorario.')
        figcaption Fuente: SENA, (2013).
      .col-lg-6
        .col-lg-2.mb-4.col-3.col-md-2
          img(src='@/assets/curso/temas/Tema2/1.svg')
        .col-lg-11.mb-4
          p Para garantizar la calidad, los hilos de coser deben cumplir las siguientes condiciones:  
        .row.justify-content-center.align-items-center
          .col-lg-5
            ul.lista-ul
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Torsión en Z.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Diámetro uniforme.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Resistencia a la tracción.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Elasticidad.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Acabado filamentoso.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Resistencia a la abrasión.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |Solidez del color.
          .col-lg-7.col-11.col-md-8
            img(src='@/assets/curso/temas/Tema2/img03.png')

    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Clasificación de hilos


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-11.mb-3.col-md-8
        img(src='@/assets/curso/temas/Tema2/img04.png')
      .col-lg-4.mb-4
        p.mb-4 El hilo se puede clasificar de diferentes maneras, algunas clasificaciones comunes se basan en:
        img(src='@/assets/curso/temas/Tema2/img05.svg')
      .col-lg-4.col-10.col-md-8
        img(src='@/assets/curso/temas/Tema2/img06.svg')

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg5.py-2.w-card-text.text-white Clasificación basada en sustrato

    p.mb-2 Los hilos pueden estar compuestos por fibras naturales o artificiales. En la siguiente tabla se presenta su origen y tipo de fibra.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-5
        .d-flex.align-items-center.mt-4
          h3.bg4.py-2.w-card-text2 Hilo Natural

    .row.justify-content-center.mb-4(data-aos="zoom-in-left")
      .col-lg-7.mb-4
        p El uso de hilo hecho de sustratos naturales es ahora mínimo en aplicaciones industriales. Sin embargo, el hilo natural más comúnmente utilizado es el de algodón.
        p De origen animal: como la lana, obtenida del vellón de las ovejas, o la seda, obtenida de la fibra que segrega el gusano de seda al hacer su capullo.
        p Ejemplo: el algodón y el lino.
      .col-lg-5.col-md-10
        img(src='@/assets/curso/temas/Tema2/img06.png')
    
    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .col-lg-4.mb-4
        .row.justify-content-start.mb-4(data-aos="zoom-in-left")
          .col-sm-12.col-lg-12
            .d-flex.align-items-center.mt-4
              h3.bg4.py-2.w-card-text2 Hilo Sintético
        p Son elaboradas a través de procesos químicos, especialmente de derivados del petróleo, el carbón y otros minerales. También se les conoce como fibras sintéticas.
        p Este tipo de hilo tiene propiedades como alta tenacidad, resistencia a la abrasión y buena resistencia a químicos. No se ven significativamente afectados por la humedad, podredumbre, moho, insectos o bacterias.
        p Ejemplos: nailon, acrílico y poliéster.  
      
      .col-lg-4.mb-4.col-11.col-md-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 2. 
          span Hilo con núcleo 
        figure
          img(src='@/assets/curso/temas/Tema2/figura2.png', alt='El hilo con núcleo combina filamentos y fibras cortas, ofreciendo resistencia y facilidad de costura. Es ideal para prendas que requieren alta fortaleza y costura a gran velocidad.')
        figcaption Fuente: SENA, (2013).
      .col-lg-4
        .col-lg-2.mb-4.col-3.col-md-2
          img(src='@/assets/curso/temas/Tema2/2.svg')
        .col-lg-11
          p El hilo con núcleo está compuesto por fibras cortas y filamentos, combinando la fortaleza del filamento de poliéster con la facilidad de costura del recubrimiento de fibra de algodón o poliéster. Su estructura lo hace ideal para la costura de alta velocidad en distintos tipos de prendas, especialmente aquellas que requieren una alta fortaleza de costura.

      p.mb-4 Los hilos de filamento son más fuertes que los hilos de fibra corta de la misma fibra y tamaño. Se usan comúnmente tres tipos de hilos de filamento:


    .row.fondotema2.align-items-center.py-3
        .col-lg-12.col-12.px-lg-5.px-4
          .row.justify-content-center
            .col-lg-4.col-11.col-md-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 3.
                span  Hilo monofilamento 
              figure
                img(src='@/assets/curso/temas/Tema2/figura3.png', alt='El hilo monofilamento está compuesto por una sola fibra continua de grosor específico. Es fuerte, elástico y apto para tejido, tricotado o trenzado, pero su rigidez y textura áspera limitan su uso a bastillas, cortinas y tapicería.')
              figcaption.mb-4 Fuente: SENA, (2013).
              p El hilo monofilamento se hace de una sola fibra continua de un grosor especificado. Tiene suficiente consistencia y elasticidad para ser tejido, tricotado o trenzado. Aunque es muy fuerte y costoso de hacer, carece de flexibilidad y tiene una textura áspera. Su uso se restringe a bastillas, cortinas y muebles tapizados.
            .col-lg-4.col-11.col-md-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 4. 
                span Hilo multifilamento 
              figure
                img(src='@/assets/curso/temas/Tema2/figura4.png', alt='El hilo multifilamento suave, hecho de nailon o poliéster, destaca por su resistencia. Consta de filamentos continuos torcidos juntos y se usa en calzado, prendas de cuero y productos industriales.')
              figcaption.mb-4 Fuente: SENA, (2013).
              p El hilo multifilamento suave se elabora comúnmente de nailon o poliéster y se usa donde la resistencia es primordial. Está compuesto por dos o más filamentos continuos torcidos juntos. Es común en la costura de zapatos, prendas de cuero y productos industriales.
            .col-lg-4.col-11.col-md-10
              .titulo-sexto.color-acento-contenido
                h5 Figura 5. 
                span Hilo de filamento texturizado 
              figure
                img(src='@/assets/curso/temas/Tema2/figura5.png', alt='El hilo de filamento texturizado, principalmente de poliéster, se usa en hilos de lanzadera para puntadas de cobertura, brindando mayor extensibilidad y evitando enredos.')
              figcaption.mb-4 Fuente: SENA, (2013).
              p El hilo de filamento texturizado es usado principalmente en poliéster, se emplea en hilos de lanzadera para puntadas de cobertura. Los filamentos texturizados ofrecen mayor cobertura y extensibilidad, asegurando que el hilo esté más sujeto y evitando que se enrede.
              p Para mejorar la facilidad de costura: algunos terminados proporcionan mayor fortaleza, resistencia a la abrasión y lubricación del hilo.
    .py-4
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg5.py-2.w-card-text.text-white Clasificación basada en terminado del hilo

    p.mb-4 Dentro de la clasificación del hilo, existen aquellos que se basan en la estructura del terminado. Se dan terminados al hilo por dos propósitos (Coats, s.f.).

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-primario.p-5
            .row.mb-4
              .col-3.col-md-5.col-lg-3
                figure
                  img(src='@/assets/curso/temas/Tema2/6.svg', alt='Texto que describa la imagen')          
            p #[b Para mejorar la facilidad de costura:] algunos terminados proporcionan mayor fortaleza, resistencia a la abrasión y lubricación del hilo.
          
          .col-md.tarjeta.bg1.p-5
            .row.mb-4
              .col-3.col-md-5.col-lg-3
                figure
                  img(src='@/assets/curso/temas/Tema2/7.svg', alt='Texto que describa la imagen')          
            p #[b Para lograr un requisito funcional específico:] algunos terminados incluyen bondeo, antiabsorbencia, antihongo, retardante de fuego, repelente al agua y antiestático.

    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Tipos de hilos según su aplicación en la industria

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-8.mb-4.col-md-6
        img(src='@/assets/curso/temas/Tema2/img07.png', alt='Texto que describa la imagen')   
      .col-lg-9.col-11
        SlyderF.circl-arrow.mb-4(columnas="col-lg-6 col-xl-5")
          .tarjeta.bgslyder.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-4
                img(src='@/assets/curso/temas/Tema2/sly.svg' alt='')
            h5.text-center.tislyder.p-1  Hilos aptos para teñir
            p.text-center Elaborados para telas blancas o crudas, fabricados en algodón 100 %. Resistentes al calor de la aguja, se utilizan en crudo y pueden aplicarse en todo tipo de costura.
          
          .tarjeta.bgslyder.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-4
                img(src='@/assets/curso/temas/Tema2/sly.svg' alt='')
            h5.text-center.tislyder.p-1  Hilos poliéster 100 %
            p.text-center Filamento continuo, especial para costura de realce, con elasticidad controlada. No encoge fácilmente, no es afectado por humedad o bacterias, el color no cede al cloro y brinda protección térmica. Desliza suavemente y no deja residuos en la máquina.
          
          .tarjeta.bgslyder.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-4
                img(src='@/assets/curso/temas/Tema2/sly.svg' alt='')
            h5.text-center.tislyder.p-1  Hilos de algodón
            p.text-center Utilizados en costura básica, no ceden y pueden romperse con telas flexibles. Son ideales para trabajos de lencería.
          
          .tarjeta.bgslyder.p-4
            .row.justify-content-center.mb-3
              .col-5.col-md-4
                img(src='@/assets/curso/temas/Tema2/sly.svg' alt='')
            h5.text-center.tislyder.p-1 Hilos para bordar
            p.text-center Fabricados con rayón, alta resistencia, metálicos y poliéster súper brillante. El poliéster es el más fuerte debido a su fibra sintética. El hilo mercerizado y el multifilamento resisten la humedad. El acrílico se usa en máquinas multi - cabezas.
      
    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Recomendaciones para la selección del hilo

    p.mb-5 En el mercado se encuentra gran variedad de catálogos de hilos de acuerdo con sus características y usos. Los códigos que describen las características de un hilo se conocen con el nombre de “título” y deben de ir precedidos del símbolo del sistema que se haya empleado. Los sistemas de numeración se clasifican en dos grupos muy bien diferenciados, estos se basan en planteamientos opuestos: el sistema directo (peso) y el sistema inverso (longitud).

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-7
        .d-flex.align-items-center
          img.w-card-icon(src="@/assets/curso/temas/Tema1/subt.svg")
          h3.bg5.py-2.w-card-text.text-white Calibres de los hilos

    p.mb-4 El calibre o grosor del hilo varía según su uso específico. Antes de elegir un hilo, es fundamental analizar el tipo de puntada, el tejido y la aplicación deseada.

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-6.bgfondo.mb-3
        .row.justify-content-center.align-items-center
          .col-lg-4
            img.img2.d-none.d-lg-block(src="@/assets/curso/temas/Tema2/img08.svg")
          .col-lg-5.p-2.col-md-5
            ul.lista-ul
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Muy grueso: 40 / 3, 40 / 2.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Grueso:  70 / 2, 60 / 2.

              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Mediano: 100 / 2, 120 / 2.

              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Delgado.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-0 Muy delgado.
     
      .col-lg-6
        p Durante la fabricación del hilo, este recibe estirajes, y la cantidad de estirajes determina su grosor, por ejemplo: en la numeración 40 / 3, el número antes de la barra indica la cantidad de estirajes realizados, mientras que el número después de la barra representa la cantidad de cabos que conforman el hilo.
        p Para elegir el calibre adecuado, es fundamental considerar el tipo de tela que se va a coser.


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          h3.bg4.py-2.w-card-text2 Calibres de hilos y sus usos:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8
        ul.lista-ul
          li.d-flex.mb-0
            i.fas.fa-check-circle
            |Calibre 120: recomendado para coser telas finas como encajes y bordados.

          li.d-flex.mb-0
            i.fas.fa-check-circle
            |Calibre 100: utilizado en costuras de grosor mediano, como ropa de niños, camisas y vestidos.

          li.d-flex.mb-0
            i.fas.fa-check-circle
            |Calibre 80: ideal para coser popelinas, corsetería, hacer ojales y trajes de baño.

          li.d-flex.mb-0
            i.fas.fa-check-circle
            |Calibre 40: se emplea en costuras de máxima resistencia, como tapicería, lonas o mezclillas.

          li.d-flex.mb-0
            i.fas.fa-check-circle
            |Calibre 20: usado en costuras generales de pantalones, chaquetas o jeans.

          li.d-flex.mb-0
            i.fas.fa-check-circle
            |Calibre 10: destinado a costuras muy gruesas, calzado industrial, guantes de béisbol, lonas, mochilas, petacas, botas o cubre asientos automotrices.
      
      .col-lg-4.col-11.col-md-9
        img(src='@/assets/curso/temas/Tema2/img09.png' alt='')


    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          h3.bg4.py-2.w-card-text2 Recomendaciones para seleccionar el tamaño de hilo a utilizar

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-11.mb-4.col-md-9
        img(src='@/assets/curso/temas/Tema2/img10.png' alt='')
      .col-lg-8
        p El nombre del hilo corresponde directamente al número, ejemplo: nailon 100 denier es más grueso que un 70 denier.
        .row
          .col-lg-9
            p Existen tres unidades fundamentales para medir el tamaño del hilo:
            ul.lista-ul
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-1 #[b Denier (Dnr):] se basa en una longitud constante de 9000 m y un peso estándar.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-1 #[b Decitex (dtex):] se define por una longitud constante de 10000 m y un peso estándar.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                p.mb-1 #[b Tex (Tex):] corresponde a una longitud constante de 1000 m y un peso estándar.
          .col-lg-3.col-9.d-none.d-lg-block
            img(src='@/assets/curso/temas/Tema2/img11.svg' alt='')

    p.mb-4 Todos los sistemas de numeración utilizados para indicar el tamaño del hilo se clasifican en dos tipos: sistemas de "peso fijo" o de "longitud fija".

    .row.justify-content-center.mb-3
        .col-lg-3.col-8.mb-4.col-md-6
          img(src='@/assets/curso/temas/Tema2/img12.png', alt='Texto que describa la imagen')
        .col-lg-9
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row.justify-content-center.align-items-center(titulo="Sistema de peso fijo")
              .col-md-12.mb-4.mb-md-0.col-lg-10
                p En este sistema, el peso de la unidad se toma como fijo y se mide su longitud.
                ul.lista-ul
                  li.mb-2.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Sistemas bajo peso fijo:
                  .mb-0 Conteo Inglés (Ne) = número de madejas de 840 yardas / libra.
                  .mb-0 Conteo Métrico (Nm) = número de madejas de 1000 metros / kg.
                 
                p Ejemplo:
                p.mb-0 Ne 1: en una libra de peso de hilo, hay 840 yardas de longitud de estambre.
                p.mb-3 Ne 5: en una libra de peso de hilo, hay 4200 (840 x 5) yardas de longitud de hilo.
                p En los sistemas de peso fijo, el hilo se hace más fino mientras sube el número de conteo.


            .row.justify-content-center.align-items-center(titulo="Sistema de longitud fija")
              .col-md-12.mb-4.mb-md-0.col-lg-10
                p En este sistema, la longitud se toma como fija y se mide su peso.
                ul.lista-ul
                  li.mb-2.d-flex
                    i.fas.fa-check-circle
                    p.mb-0 Sistemas bajo longitud fija:
                  .mb-0 Denier = peso en gramos de 9000 metros.
                  .mb-0 Tex = peso en gramos de 1000 metros.
                  .mb-0 Decitex = peso en gramos de 10000 metros.
                 
                p Ejemplo:
                p.mb-0 Tex 40: una longitud de 1000 metros de 40 gramos de peso.
                p.mb-3 Tex 1": una longitud de 1000 metros de 100 gramos de peso.
                p En los sistemas de longitud fija, el hilo se vuelve más áspero o pesado mientras aumenta el número de conteo.




    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p Los fabricantes de hilo actualmente utilizan el sistema Tex como método de descripción. Por ejemplo, un Tex 80 es más grueso que un Tex 60.
        p Al seleccionar el tipo y tamaño del hilo, es fundamental considerar que el Tex es una medida de resistencia, utilizada principalmente en hilos de filamento continuo, como poliéster de alta tenacidad, poliamida o rayón.
      .col-lg-2.col-6
        img.mb-4(src='@/assets/curso/temas/Tema2/img13.svg', alt='Texto que describa la imagen')
      p  Generalmente, se emplea una fracción del Tex llamada dTex (decitex), que equivale a su décima parte (1 Tex = 10 dTex). La cual se presenta en la siguiente tabla:

    .row.fondotema22.align-items-center.py-3
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.mb-4
          .col-lg-8
              .titulo-sexto.color-acento-contenido(alt='La tabla presenta la equivalencia entre el calibre tradicional y la nueva nomenclatura del sistema Tex. Se observa que para telas livianas se emplea un Tex 60, para tejidos semipesados un Tex 40 y para tejidos pesados un Tex 120, demostrando que, a menor calibre anterior, mayor es el valor en Tex.')
                h5 Tabla 3. 
                span Sistema Tex 

              .tabla-a.color-acento-contenido
                table.bg3
                  thead
                    tr
                      th Uso
                      th Calibre (anteriormente)
                      th Tex (nueva nomenclatura)
                  tbody
                    tr
                      td Telas livianas
                      td 120
                      td 60 Tex
                    tr
                      td Tejidos semi pesado
                      td 75
                      td 40 Tex
                    tr
                      td Tejido pesado 
                      td 25
                      td 120 Tex
              figcaption Fuente: SENA, (2013).

    
    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-4
          h3.bg4.py-2.w-card-text2 Recomendaciones para seleccionar el hilo de acuerdo con la prenda a fabricar

    p.mb-4 Al momento de fabricar ropa interior es importante tener en cuenta que las telas y encajes utilizados, exigen hilos de coser de alta tenacidad frecuentemente controlada, elongación predecible y que sean discretos en la costura. A continuación, se identifican 6 pasos que se deben tener en cuenta a la hora de seleccionar el tipo de hilo que se debe utilizar.



    .row.justify-content-center.mb-5
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center.align-items-center(titulo="Identificar y definir el tipo de costura a realizar.")
            .col-md-12.mb-4.mb-md-0.col-lg-11
              p Cada tipo de tela requiere hilos y agujas especiales, dependiendo de la técnica que se vaya a realizar, por ejemplo, fruncidos, costura recta, bordado, etc.
          .row.justify-content-center.align-items-center(titulo="Conocer la variedad de hilos que existen.")
            .col-md-12.mb-4.mb-md-0.col-lg-11
              p En el mercado existe hilo para cada tela y operación a realizar, es muy importante identificarlos para su correcta utilización.
          .row.justify-content-center.align-items-center(titulo="Definir la calidad del hilo que necesita utilizar.")
            .col-md-12.mb-4.mb-md-0.col-lg-11
              p Es necesario conocer las propiedades y cualidades de cada hilo para decidir su funcionalidad.
          .row.justify-content-center.align-items-center(titulo="Seleccionar el hilo según el color de la tela.")
            .col-md-12.mb-4.mb-md-0.col-lg-11
              p Después de escoger la clase de hilo que va a utilizar, es muy importante que el color sea igual o muy parecido a la tela.
          .row.justify-content-center.align-items-center(titulo="Consultar las instrucciones de costura.")
            .col-md-12.mb-4.mb-md-0.col-lg-11
              p Es muy importante leer las instrucciones de uso de cada hilo y seguirlas al pie de la letra para asegurarse de que el resultado será el correcto.
          .row.justify-content-center.align-items-center(titulo="Comprar siempre hilos de buena calidad.")
            .col-md-12.mb-4.mb-md-0.col-lg-11
              p Se debe comprar hilos de excelente calidad y así garantizar una prenda de muy buena calidad y durabilidad.
        
            
      .col-lg-4.col-9.col-md-7
        img(src='@/assets/curso/temas/Tema2/img13.png', alt='Texto que describa la imagen')

























</template>

<script>
export default {
  name: 'Tema2',
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
