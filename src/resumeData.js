import express from "./assets/express.png";
import cssLogo from "./assets/css-logo.png";
import sequelize from "./assets/sequelize.png";
import home from "./assets/home.png"
import food from "./assets/food.png"

let resumeData = {
    "name": "Guillermo Calvo",
    "role": "Desarrollador Web Full Stack 💻",
    "linkedinId":"guillermo-calvo-790948192",
    "socialLinks":[
        {
          "name":"linkedin",
          "url":"www.linkedin.com/in/guillermo-calvo-790948192",
          "className":"fa fa-linkedin"
        },
        {
          "name":"github",
          "url":"https://github.com/GgaacCalvo",
          "className":"fa fa-github"
        }
      ],
    "aboutme":"Mi nombre es Guillermo Calvo, soy oriundo de Argentina, tengo 27 años. En mi adolescencia me incline por estudiar el desarrollo de la industria alimentaria, siempre me incentivo poder crear un producto que sea amigable con el ambiente y con el cuerpo. Luego de años de estudio conseguí mi titulo de Licenciado en Industrias Alimentarias, pero al entrar al mercado laboral no me sentí satisfecho, por lo que opte por incursionar en el rubro IT. Comencé estudiando de manera autodidacta. Hoy en día finalizado el bootcamp soyHenry puedo decir que soy Full Stack Developer y estoy listo para adquirir mi primer empleo.",
    "address":"Argentina",
    "website":"https://portafolio-guille.vercel.app/",
    "skills":[
      {
        "skillname":"HTML5",
        "img":"https://cdn-icons-png.flaticon.com/512/1216/1216733.png"
      },
      {
        "skillname":"CSS",
        "img": cssLogo
      },
      {
        "skillname":"JavaScript",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
      },
      {
        "skillname":"React",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
      },
      {
        "skillname":"Redux",
        "img":"https://nightdeveloper.net/wp-content/uploads/2018/01/logo.png"
      },
      {
        "skillname":"NodeJS",
        "img":"https://ugeek.github.io/blog/images-blog/node.png"
      },
      {
        "skillname":"ExpressJS",
        "img": express
      },
      {
        "skillname":"Sequelize",
        "img": sequelize
      },
      {
        "skillname":"PostgreSQL",
        "img":"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png"
      },
      {
        "skillname":"Git",
        "img":"https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png"
      }, 
      {
        "skillname":"MongoDB",
        "img":"https://www.svgrepo.com/show/331488/mongodb.svg"
      },   
    ],
    "portfolio":[
      {
        "name":"Changuitas",
        "description":"Sitio web para contratar servicio de un profesional.",
        "imgurl": home,
        "deploy":"https://font-pf.vercel.app/"
      },
      {
        "name":"FOODS APP",
        "description":"Página web donde podrás crear, buscar, filtrar y ver detalles referidos a recetas de comidas.",  
        "imgurl": food,
        "deploy":"https://pifoodhenry.vercel.app"
      },
    ],
}
  
export default resumeData;