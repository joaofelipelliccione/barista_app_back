# A minha imagem será baseada na versão 14 compacta (alpine) do node.
FROM node:14-alpine
# mdir app + cd app, dentro do container.
WORKDIR /app
# Copiando o arquivo package.json para dentro do diretório /app, do container.
COPY package.json .
# Instalando todas as dependências do projeto, contidas no package.json.
RUN npm install
# Copiando todos os arquivos contidos no diretório local "izi_tech_back", para o diretório "app", do container.
COPY . .
# Execução do comando para que o servidor da API inicie.
CMD [ "npm", "start" ]