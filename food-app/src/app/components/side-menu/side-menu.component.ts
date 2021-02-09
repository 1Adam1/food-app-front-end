import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  items: MenuItem[] = [
    {
      name: 'Persons',
      iconName: 'people',
      url: 'persons',
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
    {
      name: 'Shopping Lists',
      iconName: 'list',
      url: 'shopping-lists',
    },
    {
      name: 'Shops',
      iconName: 'shopping_cart',
      url: 'shops',
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onItemClick(itemUrl: string) {
    console.log(itemUrl)
    this.router.navigate([itemUrl], {relativeTo: this.route});
  }

}
