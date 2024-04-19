import React from "react";
import fondoLogin from "../assets/CCEeHAC9eZ5SayqW7vQtI-transformed.jpeg";
const RegistroAdmnistradores = () => {
    async function registrarAdministrador (e: React.FormEvent) {
        e.preventDefault();
    }
    return (
        <>
            <div className="w-screen h-screen bg-cover bg-left md:bg-center " style={{backgroundImage: `url(${fondoLogin})`}}>
                <div className="w-full h-full flex flex-col-reverse lg:flex-row-reverse">
                    <div className=" bg-white p-6 h-full w-10/12  lg:w-3/6 lg:h-screen mx-auto lg:mx-0 my-12 lg:my-0 rounded-3xl ">
                        <form className=" flex items-center justify-start flex-col w-10/12 h-full mx-auto lg:align-baseline" onSubmit={registrarAdministrador}>
                            <h1 className="flex  text-center font-bold m-20 text-5xl lg:m-4 text-2xl">
                             CREA TU CUENTA
                            </h1>
                        
                            <div className="w-screen flex items-center justify-center flex-col  lg:w-full m-0 flex flex-col    " >
                                <div className=" flex flex-col m-12  lg:m-1  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Nombre completo:</label>
                                    <input type="text" className="w-full border-b border-gray-400 mb-4 focus:outline-none lg:w-full"/>
                                </div>
                                <div className="flex flex-col m-12   lg:m-1  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Apellidos:</label>
                                    <input className="border-b border-gray-500 mb-4 focus:outline-none w-full" type="text" />
                                </div>
                                <div className="flex flex-col m-12   lg:m-1  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Fecha de nacimiento:</label>
                                    <input className="border-b border-gray-500 mb-4 focus:outline-none w-full" type="text" />
                                </div>

                             
                                <div className="flex flex-col m-12  lg:m-1 flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Telefono:</label>
                                    <input type="text" className="border-b border-gray-400 mb-4 focus:outline-none w-full"/>
                                </div>
                                <div className="flex flex-col m-12   lg:m-1  flex flex-col  w-2/4  ">
                                    <label className="text-left text-2xl lg:text-sm">RFC:</label>
                                    <input className="border-b border-gray-500 mb-4 focus:outline-none w-full" type="text" />
                                </div>
                                <div className="flex flex-col m-12   lg:m-1  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Como te enteraste de BitRestaurant?</label>
                                    <select className="border-b border-gray+-500 mb-4 focus:outline-none w-full" type="text">
                                        <option value="Facebook">Facebook</option>
                                        <option value="Instagram">Instagram</option>
                                        <option value="Amigos">Amigos</option>
                                    </select>
                                </div>

                            
                                <div className="flex flex-col m-12   lg:m-1  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Correo electronico:</label>
                                    <input type="text" className="border-b border-gray-400 mb-4 focus:outline-none w-full"/>
                                </div>
                                <div className="flex flex-col m-12   lg:m-1  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Contraseña:</label>
                                    <input className="border-b border-gray-500 mb-4 focus:outline-none w-full" type="text" />
                                </div>

                                <div className="flex flex-col m-12 lg:m-1 flex flex-col w-2/4">
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4  rounded-2xl w-full h-12">Crear cuenta</button>
</div>
                        
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};
export default RegistroAdmnistradores;
