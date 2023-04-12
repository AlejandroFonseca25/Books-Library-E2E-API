# Books-Library-E2E-API

<p align="center"><img src="https://images.credly.com/images/31bfbc2c-4d5d-4219-8387-2c1c3f2f5d8e/End-to-End_Testing__1_.png" height="200"></p>

## Repositorios asociados
**Back:** [books-back](https://github.com/AlejandroFonseca25/books-back)

**Front:** [books-ui](https://github.com/AlejandroFonseca25/books-ui)

**E2E UI testing:** [Books-Library-E2E-UI](https://github.com/carolinapasuy/Books-Library-E2E-UI)

**E2E API testing:** Este repositorio
## Enunciado
La biblioteca de la universidad ha desarrollado un software que le permite gestionar (crear, consultar, actualizar y eliminar) los libros disponibles. En el futuro, la biblioteca planea agregar nuevas funcionalidades, por lo que es muy importante contar con pruebas que verifiquen las funcionalidades existentes, para asegurar que no habrá dificultades al momento de extender la funcionalidad del sistema.Para esto,se debe realizar las pruebas E2E tanto de API como de UI del sistema de forma que se verifique el flujo completo de la aplicación.

## Objetivos
Este taller tiene como objetivo que se aplique los conceptos relacionados con las pruebas “End to End” (E2E), de manera que pueda probar la UI y API de la aplicación de principio a fin, simulando la interacción de un usuario real. También ofrece la oportunidad de reforzar los conocimientos en integración y despliegue continuo (CI/CD).

## Contenido
Este repositorio contiene las pruebas E2E de API, haciendo uso de axios para hacer llamados al back y chai para validar los resultados obtenidos. En las pruebas se evalua el CRUD completo realizado por [books-back](https://github.com/AlejandroFonseca25/books-back). Los archivos y su objetivo son los siguientes:

- **create-book.test.js** Verifica la creación de libros considerando las dos variables nombre y autor.
- **read-book.test.js** Verifica la lectura de libros ya creados.
- **edit-book.test.js** Verifica la edición de libros considerando nombre y autor.
- **delete-book.test.js** Verifica la eliminación de libros ya creados.

## Instrucciones de ejecución
1. Clonar [books-back](https://github.com/AlejandroFonseca25/books-back) a su computador.
2. Ubicarse en el repositorio clonado en su computador y ejecutar el back usando el siguiente comando:
```
./gradlew bootRun
```
3. Clonar este repositorio.
4. Ubicarse en el repositorio clonado en su computador e instalar las dependencias necesarias para la ejecución con:
```
npm i
```
5. Ejecutar las pruebas con el comando:
```
npm test
```
*AVISO: Las pruebas denominadas BUG deben de fallar, ya que realizan un comportamiento no esperado.*


## Autores
***Carolina Pasuy Pinilla***

***Alejandro Fonseca Forero***
