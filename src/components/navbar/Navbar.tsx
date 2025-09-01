import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full bg-indigo-900 text-white flex justify-center py-4">
      <div className="container flex justify-between text-1g">
        <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>

        <div className="flex gap-4">
          Postagens 
          Temas 
          Cadastrar 
          tema
          Perfil 
          Sair
        </div>
      </div>
    </div>
  );
}
