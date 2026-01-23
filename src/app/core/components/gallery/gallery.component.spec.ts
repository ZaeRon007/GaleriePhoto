import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './gallery.component';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, provideRouter, RouterLink } from '@angular/router';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryComponent, HeaderComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        RouterLink,
      ]
    })
    .compileComponents();
    
    httpMock = TestBed.inject(HttpTestingController);

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain at list an image', () => {
    fixture.detectChanges();

    const request = httpMock.expectOne('/assets/list.json');

    request.flush([
      'photo1.jpg',
      'photo2.jpg',
      'photo3.jpg',
      'photo4.jpg',
      'photo5.jpg',
    ]);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('img');

    expect(img).not.toBeNull();
  })
});
