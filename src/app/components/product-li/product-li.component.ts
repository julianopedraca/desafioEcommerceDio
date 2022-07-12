import { Component, OnInit } from '@angular/core';
import { BooksService } from './product-li-.component.service';

@Component({
  selector: 'app-product-li',
  templateUrl: './product-li.component.html',
  styleUrls: ['./product-li.component.css']
})
export class ProductLiComponent implements OnInit {

  livros: any;
  bookService: BooksService

  constructor( bookService : BooksService) {
      this.bookService = bookService 
   }

  ngOnInit(): void {
    this.livros = this.bookService.getBook().subscribe((data => {
      this.livros = data;
      console.log(this.livros)
    }))
  }

}
