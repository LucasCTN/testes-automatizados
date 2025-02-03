import {ConsultaSalaController} from "../../src/controllers/consulta-sala";

export function factoryConsultaSalaController() {
    const contr = new ConsultaSalaController();
    return contr;
}