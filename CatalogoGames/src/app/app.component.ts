import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { genre } from 'src/models/genre.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public genres: genre[] = [];
  public title:string = 'Generos';
  public formGenre: FormGroup;

  constructor(private fb:FormBuilder){
    this.formGenre = this.fb.group({
      nameGenre:['',Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(30),
      Validators.required
    ])]
  });

    this.genres.push(new genre(1,'FPS'));
    this.genres.push(new genre(2,'SandBox'));
    this.genres.push(new genre(3,'Aventura'));
    
  }

  remove(Genre:genre){
    const index = this.genres.indexOf(Genre)

    if(index !== -1){
      this.genres.splice(index,1);
    }
  }

  add(){
    const name = this.formGenre.controls['nameGenre'].value;
    const id = this.genres.length+1;
    this.genres.push(new genre(id,name));
    this.formGenre.reset();
  }
  edit(){

  }
}
