export type Bubble = {
  star: boolean;
  text: string;
  legend: string;
};
export type HomeData = {
  //left side
  leftTitle: string;
  leftSubtitle: string;
  classicRentTitle: string;
  classicRentValue: number;
  lcdRentTitle: string;
  lcdRentValue: number;
  highestMonthRevenueTitle: string;
  highestMonthRevenueValue: number;
  lowestMonthRevenueTitle: string;
  lowestMonthRevenueValue: number;
  dataSourceText: string;
  advantageTitle: string;
  advantage: string[];
  //right side
  rightSideTitle: string;
  bubbles: Bubble[];
};
export const homeData: HomeData = {
  //left side
  leftTitle: 'Maximiser vos gains avec la location courte durée',
  leftSubtitle: 'Pour un T2 de 30m2 :',
  classicRentTitle: 'Location Meublé Classique : ',
  classicRentValue: 500,
  lcdRentTitle: 'Location Courte Durée : ',
  lcdRentValue: 1236,
  highestMonthRevenueTitle: 'Le mois le plus rentable : Août 2023 avec ',
  highestMonthRevenueValue: 1970,
  lowestMonthRevenueTitle: 'Et le moins rentable : Février 2023 avec ',
  lowestMonthRevenueValue: 702,
  advantageTitle: 'Les avantages : ',
  advantage: [
    'Revenus locatifs supérieurs',
    'Ménage régulier garantissant un logement de qualité',
    'Interventions rapide sur les petites réparations et besoin de maintenance',
    'Aucun risque d’impayés',
  ],
  dataSourceText:
    'Données tirés du logement “La Bellerive du voyageur” de Septembre 2022 à Septembre 2023',
  //right side
  rightSideTitle: 'Nos Chiffres',
  bubbles: [
    {
      star: true,
      text: '4,8',
      legend: 'Airbnb',
    },
    {
      star: false,
      text: '86 %',
      legend: 'D’occupation',
    },
    {
      star: true,
      text: '9,4',
      legend: 'Booking',
    },
    {
      star: false,
      text: '20 %',
      legend: 'De commission',
    },
  ],
};
