import React from 'react'
import { FaFacebook, FaInstagram, FaSpotify, FaTwitter } from 'react-icons/fa'
import './Footer.css'


function Footer() {
    return (

        <div className='main-footer'>
            <div className='container'>
                <div className='row text-center'>
                    {/* Column 1 */}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Início</h4>
                        <ul className='list-unstyled'>
                            <li>Home</li>
                            <li>Promoções</li>
                            <li>Destinos</li>
                            <li>Contato</li>
                        </ul>
                    </div>
                    {/* Column 2 */}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Sobre</h4>
                        <ul className='list-unstyled'>
                            <li>Empresa</li>
                            <li>Blog</li>
                            <li>Colaboradores</li>
                            
                        </ul>
                    </div>
                    {/* Column 3 */}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Serviços</h4>
                        <ul className='list-unstyled'>
                            <li>Destinos</li>
                            <li>Promoções</li>
                            <li>Agendamentos</li>
                            <li>Cancelamentos</li>
                        </ul>
                    </div>
                    {/* Column 4 */}
                    <div className='col-md-3 col-sm-6'>
                        <h4>Suporte</h4>
                        <ul className='list-unstyled'>
                            <li>FAC</li>
                            <li>Telefones</li>
                            <li>Chat</li>
                        </ul>
                    </div>
                </div>
                {/*Footer Bottom*/}
            </div>
            <div className='container'>
                <div className='social-items'>
                    <ul className='list-social-icon'>
                        <li className='list-icon'><FaFacebook /><a href='https://www.facebook.com/'></a></li>
                        <li className='list-icon'><FaInstagram /></li>
                        <li className='list-icon'><FaTwitter /></li>
                        <li className='list-icon'><FaSpotify /></li>
                    </ul>
                </div>

                <div className='d-flex justify-content-center'>

                    <p className='text-xs-center'>
                        &copy;{new Date().getFullYear()} Eurotrip - Todos os Direitos Reservados
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer