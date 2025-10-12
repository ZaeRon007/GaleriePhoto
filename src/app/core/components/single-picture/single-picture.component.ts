import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-picture',
  templateUrl: './single-picture.component.html',
  styleUrl: './single-picture.component.css'
})
export class SinglePictureComponent implements OnInit{

  Name!: string;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.Name = this.route.snapshot.paramMap.get('name') ?? '';
    console.log(this.Name);
  }
}
