# Backend Barista App! :coffee:

# Contexto

API Node.js + Typescript + Sequelize que apresenta endpoints voltados à listagem das características de todas as capsulas Nespresso®.
O respectivo backend foi dockerizado e "deployado" no Heroku®, podendo ser acessado a partir dos endpoints abaixo.

---

# Endpoints

 - **Ping** - [https://barista-app-back.herokuapp.com/ping](https://barista-app-back.herokuapp.com/ping)
 - **Listagem das características de todas as capsulas** - [https://barista-app-back.herokuapp.com/capsules](https://barista-app-back.herokuapp.com/capsules)
 - **Listagem das características de capsulas do tipo Original®** - [https://barista-app-back.herokuapp.com/capsules/Original](https://barista-app-back.herokuapp.com/capsules/Original)
 - **Listagem das características de capsulas do tipo Vertuo®** - [https://barista-app-back.herokuapp.com/capsules/Vertuo](https://barista-app-back.herokuapp.com/capsules/Vertuo)
 - **Listagem das características de uma capsula específica** - [https://barista-app-back.herokuapp.com/capsules/id/5](https://barista-app-back.herokuapp.com/capsules/id/5)
 - **Listagem das características de capsulas pesquisadas por nome** - [https://barista-app-back.herokuapp.com/capsules/search?capsuleName=Volluto](https://barista-app-back.herokuapp.com/capsules/search?capsuleName=Volluto)
---

### Observação

Como o respectivo backend foi "deployado" utilizando um dyno grátis do Heroku®, caso a aplicação não seja acessada após 30 minutos ela entrará em "sleep mode".
Nesse caso, ao acessar tal aplicação novamente, é necessário uma espera inicial de 20 segundos antes que a primeira requisição seja concluída.