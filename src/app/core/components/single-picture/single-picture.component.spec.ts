import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglePictureComponent } from './single-picture.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';

describe('SinglePictureComponent', () => {
  let component: SinglePictureComponent;
  let fixture: ComponentFixture<SinglePictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SinglePictureComponent, HeaderComponent],
      providers: [
        provideHttpClient(),
        provideRouter([])
      ],
      imports: [
        MatCardModule,
        MatIconModule,
        RouterLink
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SinglePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')?.textContent).toContain('Go Back');
  })
});
