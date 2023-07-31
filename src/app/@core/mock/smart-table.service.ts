import { Injectable } from '@angular/core';
import { SmartTableData } from '../data/smart-table';

@Injectable()
export class SmartTableService extends SmartTableData {

  data = [{
    id: 1,
    name: 'SUNNYSMOK',
    date: '18/07/2023',
    possibles: '0,00€',
    assigne: 'Chloe',
  },
  {
    id: 2,
    name: 'SLIMPAY',
    date: '19/07/2023',
    possibles: '500,00€',
    assigne: 'Robin',
  },
  {
    id: 3,
    name: 'SUNCLEAR',
    date: '21/07/2023',
    possibles: '600 000,00€',
    assigne: 'Chloe',
  },
  {
    id: 4,
    name: 'ManoMano',
    date: '21/07/2023',
    possibles: '11 039,00€',
    assigne: 'Robin',
  },
  {
    id: 5,
    name: 'Bricoman SEN',
    date: '01/08/2023',
    possibles: '0,00€',
    assigne: 'Chloé',
  },
  {
    id: 6,
    name: 'PHASELEC',
    date: '03/08/2023',
    possibles: '0,00€',
    assigne: 'Robin',
  }];

  getData() {
    return this.data;
  }
}
