import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
  params: {q: 'San Francisco'},
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': 'd2e9597385mshd77281114593db3p156c6ajsnc7084f33bb82'
  }
};
export default new Vuex.Store({
  state: {
    cards:[
      {title:"Java",level:"intermediário",alreadyWorked:"Trabalho atualmente", image:"https://www.ativasoft.com.br/blog/wp-content/uploads/2018/01/java_icon.png"},
      {title:"HTML",level:"intermediário",alreadyWorked:"Já trabalhei",image:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},
      {title:"CSS",level:"intermediário",alreadyWorked:"Já trabalhei",image:"https://upload.wikimedia.org//wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"},
      {title:"React.js",level:"Básico",alreadyWorked:"Comecei a ver no trabalho",image:"https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com015.jpg"},
      {title:"Vue.js",level:"Básico",alreadyWorked:"Gostaria de trabalhar",image:"https://vuejs.org/images/logo.svg"},
      {title:"Python",level:"Básico",alreadyWorked:"Gostaria de trabalhar",image:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"},
      {title:"Git",level:"Intermediário",alreadyWorked:"Trabalho atualmente",image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"},
      {title:"JIRA",level:"Intermediário",alreadyWorked:"Já trabalhei",image:"https://cdn.worldvectorlogo.com/logos/jira-1.svg"},
      {title:"C#",level:"Básico",alreadyWorked:"Nunca trabalhei",image:"https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png"}
    ],
    experiences:[
      {title:"Infraware", workload:"Help Desk",date:"JULHO/2020 - SETEMBRO/2020", function:"Ajudar no processo de Rebranding das máquinas da empresa. Ajuste na configuração de OneDrive, Webex, softwares da empresa, entre outros.", image:"https://burhstorage.blob.core.windows.net/burhcontainer/app/company/logo/HVedjPP2tPPNeH83ljLRVuvKDFHxSu7kD0vozy8r78IfEOyh7E012/200/507f9df3c45109d3ed4a7bbad102acae.jpg"},
      {title:"Johnson Controls", workload:"Estagiário de tecnologia",date:"OUTUBRO/2020 - AGOSTO/2021", function:"Atuar na área de suporte solucionando problemas técnicos que envolvam alterações no banco de dados MySQL. ", image:"https://sumengenharia.com.br/wp-content/uploads/2020/06/johnson-controls-logo-cliente.png"},
      {title:"Venturus", workload:"Estagiário de desenvolvimento",date:"AGOSTO/2021 - ATUALMENTE", function:"Atuar em um projeto na área back-end em Java. Criação de endpoints, repositórios, entidades, regras de negócios, testes unitários, testes de integração e tudo que englobe o desenvolvimento de um projeto", image:"https://peoplebusiness.live/wp-content/uploads/2021/07/venturus-300x300.png"},
    ],
    interests:[
      {title:"Inteligência Artificial",image:"https://icons.veryicon.com/png/o/education-technology/blue-gray-solid-blend-icon/artificial-intelligence-5.png"},
      {title:"Segudança da Informação",image:"https://metiscyber.com/assets/images/security/cyber-security.svg"},
      {title:"Cloud Computing",image:"https://www.svgrepo.com/show/271600/cloud-computing.svg"},
      {title:"Robótica",image:"https://www.svgrepo.com/show/285249/robot.svg"},
      {title:"Bug Bounty",image:"https://www.rootshellsecurity.net/wp-content/uploads/2020/06/Bug-bounty-icon.png"},
    ],
    studies:[
      {title:"Documentação Oficial",image:"https://svgsilh.com/svg/1976101.svg"},
      {title:"Alura",image:"https://vindi.com.br/assets/images/cadastro/alura.svg"},
      {title:"Udemy",image:"https://cdn.worldvectorlogo.com/logos/udemy-1.svg"},
      {title:"Digital Innovation One",image:"https://www.projetodraft.com/wp-content/uploads/2019/12/digital-innovation-one.jpg"},
      {title:"Youtube",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png"},
      {title:"Stack overflow",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"},
    ],
    courses:[
      {title:"Lógica de Programação Essencial",image:"https://hermes.digitalinnovation.one/certificates/cover/64A4C14D.jpg"},
      {title:"Desenvolvimento de aplicações para internet com ReactJS",image:"https://hermes.digitalinnovation.one/certificates/cover/BC6036F9.jpg"},
      {title:"Recriando a Interface do Netflix",image:"https://hermes.digitalinnovation.one/certificates/cover/B67D29E2.jpg"},
      {title:"Desenvolvimento avançado com JavaScript ES6",image:"https://hermes.digitalinnovation.one/certificates/cover/7BCC36F5.jpg"},
      {title:"Programação para internet com JavaScript",image:"https://hermes.digitalinnovation.one/certificates/cover/5CA584C5.jpg"},
      {title:"Introdução a criação de websites com HTML5 e CSS3",image:"https://hermes.digitalinnovation.one/certificates/cover/435A9727.jpg"},
      {title:"Introdução ao Git e ao GitHub",image:"https://hermes.digitalinnovation.one/certificates/cover/99F32F80.jpg"},
      {title:"Java Collections: Dominando listas,sets e mapas", image:"https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png"},
      {title:"Swagger: Documentando suas APIs", image:"https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png"},
      {title:"Spring Boot e Teste: Profiles, Testes e Deploy", image:"https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png"},
      {title:"TDD e Java: Testes automatizados com JUnit", image:"https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png"},
      {title:"Spring Boot API Rest: Segurança da API, Cache e Monitoramento", image:"https://cursos.alura.com.br/assets/images/certificates/certificate-alura-pt_BR.png"},
    ],


    title: "Utilizando dados de uma API externa",
    weatherGroup:[],
  },
  mutations: {
    SET_WEATHERGROUP(state,payload){
      state.weatherGroup=payload
    }
  },
  actions: {
    fetchWeatherGroup({commit}){
      axios.request(options)
      .then(res=>{ 
        const payload = res.data.list
        commit('SET_WEATHERGROUP',payload)
        })
      .catch(err=> {console.error(err)})
    }
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    },
    getImgUrl(state){
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + state.cards.image + ".png")
    }
  }
})
