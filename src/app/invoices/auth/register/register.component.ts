import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from '@angular/forms';
import { InvoiceService } from '../../invoice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from '../../models/invoice';
import { Register } from '../../models/register';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  private invoice:Invoice[]


  constructor(
       private fb: FormBuilder ,
       private invoiceService : InvoiceService ,
       private _snackBar: MatSnackBar,
       private router:Router,
       private route:ActivatedRoute

       ) { }

  ngOnInit(): void {

    this.createForm();
  }

  createForm(){

    this.registerForm = this.fb.group({ 
    
          name :['' , Validators.required],
          email: ['', Validators.compose([Validators.required, Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), Validators.minLength(1)])],
          username : ['' , Validators.required],
          password: ['', Validators.required],  
          c_password:['', Validators.required]

      })
    
     }
     


     private errorHandler(error ,message ){
       console.log(error);
       this._snackBar.open(message , 'Error' , {
         duration:2000
       })
     }

     onCancel() {

      this.router.navigate(['dashboard' ,'invoices'])

     }


     onRegister(){
       
       console.log(this.registerForm.value)
       this._snackBar.open('User Register successfully' , 'Success' , {
        duration:2000
      }
      )

      this.router.navigate(['dashboard' ,'login'])
     }
   
  }


