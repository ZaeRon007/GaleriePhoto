import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements OnInit {
  constructor(private http: HttpClient) {

  }

  filePath!: string;
  files$!: Observable<string[]>;

  ngOnInit(): void {
    this.filePath = "/list.json";

    this.files$ = this.http.get<string[]>(this.filePath).pipe(
      catchError((error) => {
        console.error(error);
        return of<string[]>([]);
      })
    );

  }
}
