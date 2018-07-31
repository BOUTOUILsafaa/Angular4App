import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  pagePhotos: {};
  motCle: String = '';
  currentPage = 1;
  size = 4;
  totalPages: number;
  pages: Array<number> = [];
  constructor( private http: HttpClient) { }

  ngOnInit() {
  }
  onSearch(dataForm) {
    console.log(dataForm);
    this.http.get('https://pixabay.com/api/?key=9682692-25f8b75ca0f48c427241f45af&q=' + dataForm.motCle + '&per_page=' + this.size + '&page=' + this.currentPage)
        .pipe(map((response: any) => response))
        .subscribe(data => {console.log(data);
          this.pagePhotos = data;
          this.totalPages = data.totalHits / this.size;
          if (data.totalHits % this.size != 0) { ++this.totalPages; }
          this.pages = new Array(this.totalPages);
        });
  }
  goToPage(i) {
      this.currentPage = i;
      this.onSearch({motCle: this.motCle});

  }


}
