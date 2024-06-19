import React from "react";
import fondoLogin from "../assets/dashboard-bg.jpg";

const Dashboard: React.FC = () => {
    return (
        <div>
      
            <nav className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                          
                        </div>
                        <div className="flex items-center">
                            <button className="text-gray-900 hover:text-gray-700">Logout</button>
                        </div>
                    </div>
                </div>
            </nav>

        
            <header className="w-full h-1/2">
                <img 
                    src={fondoLogin} 
                    alt="Header Background" 
                    className="w-full h-64 object-cover"
                />
            </header>

       
            <div className="flex justify-center mt-8">
                <div className="w-4/5 overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b">Nombre de usuario</th>
                                <th className="py-2 px-4 border-b">Correo electrónico</th>
                                <th className="py-2 px-4 border-b">Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                       
                            <tr>
                                <td className="py-2 px-4 border-b">Nombre de ejemplo</td>
                                <td className="py-2 px-4 border-b">ejemplo@correo.com</td>
                                <td className="py-2 px-4 border-b">Usuario</td>
                            </tr>
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
