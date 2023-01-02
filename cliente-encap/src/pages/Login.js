import React, { Component } from 'react';
import '../css/Login.css';
import Style from '../sass/LandingPage.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';
import icon from "../img/logocon.svg";
import logo from '../img/logobcp.svg';
import CountDown from './CountDown';
import IconArrow from './IconArrow'
import { Link } from 'react-router-dom';
import LinkedIn from '../img/linki.png';
import GitHub from '../img/git.png';




const baseUrl="http://localhost:3001/usuario";
const cookies = new Cookies();


class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        }, );
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: md5(this.state.form.password)}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('apellido_paterno', respuesta.apellido_paterno, {path: "/"});
                cookies.set('apellido_materno', respuesta.apellido_materno, {path: "/"});
                cookies.set('nombre', respuesta.nombre, {path: "/"});
                cookies.set('username', respuesta.username, {path: "/"});
                alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                window.location.href="./menu";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }

    componentDidMount() {
        if(cookies.get('username')){
            window.location.href="./menu";
        }
    }
    render() {
        return (
            <section className={Style.LandingContainer}>
                <div className={Style.leftContainer}>
                    <div className={Style.Branding}>
                    
                            <img className={Style.icon} src={icon} alt='Page'></img>
                            <h4 className={Style.NavTitulo}><span className='title'> <CountDown seconds={300}/></span></h4>
                            
                    </div>
                </div>

                <div className="aboutReturn">
                <Link to="/Inicio" className="return"> 
                <p><IconArrow/>Volver</p>
                </Link>
                </div>
                <div className="containerPrincipal">
                
                    <div className="containerSecundario">
                    
                    
                    <div className="form-group">
                        <img className='encap' src={logo} alt='logo'></img>
                        <h1 className='title'>Banca por Internet</h1>
                       
                        <label className='label'></label>
                        <br />
                        <input 
                        type="text"
                        className="form-control"
                        placeholder='Nro de documento'
                        name="username"
                        onChange={this.handleChange}
                        />
                        <br />
                        <label className='label'></label>
                        <br />
                        <input
                        type="password"
                        placeholder='Ingrese su contraseña'
                        className="form-control"
                        name="password"
                        onChange={this.handleChange}
                        />
                        <br />
                        <button className="btn-primary" onClick={()=> this.iniciarSesion()}><span>Continuar</span></button>
                        <br/>
                        <a className='a' href="./recupera.js">Recupere o crea tu clave internet</a>
                
                    </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                
                    <div className="aboutFooter">
                <div className="credits">
                    <ul>
                        <li>
                            <a className="bau" href="/Inicio">
                                Esta es una página segura del BCP. Si tienes dudas sobre la autenticidad de la web, comunícate
                                con nosotros al 311-9898 o a través de nuestros medios digitales.
                                Todos los derechos reservados   |   © 2020 VIABCP.com</a>
                        </li>
                        <li>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/softwareengineer-dalton-soto-canales/"><img width="30" height="30" src={LinkedIn} alt="linkedin"/></a>
                        </li>
                        <li>
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                        <li>
                            <a href="https://github.com/JdaNet?tab=repositories"><img width="30" height="30" src={GitHub} alt="github"/></a>
                        </li>
                    </ul>
                </div>
            </div>
                </div>

            </section>   
        );
    }
}

export default Login;