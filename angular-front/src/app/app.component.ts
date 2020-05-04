import { Component, OnInit } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NoteService],
  animations: [
    trigger('moveInLeft', [
      transition('void=> *', [style({ transform: 'translateX(300px)' }),
      animate('200ms ease-out', keyframes([
        style({ transform: 'translateX(300px)' }),
        style({ transform: 'translateX(0)' })

      ]))]),
      transition('*=>void', [style({ transform: 'translateX(0px)' }),
      animate('250ms ease-in', keyframes([
        style({ transform: 'translateY(-20px)', opacity: 1, offset: 0.2 }),
        style({ transform: 'translateY(250px)', opacity: 0, offset: 1 })

      ]))])

    ])
  ]
})
export class AppComponent implements OnInit {
  todoArray: string[] = [];

  private noteService: NoteService;
  public form: FormGroup;
  constructor(private fb: FormBuilder, noteService: NoteService) {
    this.noteService = noteService;
  }

  ngOnInit(): void {
    this.constructForm();
  }

  constructForm() {
    this.form = this.fb.group({
      todo: this.fb.control(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.form.invalid) { return; }
    this.todoArray.push(this.form.get('todo').value);

    const notes = this.noteService.notes;
    this.todoArray.push(...notes.map(note => note.title);
    this.form.reset();
  }

  onDeleteItem(index) {
    this.todoArray.splice(index, 1);
  }


}
