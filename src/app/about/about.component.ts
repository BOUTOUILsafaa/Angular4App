import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info;
  comments = [];
  commentaires = {date: null, message: '' };
  constructor(private aboutService: AboutService) {
      this.info = this.aboutService.getInfo();
      this.comments = this.aboutService.getAllComments();
  }
  ngOnInit() {
  }
  onAddCommentaire(c) {
      console.log(c);
     this.aboutService.addComment(c);
     this.comments = this.aboutService.getAllComments();
     this.commentaires.message = '';
  }

}
