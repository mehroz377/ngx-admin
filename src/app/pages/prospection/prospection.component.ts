import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-prospection',
  templateUrl: './prospection.component.html',
  styleUrls: ['./prospection.component.scss']
})
export class ProspectionComponent implements OnInit {

  myData1 = [
    { value: 10, name: 'Transformés en RDV' },
    { value: 1, name: 'Perdue' },
    { value: 2, name: 'Pas traités ou avancés' },
  ];

  myName1 = 'Prospection';

  myData2 = [
    { value: 5000, name: 'En retard' },
    { value: 20000, name: 'A traiter' },
  ];

  myName2 = 'CA';

  myData3 = [
    { value: 300000, name: 'Transformés en RDV' },
    { value: 50000, name: 'Perdue' },
    { value: 150000, name: 'Pas traités ou avancés' },
  ];

  myName3 = 'CA';

  myBarData = [2, 2];
  myBarNames = ['A traiter', 'En retard'];

  myTableData1 = [{
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

  myColumnSettings1 = {
    name: {
      title: 'Nom entreprise',
      type: 'string',
    },
    date: {
      title: 'Date création',
      type: 'string',
    },
    possibles: {
      title: 'Don possibles',
      type: 'string',
    },
    assigne: {
      title: 'Collab assigne',
      type: 'string',
    },
  };

  myTableData = [{
    id: 1,
    name: 'SUNNYSMOK',
    date: '18/07/2023',
    possibles: '0,00€',
    assigne: 'Chloe',
    etat: 'A traiter',
  },
  {
    id: 2,
    name: 'SLIMPAY',
    date: '19/07/2023',
    possibles: '500,00€',
    assigne: 'Robin',
    etat: 'En retard',
  },
  {
    id: 3,
    name: 'SUNCLEAR',
    date: '21/07/2023',
    possibles: '0,00€',
    assigne: 'Chloe',
    etat: 'A traiter',
  },
  {
    id: 4,
    name: 'ManoMano',
    date: '21/07/2023',
    possibles: '600 000,00€',
    assigne: 'Robin',
    etat: 'En retard',
  }];

  myColumnSettings = {
    name: {
      title: 'Nom entreprise',
      type: 'string',
    },
    date: {
      title: 'Date création',
      type: 'string',
    },
    possibles: {
      title: 'Dons possibles',
      type: 'string',
    },
    assigne: {
      title: 'Collab assigne',
      type: 'string',
    },
    etat: {
      title: 'Etat',
      type: 'string',
    },
  };

  constructor() { }

  ngOnInit(): void {
  }
}

