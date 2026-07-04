import { Children, useState } from 'react'
import { jsx } from "react/jsx-runtime"
import './App.css'
import { data } from './repositories.js'

function App() {
  
  function Header(){
    return (
    <header className="header">
      <img className="avatar" src="/Avatar.png"/>
      <h1>Olá, eu sou Jhonnata</h1>
      <p className="subtitle">Desenvolvedor frontend em formação</p>
      <p className="headerText">Estudo HTML, CSS, JavaScript e React, construindo projetos para minha primeira oportunidade na área.</p>
      <a className="btn" href="https://github.com/jhonnata-erick">GitHub</a>
    </header>
    )
  }
  function About() {
    return (
      <section className="about">
        <h2>Sobre mim</h2>
        <p>Sou estudante de análise e desenvolvimento de sistemas e desenvolvedor frontend em formação. Gosto de transformar interfaces em aplicações funcionais utilizando JavaScript e React. Meu objetivo é conquistar minha primeira oportunidade como desenvolvedor.</p>
      </section>
    )
  }
  function Skills() {
    return (
      <section className="skills">
        <h2>Tecnologias</h2>
        <div className="skillsList">
          <p className="skillItem"><img src="/html-5-svgrepo-com.svg"/>HTML</p>
          <p className="skillItem"><img src="/css-3-svgrepo-com.svg"/>CSS</p>
          <p className="skillItem"><img src="/javascript-svgrepo-com.svg"/>JavaScript</p>
          <p className="skillItem"><img src="/react-logo-svgrepo-com.svg"/>React</p>
          <p className="skillItem"><img src="/git-svgrepo-com.svg"/>Git</p>
          <p className="skillItem"><img src="/github-svgrepo-com.svg"/>Github</p>
        </div>
      </section>
    )
  }
  function ProjectsList() {
    return (
        <div className='projectList'>
          {data.map(item => Project(item))}
        </div>
  )
  }
  function Project(item){
      return (
        <div className='project'>
          <img className='projectImg' src={item.img}/>
          <span className="projectName">{item.name}</span>
          <span className="projectDesc">{item.description}</span>
          <span className="projectTools">{item.tools.join(` | `)}</span>
          <a target='_blank' className="projectLink" href={item.link}>GitHub</a>
        </div>
      )
  }
  function Timeline() {
    return (
      <section className="timeline">
        <h2>Minha evolução</h2>
        <span className="timelineDone"><img src="/html-5-svgrepo-com.svg"/>HTML concluído</span>
        <span className="timelineDone"><img src="/css-3-svgrepo-com.svg"/>CSS concluído</span>
        <span className="timelineDone"><img src="/javascript-svgrepo-com.svg"/>JavaScript concluído</span>
        <span className="timelineActive"><img src="/react-logo-svgrepo-com.svg"/>React em andamento</span>
        <span className="timelinePlanned"><img src="/typescript-logo-svgrepo-com.svg"/>TypeScript planejado</span>
        <span className="timelinePlanned"><img src="/nodejs-icon-svgrepo-com.svg"/>Node.js planejado</span>
      </section>
    )
  }
  function Contact() {
    return (
      <section className="contact">
        <h2>Contato</h2>
        <a className="mail" target="_blank"href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRvxVFZsqXKfjqdsjlfTwgjlHXQMCvkNzHlhlrFkQmltkJJvVdfZfCDSXFQhbbxhHthcQgv'> <img src="/gmail-svgrepo-com.svg"/>jhonataerick71@gmail.com</a>
        <p>+55 68 999801377</p>
        <p>Aberto a oportunidades de estágio em desenvolvimento frontend.</p>
      </section>
    )
  }
  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <h2 className="projectsTitle">Projetos</h2>
      <ProjectsList/>
      <Timeline/>
      <Contact/>
    </>
  )
}

export default App