import sinon from 'sinon'; // Fornece o stub, responsável pela simulação dos retornos (de sucesso e/ou falha).
import chai from 'chai'; // Necessário para construção de asserções.
import chaiHttp from 'chai-http'; // Permite a realização de requisições p/ uma determinada API, durante os testes

import { app } from '../app';

import CapsulesModel from '../database/models/CapsulesModel';
import { mockAllCapsules, mockAllOriginalCapsules, mockAllVertuoCapsules } from './mocks/capsules';

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
});
