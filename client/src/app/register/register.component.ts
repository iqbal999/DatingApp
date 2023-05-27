import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  @Output() cancelRegister = new EventEmitter();

  constructor(private accountService:AccountService, private toastr: ToastrService)
  {

  }

  ngOnInit(): void {
    //console.log(this.usersFromHomeComponent);
  }

  model:any = {}


  register()
  {
    this.accountService.register(this.model).subscribe({
      next: response => {
        //console.log(response);
        this.cancel();
      },
      error: error => this.toastr.error(error.error)
    });
  }

  cancel()
  {
    this.cancelRegister.emit(false);
  }
}
