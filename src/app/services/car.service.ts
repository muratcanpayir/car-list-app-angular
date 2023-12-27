import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../model/car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl =
    'https://freeapi.miniprojectideas.com/api/ZoomCar/GetAllCars';

  constructor(private http: HttpClient) {}

  getAllCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  getCarById(id: string): Observable<Car> {
    return this.http.get<Car>(
      `https://freeapi.miniprojectideas.com/api/ZoomCar/GetCarById?id=${id}`
    );
  }
}
