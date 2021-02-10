import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Meal } from 'src/app/model/interfaces/meal.interface';
import { MealService } from 'src/app/services/meal.service';

@Component({
  selector: 'app-meals-list',
  templateUrl: './meals-list.component.html',
  styleUrls: ['./meals-list.component.scss']
})
export class MealsListComponent implements OnInit {
  pageLoaded = false;
  meals: Meal[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mealService: MealService
  ) { }

  ngOnInit(): void {
    this.mealService.getAllMeals().subscribe(results => {
      this.meals = results;
      this.pageLoaded = true;
    });
  }

  goToMealCreationPage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
