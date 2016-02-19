import { Component } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { RsvpModel } from './RsvpModel';

@Component({
  selector: 'rsvp-form',
  directives: [NgForm],
  template: `
    <div class="inner">
      <h3>
        <img src="assets/date.png" />
        RSVP
      </h3>
      
      <form 
        [hidden]="submitted" 
        id="rsvp" 
        (ngSubmit)="onSubmit()"
        #rsvp="ngForm"
        name="rsvp">
        
        <input 
          type="text" 
          [(ngModel)]="model.name"
          ngControl="name"  
          #name="ngForm"
          required 
          placeholder="Name of guest" 
        />

        <input 
          type="text" 
          [hidden]="!model.attending"
          placeholder="Number of Seats"
          [(ngModel)]="model.seats"
          ngControl="seats"  
          #seats="ngForm"
        />
        
        <input 
          type="checkbox" 
          id="attending"
          [(ngModel)]="model.attending"
          ngControl="attending"  
          #attending="ngForm"
        />
        <label for="attending">Attending</label>
        
        <button 
          type="submit" 
          [disabled]="!rsvp.form.valid">
            Submit
        </button>
      </form>
      
    </div>
  `
})
export class RsvpComponent {
  
  model: RsvpModel = new RsvpModel();
  submitted: boolean = false;

  onSubmit() { 
    this.submitted = true;
    alert('Thanks for letting us know!');
    console.log('Form Model:', this.model);
  }
  
}