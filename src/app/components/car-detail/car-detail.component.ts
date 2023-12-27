import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../model/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
})
export class CarDetailComponent implements OnInit {
  car: Car | undefined;
  constructor(private route: ActivatedRoute, private carService: CarService) {}

  ngOnInit() {
    const carId = this.route.snapshot.paramMap.get('id');
    if (carId) {
      this.carService.getCarById(carId).subscribe((car: any) => {
        this.car = car.data;
      });
    }
  }
}
