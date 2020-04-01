## DIU - Practica 2.

- Feedback Capture Grid: Malla Receptora De Información.

  | Interesante                                                          | Críticas                                          |
  | :------:                       | :------:        |
  | 1.Información precisa y concisa.                                     | 1.Error a la hora de recargar una página anterior.|       
  | 2.Permanencia en grupos en el tiempo.                                | 2.Poca variedad en la asistencia de ayuda.        |      
  | 3.Un buscador por calendario.                                        | 3.Poca coherencia entre secciones.                |
  | 4.La página orienta a los usuarios a que hacer primero.              | 4.Mantener la coherencia del idioma.              |

  | Preguntas                                                            | Nuevas ideas                                      |
  | :------:                                                             | :------:                                          |
  | 1.Se le cambió el idioma tras su registro                            | 1.funcionalidades adaptadas al tipo de usuario.   |
  | 2.Poner claro donde está el servicio técnico.                        | 2.Promociones por bonos o ventajas                |        
  | 3.Chat de ayuda en mi idioma.                                        | 3.Promoción por número de amigos traídos.         |
  | 4.El chat más amplio en cuestión de temas                            | 4.Modo premium.                                   |
  | 5.No hay ninguna guía ni video para principiantes.                   | 5.Penalización y bonificación por la asistencia.  |    
  | 6.Me gustaría un  modo privado.                                      | 6.Un tutorial guiado.                             |
  | 7.Un modo nocturno nocturno.                                         | 7.Un monedero para el saldo.                      |
  | 8.Un modo de realidad virtual  poder quedar con el grupo desde casa. |                                                   |


- User/task matrix​: Matriz De Tareas y Usuarios.

|GRUPOS DE USUARIOS              | Usuario         | Usuario Premium      | Profesional     | Establecimientos   | Usuarios no registrados  | Ranking  |
| :------:                       | :------:        | :------:             |  :------:       | :------:           |  :------:                | :------: |
| Buscar.                        | Alto            |  Alto                |     Alto        | Alto               | NO                       | 12       |
| Abonar Dinero.                 | Medio           |  Bajo-Medio          |     Alto        | Alto               | NO                       | 10.5     |
| Consultar Correo.              | Medio-Alto      |  Medio-Alto          |     Alto        | Alto               | NO                       | 10       |
| Consultar chat.                | Alto            |  Alto                |     Alto        | Bajo               | NO                       | 10       |
| Consultar Promociones.         | Medio           |  Medio               |     Alto        | Alto               | NO                       | 10       |
| Enviar Correo.                 | Bajo            |  Bajo                |     Alto        | Alto               | NO                       | 8        |
| Consultar Notificaciones.      | Medio           |  Medio               |     Medio       | Medio              | NO                       | 8        |
| Consultar calendario.          | Medio           |  Medio               |     Medio       | Bajo               | NO                       | 7        |
| Asistir actividad.             | Alto            |  Alto                |     NO          | NO                 | NO                       | 6        |
| Alta en grupo.                 | Medio-Alto      |  Medio-Alto          |     NO          | NO                 | NO                       | 5        |
| Crear Actividad.               | Bajo            |  Bajo                |     Medio       | Bajo               | NO                       | 5        |
| Crear Grupo.                   | Bajo            |  Bajo                |     Medio       | Bajo               | NO                       | 5        |
| Consultar establecimiento.     | Bajo            |  Bajo                |     Medio       | Bajo               | NO                       | 5        |
| Borrar actividad.              | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Borrar grupo.                  | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Pasar a privado.               | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Cambiar idioma.                | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Poner modo nocturno.           | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Consultar dinero.              | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Poner Promoción.               | NO              |  NO                  |     Medio       | Medio              | NO                       | 4        |
| Consultar ayuda.               | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 4        |
| Baja de grupo.                 | Bajo            |  Bajo                |     NO          | NO                 | NO                       | 2        |
| Dejar de asistir.              | Bajo            |  Bajo                |     NO          | NO                 | NO                       | 2        |
| Quitar Promoción.              | NO              |  NO                  |     Bajo        | Bajo               | NO                       | 2        |   
| Validar establecimiento.       | NO              |  NO                  |     NO          | Bajo               | NO                       | 1        |
| Hacerte Premium.               | Bajo            |  NO                  |     NO          | NO                 | NO                       | 1        |
| Iniciar Sesión.                | Bajo            |  Bajo                |     Bajo        | Bajo               | NO                       | 3        |
| Registrarse.                   | NO              |  NO                  |     NO          | NO                 | Bajo                     | 1        |

- Labelling:Arquitectura De La Información.

Término | Icono | Significado
| ------------- | ------- | ------- |
|  1.Perfil   | 1 | Hace referencia a los datos del usuario:Correo de app,nombre usuario,foto de perfil,ciudad,actividades realizadas,grupos pertenecientes,fotos compartidas,post publicados,nivel de idioma y idiomas. |
|  2.Correo   | 2 | Se accede al apartado de mensajería donde podremos ver nuestros contactos y mensajes.                                      |
|  2.1.Amigos   | 1 | Veremos nuestra lista actual de perfiles de contacto, añadir nuevos perfiles, y borrar aquellos que no queramos conservar. |
|  2.2.LISTA MENSAJES  | 2 | Acceso a nuestro buzón de entrada y donde redactar nuestros correos.                                                |
|  3.Extensión panel lateral  | 1 | Se acceden a funcionalidades más específicas, acceso a perfil, ajustes, Promociones, establecimientos, Premium, servicio Premium. |
|  1.Grupos  | 2 | En este apartado aparecerán, en función de su última actividad, los distintos grupos a los que perteneces acompañado de su foto de grupo, y la información que quiere hacer llegar los administradores del grupo, además del anuncio de actividades nuevas propuestas.|
|  1.1.Asistir actividad  | 1 | Si el post es de una actividad nueva, puedes inscribirte mientras haya plazas. |
|  2.Actividades  | 2 | Aparecen los eventos a los que has indicado que asistirás para ver las novedades que surjan en este. |
|  2.1.Anular actividad  | 1 | Opción disponible si ya no le interesa asistir al evento y no sufrir las penalizaciones. |
|  3.Registrarse  | 2 | lo que signifique |
|  3.1.Premium  | 1 | lo que signifique |
|  3.2.Gratuito  | 2 | lo que signifique |
|  4.Iniciar Sesión  | 2 | lo que signifique |
|  5.Recordar contraseña  | 2 | lo que signifique |
|  6.Tendencias  | 2 | lo que signifique |
|  1.Chat  | 2 | lo que signifique |
|  1.1.Chat general de grupo | 2 | lo que signifique |
|  1.2.Chat de evento | 2 | lo que signifique |
|  2.Crear grupo o actividad  | 2 | lo que signifique |
|  2.1.Crear grupo  | 2 | lo que signifique |
|  2.2.Crear actividad  | 2 | lo que signifique |
|  3.Calendario  | 2 | lo que signifique |
|  4.Buscador  | 2 | lo que signifique |
|  5.Notificaciones  | 2 | lo que signifique |
|  1.Hazte premium  | 2 | lo que signifique |
|  2.Para premium | 2 | lo que signifique |
|  3.Promociones  | 2 | lo que signifique |
|  4.Mis promociones  | 2 | lo que signifique |
|  5.Establecimientos  | 2 | lo que signifique |
|  6.Mis establecimientos  | 2 | lo que signifique |
|  7.Monedero  | 2 | lo que signifique |
|  8.Ajustes  | 2 | lo que signifique |
|  8.1.Idioma  | 2 | lo que signifique |
|  8.2.Acerca de  | 2 | lo que signifique |
|  8.3.Privacidad  | 2 | lo que signifique |
|  8.4.Cerrar sesión  | 2 | lo que signifique |
|  8.5.Ayuda y soporte  | 2 | lo que signifique |
|  8.5.1.Chat de ayuda  | 2 | lo que signifique |
|  8.5.2.Formulario de sugerencias  | 2 | lo que signifique |


- Wireframes:Bocetos de la interfaz.
