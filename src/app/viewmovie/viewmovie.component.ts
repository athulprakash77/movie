import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {

  constructor() { }


  movie:any=[
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
{"movie":"kgf","actor":"manoharan","actress":"manohari","release":"2021"},
  ]

  ngOnInit(): void {
  }

}
