import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-products-baanner',
  imports: [CommonModule],
  templateUrl: './products-baanner.component.html',
  styleUrl: './products-baanner.component.css',
  encapsulation: ViewEncapsulation.None
})

export class ProductsBaannerComponent {
  products = [
    {
      title: 'Sabonete de Aveia',
      description: 'Comece o dia com suavidade! Nosso sabonete contém aveia, proporcionando maciez e renovação.',
      image: 'assets/images/sabonete-aveia.jpg'
    },
    {
      title: 'Sabonete de Mel',
      description: 'Hidrata e nutre sua pele com o poder do mel. Ideal para um banho relaxante.',
      image: 'assets/images/sabonete-mel.jpg'
    },
    {
      title: 'Encomendas Personalizadas',
      description: 'Crie kits especiais para momentos únicos. Personalize como desejar.',
      image: 'assets/images/encomendas-personalizadas.jpg'
    }
  ];
}
