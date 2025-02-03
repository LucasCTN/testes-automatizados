import { ConsultaSalaController } from "../../src/controllers/consulta-sala";

function makeSUT() {
    const controller = new ConsultaSalaController();
    return { controller };
}

describe('ConsultaSalaController', () => {
    it('deve instanciar ConsultaSalaController', () => {
        let { controller } = makeSUT();
        expect(controller).toBeDefined();
    });
});