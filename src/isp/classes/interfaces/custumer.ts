import {
  IndividualCustumerProtocal,
  InterpriseCustumerProtocal,
} from './custumer-protocol';

export class IndividualCustumer implements IndividualCustumerProtocal {
  fistName: string;
  lastName: string;
  cpf: string;

  constructor(fistName: string, lastName: string, cpf: string) {
    this.fistName = fistName;
    this.lastName = lastName;
    this.cpf = cpf;
  }
}

export class InterpriseCustumer implements InterpriseCustumerProtocal {
  name: string;
  cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }
}
