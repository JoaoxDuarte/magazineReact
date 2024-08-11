import logo from '../assets/logo/LOGO_OF_LOGO.svg';
import UserButtons from './UserButtons';
import { useLocation, Link } from 'react-router-dom';
//useLocation = redirecionar pag
// <a href='/'> ao clicar vai para home
//text-= tamanho grande e h-16 = altura
//sticky top-0 = header preso em cima da pag
//items-end = elementos na coluna vão ficar no fim

const Header = () => {
    //const locarionObject = useLocation().pathname; msm coisa do de baixo
    //<Link to='/'> = ancora "<a href>" tbm funciona
    const { pathname } = useLocation();
    const completeHeader = (
        <header className="flex text-xl sticky top-0 shadow-xl
 shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between
 text-xl z-10">

            <Link to='/'>
                <img className="h-16 px-2" src={logo} alt="Logo da Loja" />
            </Link>
            <UserButtons />
        </header>
    );


    const simpleHeader = (
        <header className="flex text-xl sticky top-0 shadow-xl
        shadow-slate-400 bg-slate-950 text-slate-200 px-8 py-4 items-end justify-between
        text-xl z-10">
            <Link to='/'>
                <img className="h-12 px-2" src={logo} alt="Logo da Loja" />
            </Link>
            <UserButtons />
        </header>
        );

return <> {pathname === '/' ? completeHeader : simpleHeader}</>;
//Caso seja '/' entregue, vai ser completeHeader. Se não, vai renderizar o simpleHeader

};




export default Header;