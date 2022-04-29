import sinon from 'sinon'; // Fornece o stub, responsável pela simulação dos retornos (de sucesso e/ou falha).
import chai from 'chai'; // Necessário para construção de asserções.
import chaiHttp from 'chai-http'; // Permite a realização de requisições p/ uma determinada API, durante os testes

import { app } from '../app';

import CapsulesModel from '../database/models/CapsulesModel';
import { mockAllCapsules, mockAllOriginalCapsules, mockAllVertuoCapsules,
  mockCapsuleWithId5, mockVollutoCapsules, mockHazelinoMuffinCapsules, } from './mocks/capsules';

import { Response } from 'superagent'; // Tipo que a response oriunda do Chai HTTP deverá apresentar.

chai.use(chaiHttp);

const { expect } = chai;

describe('1) Capsules Routes:', () => {
  let chaiHttpResponse: Response;

  describe('1.1) Método GET para /capsules:', () => {
    before(async () => { // Antes de cada it() ou describe(), realizado dentro do respectivo describe(), o retorno de CapsulesModel.findAll() passa a ser fixo e previsível.
      sinon.stub(CapsulesModel, 'findAll').resolves(mockAllCapsules as CapsulesModel[]);
    });
  
    after(() => { // Após de cada it() ou describe(), realizado dentro do respectivo describe(), o retorno de CapsulesModel.findAll() volta a ser variável e não previsível.
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.1.1) Retorna capsulas do tipo 'Original' e 'Vertuo'.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(2);
      expect(chaiHttpResponse.body[0]).to.have.keys('capsuleId', 'capsuleType', 'capsuleLine', 'capsuleName', 'decaf', 'capsuleIntensity', 'capsuleRoastingLevel', 'capsuleBitternessLevel', 'capsuleAcidityLevel', 'capsuleRobustnessLevel', 'capsuleAspects', 'capsuleAromaticNotes', 'capsuleOrigin', 'ristretto25', 'expresso40', 'dblExpresso80', 'lungo110', 'granLungo150', 'coffe230', 'carafe535', 'cappuccino', 'dblCappuccino', 'capsuleImgSrc', 'backgroundImgSrc');

      expect(chaiHttpResponse.body[0].capsuleId).lessThanOrEqual(30);
      expect(chaiHttpResponse.body[0].capsuleType).to.equal('Original');

      expect(chaiHttpResponse.body[1].capsuleId).greaterThanOrEqual(31);
      expect(chaiHttpResponse.body[1].capsuleType).to.equal('Vertuo');
    });
  });

  describe('1.2) Método GET para /capsules/Original:', () => {
    before(async () => {
      sinon.stub(CapsulesModel, 'findAll').resolves(mockAllOriginalCapsules as CapsulesModel[]);
    });
  
    after(() => {
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.2.1) Retorna, apenas, capsulas do tipo 'Original'.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/Original');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(2);
      expect(chaiHttpResponse.body[0]).to.have.keys('capsuleId', 'capsuleType', 'capsuleLine', 'capsuleName', 'decaf', 'capsuleIntensity', 'capsuleRoastingLevel', 'capsuleBitternessLevel', 'capsuleAcidityLevel', 'capsuleRobustnessLevel', 'capsuleAspects', 'capsuleAromaticNotes', 'capsuleOrigin', 'ristretto25', 'expresso40', 'dblExpresso80', 'lungo110', 'granLungo150', 'coffe230', 'carafe535', 'cappuccino', 'dblCappuccino', 'capsuleImgSrc', 'backgroundImgSrc');

      expect(chaiHttpResponse.body[0].capsuleId).to.equal(1);
      expect(chaiHttpResponse.body[0].capsuleType).to.equal('Original');

      expect(chaiHttpResponse.body[1].capsuleId).to.equal(30);
      expect(chaiHttpResponse.body[1].capsuleType).to.equal('Original');
    });
  });

  describe('1.3) Método GET para /capsules/Vertuo:', () => {
    before(async () => {
      sinon.stub(CapsulesModel, 'findAll').resolves(mockAllVertuoCapsules as CapsulesModel[]);
    });
  
    after(() => {
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.3.1) Retorna, apenas, capsulas do tipo 'Vertuo'.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/Vertuo');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(2);
      expect(chaiHttpResponse.body[0]).to.have.keys('capsuleId', 'capsuleType', 'capsuleLine', 'capsuleName', 'decaf', 'capsuleIntensity', 'capsuleRoastingLevel', 'capsuleBitternessLevel', 'capsuleAcidityLevel', 'capsuleRobustnessLevel', 'capsuleAspects', 'capsuleAromaticNotes', 'capsuleOrigin', 'ristretto25', 'expresso40', 'dblExpresso80', 'lungo110', 'granLungo150', 'coffe230', 'carafe535', 'cappuccino', 'dblCappuccino', 'capsuleImgSrc', 'backgroundImgSrc');

      expect(chaiHttpResponse.body[0].capsuleId).to.equal(31);
      expect(chaiHttpResponse.body[0].capsuleType).to.equal('Vertuo');

      expect(chaiHttpResponse.body[1].capsuleId).to.equal(60);
      expect(chaiHttpResponse.body[1].capsuleType).to.equal('Vertuo');
    });
  });

  describe('1.4) Método GET para /capsules/id/5:', () => {
    it("1.4.1) Retorna, apenas, a capsula 5.", async () => {
      before(async () => {
        sinon.stub(CapsulesModel, 'findByPk').resolves(mockCapsuleWithId5 as CapsulesModel);
      });
    
      chaiHttpResponse = await chai.request(app).get('/capsules/id/5');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.keys('capsuleId', 'capsuleType', 'capsuleLine', 'capsuleName', 'decaf', 'capsuleIntensity', 'capsuleRoastingLevel', 'capsuleBitternessLevel', 'capsuleAcidityLevel', 'capsuleRobustnessLevel', 'capsuleAspects', 'capsuleAromaticNotes', 'capsuleOrigin', 'ristretto25', 'expresso40', 'dblExpresso80', 'lungo110', 'granLungo150', 'coffe230', 'carafe535', 'cappuccino', 'dblCappuccino', 'capsuleImgSrc', 'backgroundImgSrc');

      expect(chaiHttpResponse.body.capsuleId).to.equal(5);
    });

    it("1.4.2) Retorna um erro por ter passado um capsuleId inexistente.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/id/500');

      expect(chaiHttpResponse).to.have.status(404);
      expect(chaiHttpResponse.body).to.have.keys('code', 'message');
      expect(chaiHttpResponse.body.message).to.equal('No capsule with such id.');
    });
  });

  describe('1.5) Método GET para /capsules/search?capsuleType=All&capsuleName=vOLlUtO:', () => {
    before(async () => {
      sinon.stub(CapsulesModel, 'findAll').resolves(mockVollutoCapsules as CapsulesModel[]);
    });
  
    after(() => {
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.5.1) Retorna, apenas, capsulas Volluto.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/search?capsuleType=All&capsuleName=vOLlUtO');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(2);
      expect(chaiHttpResponse.body[0]).to.have.keys('capsuleId', 'capsuleType', 'capsuleLine', 'capsuleName', 'decaf', 'capsuleIntensity', 'capsuleRoastingLevel', 'capsuleBitternessLevel', 'capsuleAcidityLevel', 'capsuleRobustnessLevel', 'capsuleAspects', 'capsuleAromaticNotes', 'capsuleOrigin', 'ristretto25', 'expresso40', 'dblExpresso80', 'lungo110', 'granLungo150', 'coffe230', 'carafe535', 'cappuccino', 'dblCappuccino', 'capsuleImgSrc', 'backgroundImgSrc');

      expect(chaiHttpResponse.body[0].capsuleId).to.equal(22);
      expect(chaiHttpResponse.body[0].capsuleType).to.equal('Original');
      expect(chaiHttpResponse.body[0].capsuleName).to.equal('Volluto');

      expect(chaiHttpResponse.body[1].capsuleId).to.equal(24);
      expect(chaiHttpResponse.body[1].capsuleType).to.equal('Original');
      expect(chaiHttpResponse.body[1].capsuleName).to.equal('Volluto Decaffeinato');
    });
  });

  describe('1.6) Método GET para /capsules/search?capsuleType=All&capsuleName=HaZElinO mUFfiN:', () => {
    before(async () => {
      sinon.stub(CapsulesModel, 'findAll').resolves(mockHazelinoMuffinCapsules as CapsulesModel[]);
    });
  
    after(() => {
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.6.1) Retorna, apenas, a capsula Hazelino Muffin.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/search?capsuleType=All&capsuleName=HaZElinO mUFfiN');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(1);
      expect(chaiHttpResponse.body[0]).to.have.keys('capsuleId', 'capsuleType', 'capsuleLine', 'capsuleName', 'decaf', 'capsuleIntensity', 'capsuleRoastingLevel', 'capsuleBitternessLevel', 'capsuleAcidityLevel', 'capsuleRobustnessLevel', 'capsuleAspects', 'capsuleAromaticNotes', 'capsuleOrigin', 'ristretto25', 'expresso40', 'dblExpresso80', 'lungo110', 'granLungo150', 'coffe230', 'carafe535', 'cappuccino', 'dblCappuccino', 'capsuleImgSrc', 'backgroundImgSrc');

      expect(chaiHttpResponse.body[0].capsuleId).to.equal(60);
      expect(chaiHttpResponse.body[0].capsuleType).to.equal('Vertuo');
      expect(chaiHttpResponse.body[0].capsuleName).to.equal('Hazelino Muffin');
    });
  });

  describe('1.7) Método GET para /capsules/search?capsuleType=Vertuo&capsuleName=vOLlUtO:', () => {
    before(async () => {
      sinon.stub(CapsulesModel, 'findAll').resolves([]);
    });
  
    after(() => {
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.7.1) Retorna vazio quando Volluto for pesquisada dentre as Vertuo.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/search?capsuleType=Vertuo&capsuleName=vOLlUtO');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(0);
    });
  });

  describe('1.8) Método GET para /capsules/search?capsuleType=Vertuo&capsuleName=vOLlUtO:', () => {
    before(async () => {
      sinon.stub(CapsulesModel, 'findAll').resolves([]);
    });
  
    after(() => {
      (CapsulesModel.findAll as sinon.SinonStub).restore();
    });

    it("1.8.1) Retorna vazio quando Hazelino Muffin for pesquisada dentre as Original.", async () => {
      chaiHttpResponse = await chai.request(app).get('/capsules/search?capsuleType=Original&capsuleName=HaZElinO mUFfiN');

      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.have.lengthOf(0);
    });
  });
});
