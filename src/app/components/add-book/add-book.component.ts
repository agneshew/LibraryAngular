import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book = {
    title: '',
    type: '',
    yearOfPublish: '',
    author: '',
    borrowed: false,
    member: ''
  };

  submitted = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  saveBook(): void {
    const data = {
      title: this.book.title,
      type: this.book.type,
      yearOfPublish: this.book.yearOfPublish,
      author: this.book.author,
      member: this.book.member
    };
    this.bookService.addBook(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      type: '',
      yearOfPublish: '',
      author: '',
      borrowed: false,
      member: ''
    };
  }
}
