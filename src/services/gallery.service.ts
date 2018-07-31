import {Injectable} from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class GalleryService {
    constructor(private http: HttpClient) {
    }
    search(motCle: string, size: number, page: number ) {

        return this.http.get('https://pixabay.com/api/?key=9682692-25f8b75ca0f48c427241f45af&q='
            + motCle + '&per_page=' + size + '&page=' + page)
            .pipe(map((response: any) => response));
    }
}
