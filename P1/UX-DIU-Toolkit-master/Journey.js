/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.JourneyIndex = 0;

        $scope.Journeys = [
			{

                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/

				Id: 0,
				Name: "Jose Maria Sevilla",
                Photo: "niño111.jpeg",

                /*** PASO #1: INSPIRACION ***/
                goal1: "Busca un estudio para poder empezar a trabajar",
                touch1: "Amigo",
                feel1: "3",
                con1: "No tiene dinero para pagarse un estudio.",
                ima1: "cartoon-speaking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Busca en internet varios estudios a buen precio. ",
                touch2: "ordenador",
                feel2: "4",
                con2: "Hay demasiadas páginas web por lo que se decanta por la recomendación de su amigo.",
                ima2: "cartoon-PChard.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Ve lo que oferta la página.",
                touch3: "Ordenador",
                feel3: "3",
                con3: "Encuentra la pagina que le indicaba su amigo pero al contactar no le responde al instante.",
                ima3: "cartoon-PChappy.png",

                /*** PASO #4: OBSERVA ***/

                goal4: " Decide ir a las oficinas ",
                touch4: "Movil",
                feel4: "2",
                con4: "Cuando llega allí se da cuenta de que ya le han contestado ",
                ima4: "cartoon-PCangry.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Se informa en el mostrador ",
                touch5: "Ordenador",
                feel5: "1",
                con5: "La recepcionista le dice que todas las plazas están ocupadas .",
                ima5: "cartoon-phoneAssistan.jpg",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Busca alguna alternativa",
                touch6: "Ordenador",
                feel6: "3",
                con6: "La recepcionista le dice que tendrán plazas los dias siguientes.",
                ima6: "cartoon-shaking.png",

			},
			{
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/

				Id: 1,
				Name: "Noelia García Martín",
                Photo: "mujer1.jpeg",

				 /*** PASO #1: INSPIRACION ***/
                goal1: "Mejorar su pronunciación y vocabulario.",
                touch1: "Profesora de academia",
                feel1: "3",
                con1: "La profesora le recomienda que para mejorar le es necesario mantener conversaciones.",
                ima1: "cartoon-speaking.png",

                /*** PASO #2: DECICION ***/
                goal2: "Bucar gente con la que mantener conversaciones.",
                touch2: "Conversación(compañero de trabajo).",
                feel2: "3",
                con2: "Consulta recomendaciones de distintas paginas, y se decide por meeting que aparentemente tiene bastante movimiento.",
                ima2: "cartoon-PChard.png",

                /*** PASO #3: ACTUA ***/

                goal3: "Encuentra un evento en el cual está interesada.",
                touch3: "Ordenador",
                feel3: "4",
                con3: "Ve una quedada con gente nativa de ingles, en una sala cercana a la playa.",
                ima3: "cartoon-PCSurprised.png",

                /*** PASO #4: OBSERVA ***/

                goal4: "Evitar que sepan que va.",
                touch4: "Ordenador.",
                feel4: "2",
                con4: "Ve que su exmarido se ha inscrito al mismo eventoy ella tenia pensado dejarle los niños ese finde, diciendole que tenia trabajo.",
                ima4: "cartoon-PCcrying.png",

                 /*** PASO #5: ANALIZA ***/

                goal5: "Buscar una manera de que no sepan que es ella.",
                touch5: "Ordenador.",
                feel5: "4",
                con5: "Busca algún tipo de modo oculto, por lo que cambia su foto por otra y de nombre se pone el noombre de pila .",
                ima5: "cartoon-PChappy.png",


                /*** PASO #6: CONCLUSION ***/

                goal6: "Asiste a la reunión.",
                touch6: "Ordenador.",
                feel6: "2",
                con6: "El exmarido se da cuenta del nombre de pila y la llama por telefono",
                ima6: "cartoon-talking.png",



			}
		];

		$scope.model = $scope.Journeys[0];

	}])
