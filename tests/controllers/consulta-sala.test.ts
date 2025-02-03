import { ConsultaSalaController } from "../../src/controllers/consulta-sala";
import { Request, Response } from 'express';

class ResponseFake {
    statusCodeInformado: number = 0;
    jsonInformado: any = null;
    endChamado: boolean = false;

    status(code: number): ResponseFake {
        this.statusCodeInformado = code;
        return this;
    }

    json(data: any): ResponseFake {
        this.jsonInformado = data;
        return this;
    }

    end(): ResponseFake {
        this.endChamado = true;
        return this;
    }
}

function makeSUT() {
    const requestStub = {
        params: {
        },
    } as any as Request;

    const responseFake = new ResponseFake();
    const controller = new ConsultaSalaController();
    return { requestStub, responseFake, controller };
}

describe('ConsultaSalaController', () => {
    it('deve instanciar ConsultaSalaController', () => {
        let { controller } = makeSUT();
        expect(controller).toBeDefined();
    });
});

it('deve chamar handle', async () => {
    let { requestStub, responseFake, controller } = makeSUT();
    await controller.handle(requestStub, responseFake as any as Response);

    expect(responseFake.statusCodeInformado).toBe(200);


    expect(responseFake.jsonInformado.salas_disponiveis[0]).toEqual({
        bloco: 'A',
        numero: 100,
        lotacao: 10
    });
    expect(responseFake.jsonInformado.salas_disponiveis[1]).toEqual({
        bloco: 'A',
        numero: 101,
        lotacao: 10
    });
    expect(responseFake.jsonInformado.salas_disponiveis[2]).toEqual({
        bloco: 'B',
        numero: 209,
        lotacao: 15
    });

});