# Backend Barista App! :coffee:

# Contexto

API Node.js + Typescript + Sequelize que apresenta endpoints voltados à listagem das características de todas as capsulas Nespresso®.

É importante pontuar que o banco de dados foi modelado por mim, com base nas informações disponíveis no [website oficial da Nespresso®](https://www.nespresso.com/br/pt/order/capsules/original).

O respectivo backend foi dockerizado e "deployado" no Heroku®, podendo ser acessado a partir dos endpoints abaixo.

---

# Endpoints

 - **Ping** - [https://barista-app-back.herokuapp.com/ping](https://barista-app-back.herokuapp.com/ping)
 - **Listagem das características de todas as capsulas** - [https://barista-app-back.herokuapp.com/capsules](https://barista-app-back.herokuapp.com/capsules)
 - **Listagem das características de capsulas do tipo Original®** - [https://barista-app-back.herokuapp.com/capsules/Original](https://barista-app-back.herokuapp.com/capsules/Original)
 - **Listagem das características de capsulas do tipo Vertuo®** - [https://barista-app-back.herokuapp.com/capsules/Vertuo](https://barista-app-back.herokuapp.com/capsules/Vertuo)
 - **Listagem das características de uma capsula específica** - [https://barista-app-back.herokuapp.com/capsules/id/5](https://barista-app-back.herokuapp.com/capsules/id/5)
 - **Listagem das características de capsulas pesquisadas por nome** - [https://barista-app-back.herokuapp.com/capsules/search?capsuleType=All&capsuleName=Volluto](https://barista-app-back.herokuapp.com/capsules/search?capsuleType=All&capsuleName=Volluto)
 - **Listagem das características de capsulas, Original®, pesquisadas por nome** - [https://barista-app-back.herokuapp.com/capsules/search?capsuleType=Original&capsuleName=Volluto](https://barista-app-back.herokuapp.com/capsules/search?capsuleType=Original&capsuleName=Volluto)
 - **Listagem das características de capsulas, Vertuo®, pesquisadas por nome** - [https://barista-app-back.herokuapp.com/capsules/search?capsuleType=Vertuo&capsuleName=Hazelino](https://barista-app-back.herokuapp.com/capsules/search?capsuleType=Vertuo&capsuleName=Hazelino)
---

### Observação

Como o respectivo backend foi "deployado" utilizando um dyno grátis do Heroku®, caso a aplicação não seja acessada após 30 minutos ela entrará em _sleep mode_.
Nesse caso, ao acessar tal aplicação novamente, é necessário uma espera inicial de 20 segundos antes que a primeira requisição seja concluída.
