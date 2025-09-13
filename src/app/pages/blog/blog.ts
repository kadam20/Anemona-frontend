import { Component } from '@angular/core';
import { AnimateOnScroll } from 'primeng/animateonscroll';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-blog',
  imports: [AnimateOnScroll, Button, Card, Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  blogPosts = [
    {
      title: 'A kert felépítése',
      teaser:
        'Ismerd meg a természetes módszereket a stressz csökkentésére és a lelki egyensúly megtartására!',
      imageUrl: 'assets/images/Flower-2.jpg',
      link: '/blog/kert-felepitese',
    },
    {
      title: 'A kert története',
      teaser:
        'Tanuld meg, hogyan választhatod ki a számodra legmegfelelőbb illóolajat a különböző igényekhez!',
      imageUrl: 'assets/images/Flower-3.jpg',
      link: '/blog/kert-tortenete',
    },
  ];
}
