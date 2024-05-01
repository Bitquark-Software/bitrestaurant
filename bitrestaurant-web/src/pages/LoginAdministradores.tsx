
import { useState } from "react";
import fondoLogin from "../assets/CCEeHAC9eZ5SayqW7vQtI-transformed.jpeg";
const LoginAdmnistradores = () => {
    async function logearAdministrador (e: React.FormEvent) {
        e.preventDefault();
    }

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div className="w-screen h-screen bg-cover bg-left md:bg-center " style={{backgroundImage: `url(${fondoLogin})`}}>
                <div className="w-full h-full flex flex-col-reverse lg:flex-row-reverse">
                    <div className=" bg-white p-6 h-3/5 w-10/12  lg:w-3/6 lg:h-screen mx-auto lg:mx-0 my-12 lg:my-0 rounded-3xl ">
                        <form className="flex items-center justify-start flex-col w-10/12 h-full mx-auto lg:align-baseline" onSubmit={logearAdministrador}>
                            <h1 className="flex  text-center font-bold m-20 text-5xl lg: text-2xl">
                             INICIA SESIÓN
                            </h1>
                            <div className="w-screen h-2/3 flex items-center justify-center flex-col  lg:w-full m-0 flex flex-col h-4/4   " >
                                <div className="flex flex-col m-12   lg:m-5  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Correo electronico:</label>
                                    <input type="text" className="border-b border-gray-400 mb-4 focus:outline-none w-full"  onClick={(e) => {setCorreo(e.target.value);}} value ={correo}/>
                                </div>

                                <div className="flex flex-col m-12   lg:m-5  flex flex-col  w-2/4 ">
                                    <label className="text-left text-2xl lg:text-sm">Contraseña:</label>
                                    <input className="border-b border-gray-500 mb-4 focus:outline-none w-full" type="text"  onClick={(e) => {setPassword(e.target.value);}} value ={password}/>
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
export default LoginAdmnistradores;
