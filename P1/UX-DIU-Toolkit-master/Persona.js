/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */
/*          [DIU] UX Toolkit               */
/*          ver 1.0, 2019                  */
/*******************************************/

/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) {

		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{

                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 0,
				Name: " Jose María Sevilla",
				Photo: "Niñotrabajofinal.jpeg",
				Quote: "Las cosas no son siempre como se ven.",
				Age: 22,
				Occupation: "Repartidor de glovo.",
				Family: "Vivo con su padre y su hermana mayor,actualmente sin pareja",
				Location: "Vallecas-Madrid.",
				Character: "trabajador, simpatico, extrovertido, leal, bastante paciente, apasionado del tenis",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 5 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				],
				Goals: ["independencia economica en solitario", "Conocer gente de fuera.","Encontrar un trabajo estable en fotografia.", "Aprender a tocar la bateria.", "Quiere tener una mascota.", "Visitar Baviera y fotografiar los castillos."],
				Frustrations: ["No me gusta vivir con mi padre y mi madrastra.", "Que no me salgan las cosas como quiero.", "No haber acabado el módulo de fotografia.", "Me echarón de mis ultimo trabajo por no dominar bien el ingles.", " Se siente atrapado en su casa."],
				Bio: "Nací en un pequeño pueblo llamado puertollano en el cual viví hasta la edad de 14 años cuando murió mi madre. A la edad de 16 años tuvimos que dejar el pueblo porque mi padre se volvió a casar y nos mudamos. Tuve pareja aunque lo dejé con ella al tener que mudarme.Trabajé en un restaurante repartiendo comida y comencé el módulo de fotografía aunque lo acabé dejando.Ahora mismo soy autónomo en glovo repartiendo comida.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 2 }

				],
                Contextos: "Está pensanso en acudir a una academia de fotografia y poder empezar a ganarse la vida en ello,pero no tiene suficiente dinero para comenzar a montar su propio estudio.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			},
			{

                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/


				Id: 1,
				Name: "Noelia García Martín",
				Photo: "mujer1.jpeg",
				Quote: "Destaca en lo que te apasiona",
				Age: 45,
				Occupation: " Veterinaria ",
				Family: "Divorciada y con dos hijas de 15 y 9 años",
				Location: "Valencia",
				Character: "Alegre, Optimista, Trabajadora, Atenta, Inquieta, y Poco paciente, Indecisa.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 2 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				],
				Goals: ["Ascender en su trabajo.", "Abrir su propia veterinaria.", "Mudarse cerca de la playa.", "Aprender a bailar.", "Un grupo de amistad."],
				Frustrations: ["No tener tiempo para mi misma.", "No tener muchas amistades.", "Que no la valoren en el trabajo.", "Su hija mayor no quiere seguir sus pasos y estudiar veterinaria.", "Sus hijas quieren irse a vivir con el padre."],
				Bio: "Siempre he vivido en Valencia, donde estudié. Repetí 2 veces en bachillerato por lo que cuando llegue a la politecnica a estudiar era la mayor, por loq ue me ha dificultado a la hora de hacer amistades. Durante este periodo conoci a mi exmarido. 5 años despues me quedé embarazada de mi primera hija por lo que el dinero que tuve ahorrado para abrir mi clínica se vio esfumado por la boda y la mudanza a una casa mas grande. Todo fue bien hasta 6 años despues que nació mi segunda hija. Tras un año del nacimiento dejé a mis hijas solas con mi exmarido, por que me surguio un trabajo bien pagado en barcelona por lo que me decidí irme para ahorrar para abrir mi clínica. Esta separación durante tanto tiempo acabó derivando al divorcio.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }

				],
                Contextos:   "Le ha surgido una nueva oferta de trabajo bastante tentadora, con la cual podría en unos años abrir su propio negocio, por lo que necesita mejorar su idioma para comunicarse con los extranjeros de la zona." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 4 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
