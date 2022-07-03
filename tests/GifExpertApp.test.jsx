import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en <GifExpertApp/>', () => { 

    //Probar que pasa si viene una categoria que ya existe
    //Probar que pasa si no viene categoria??
    //Probar sí se agrega la categoria???

    test('debe de agregar una categoria al listado de categorias', () => { 
        
        render( <GifExpertApp/ > );

        screen.debug();

     })

 })