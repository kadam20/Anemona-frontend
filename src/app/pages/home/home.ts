import { RouteEnum } from '@/layout/service/layout.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Avatar } from 'primeng/avatar';
import { AvatarGroup } from 'primeng/avatargroup';
import { ScrollTop } from 'primeng/scrolltop';
import { AnimateOnScroll } from 'primeng/animateonscroll';

@Component({
  selector: 'app-home',
  imports: [Button, RouterLink, Card, Avatar, AvatarGroup, ScrollTop, AnimateOnScroll],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  routeEnum = RouteEnum;
  blogPosts = [
    {
      title: 'Kertlátogatás',
      teaser:
        'Fedezd fel, hogyan kezdheted a napot energikusan és pozitívan ezekkel az egyszerű, de hatékony tippekkel!',
        imageUrl: '/assets/images/Flower-1.jpg',
        link: '/blog/kertlatogatas',
    },
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

  creators = [
    {
      name: 'Dr. Gerencsér Andrea',
      description:
        'Dr. Gerencsér Andrea több mint tíz éve dolgozik kertészként, és ez idő alatt számos családi ház, nyaraló és közösségi tér zöldfelületének megtervezésében és gondozásában vett részt. Munkája során különösen fontosnak tartja, hogy a kert ne csupán a ház dísze legyen, hanem olyan hely, ahol a mindennapok rohanása után nyugalomra és feltöltődésre találhatnak a tulajdonosok.  ',
      imageUrl: '../../../../assets/images/andi.jpg',
    },
    {
      name: 'Dr. Kiss Zoltán',
      description:
        'Dr. Kiss Zoltán több mint tíz éve dolgozik kertészként, és ez idő alatt számos családi ház, nyaraló és közösségi tér zöldfelületének megtervezésében és gondozásában vett részt. Munkája során különösen fontosnak tartja, hogy a kert ne csupán a ház dísze legyen, hanem olyan hely, ahol a mindennapok rohanása után nyugalomra és feltöltődésre találhatnak a tulajdonosok. ',
      imageUrl: '../../../assets/images/zoltan.jpg',
    },
  ];

  events = [
    {
      title: 'Kertészeti Workshop',
      date: '2024-07-15',
      description:
        'Csatlakozz hozzánk egy interaktív workshopra, ahol megtanulhatod a kerttervezés alapjait és a növénygondozás fortélyait.',
      attendees: [
        {
          name: 'János',
        },
        {
          name: 'Mária',
        },
        {
          name: 'László',
        },
      ],
      location: 'Anemona Kert, Székesfehérvár',
    },
    {
      title: 'Nyílt Nap a Kertben',
      date: '2024-08-20',
      description:
        'Látogass el hozzánk egy nyílt napra, és fedezd fel kertünk szépségeit, miközben szakértőinkkel beszélgethetsz a kertészkedésről.',
      attendees: [
        {
          name: 'Erika',
        },
        {
          name: 'Gábor',
        },
      ],
      location: 'Anemona Kert, Székesfehérvár',
    },
    {
      title: 'Őszi Kertészeti Tanfolyam',
      date: '2024-09-10',
      description:
        'Vegyél részt őszi tanfolyamunkon, ahol megtanulhatod, hogyan készítsd fel kertedet a hidegebb hónapokra.',
      attendees: [
        {
          name: 'Anna',
        },
        {
          name: 'Péter',
        },
        {
          name: 'Katalin',
        },
        {
          name: 'Tamás',
        },
        { name: 'Zsófia' },
      ],
      location: 'Anemona Kert, Székesfehérvár',
    },
  ];
}
