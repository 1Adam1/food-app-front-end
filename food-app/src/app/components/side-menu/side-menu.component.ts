import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

class MenuItem {
  name: string;
  iconName: string;
  url: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  markedItemName: string = 'Home';
  items: MenuItem[] = [
    {
      name: 'Home',
      iconName: 'home',
      url: 'home',
    },
    {
      name: 'Products',
      iconName: 'bakery_dining',
      url: 'products',
    },
    {
      name: 'Meals',
      iconName: 'restaurant_menu',
      url: 'meals',
    },
    // {
    //   name: 'Shopping lists',
    //   iconName: 'list',
    //   url: 'shopping-lists',
    // },
    // {
    //   name: 'Shops',
    //   iconName: 'shopping_cart',
    //   url: 'shops',
    // }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.markedItemName = this.route.snapshot.firstChild.data['markedSideMenuItemName'];
      }
    });
  }

  onItemClick(itemUrl: string) {
    this.router.navigate([itemUrl], {relativeTo: this.route});
  }

}
