import React, { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { ImHtmlFive,ImCss3 } from "react-icons/im";
import {IoLogoJavascript  } from "react-icons/io";
import {FaReact } from "react-icons/fa";
import {SiNpm,SiHeroku,SiNetlify,SiPostman,SiGithub,SiGit,SiVisualstudiocode,SiReactrouter,SiChakraui ,SiMongodb,SiExpress,SiNodedotjs,SiRedux,SiBootstrap} from "react-icons/si";
import { VscJson } from "react-icons/vsc";

// VscJson

// 
export default function ToolsAndSkills({ toolsRef }) {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
        <div ref={toolsRef} className="tools_skills_container" id='toolsandskill'>
            <div className='skill-parent-container'>
              <h1 data-aos="flip-right">Skills</h1>
              <div className='skills-grid-container'>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='react-icon-div'><FaReact className='react-icon'/></div><h3>Reactjs</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='rrdom-icon-div'><SiReactrouter className='rrdom-icon'/> </div><h3>React-router-dom</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='redux-icon-div'><SiRedux className='redux-icon'/> </div><h3>Redux</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"> <div className='js-icon-div'><IoLogoJavascript className='js-icon'/></div><h3>JavaScript</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='html-icon-div'><ImHtmlFive className='html-icon' /></div> <h3>HTML</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='css-icon-div'><ImCss3 className='css-icon'/></div>  <h3>CSS3</h3> </div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='chakra-icon-div'><SiChakraui className='chakra-icon'/> </div><h3>Chakra</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='bootstrap-icon-div'><SiBootstrap className='bootstrap-icon' /></div> <h3>React-Bootstrap</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='mongo-icon-div'><SiMongodb className='mongo-icon'/> </div><h3>MongoDB</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='express-icon-div'><SiExpress className='express-icon'/></div> <h3>Express.Js</h3></div>
                <div data-aos="zoom-in"  data-aos-duration="550"><div className='node-icon-div'><SiNodedotjs className='node-icon'/></div><h3>Node.Js</h3> </div>
              </div>
            </div>
            <div className='tools-parent-container'>
            <h1 data-aos="flip-right">Tools</h1>
            <div className='tools-grid-container'>
            <div data-aos="flip-up">
                <div className='vscode-icon-div icon-div' >
             <SiVisualstudiocode className='vscode-icon icon'/>
                </div>
                <h3>VS Code</h3>
            </div>
            <div data-aos="flip-up">
                <div className='git-icon-div icon-div'>
                    <SiGit className='git-icon icon'/></div>
                <h3>Git</h3>
            </div>
            <div data-aos="flip-up">
                <div className='github-icon-div icon-div'>
                   <SiGithub className='github-icon icon' />
                </div>
                <h3>GitHub</h3>
            </div>
            <div data-aos="flip-up">
                <div className='postman-icon-div icon-div'>
                    <SiPostman className='postman-icon icon' />
                </div>
                <h3>Postman</h3>
            </div>
            <div data-aos="flip-up">
                <div className='netlify-icon-div icon-div'>
                    <SiNetlify className='netlify-icon icon' />
                </div>
                <h3>Netlify</h3>
            </div>
            <div data-aos="flip-up">
                <div className='heroku-icon-div icon-div'>
                    <SiHeroku className='heroku-icon  icon'/>
                </div>
                <h3>Heroku</h3>
            </div>
            <div data-aos="flip-up">
                <div className='json-icon-div icon-div'>
                    <VscJson className='json-icon icon'/>
                </div>
                <h3>Json Server</h3>
            </div>
            <div data-aos="flip-up">
                <div className='npm-icon-div icon-div'>
                    <SiNpm className='npm-icon  icon' />
                </div>
                <h3>NPM</h3>
            </div>
           

            </div>
            </div>

        </div>
    )
}
