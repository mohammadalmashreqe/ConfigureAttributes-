import { Component, OnInit } from '@angular/core';
import { AttributeListService } from '../attribute-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-attribute',
  templateUrl: './add-edit-attribute.component.html',
  styleUrls: ['./add-edit-attribute.component.css']
})
export class AddEditAttributeComponent implements OnInit {

  /**
    * Page title of add edit attributes component
    */
  pageTitle: string = "";
  /**
   * Name  of  attribute want to add  or edit it 
   */
  name: string;
  /**
   * Regularexpression  of  attribute want to add  or edit it 
   */
  regularexpression: string;
  /**
   * Id of  attribute wanted to editing 
   */
  IDofEditingAttribute: number;

  /**
   * Creates an instance of add edit attributes component.
   * @param service  
   * @param router 
   * @param rout 
   */
  constructor(private service: AttributeListService, private router: Router, private rout: ActivatedRoute) {

  }

  /**
   * on init
   */
  ngOnInit() {

    try {
      this.IDofEditingAttribute = +this.rout.snapshot.paramMap.get("id");
      if (this.IDofEditingAttribute == -1) {
        this.pageTitle = "Add Attribute";

      }
      else {
        this.pageTitle = "Edit Attribute";
        let index = this.service.GetItemIndex(this.IDofEditingAttribute);
        this.name = this.service.GetItem(this.IDofEditingAttribute).name;
        this.regularexpression = this.service.GetItem(this.IDofEditingAttribute).regularExpression;




      }
    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   *  add or edit attribute
   * @param namevalidator 
   * @param regularvalidator 
   */
  Onsave(namevalidator: boolean, regularvalidator: boolean): void {

    try {
      if (!namevalidator && !regularvalidator) {


        if (this.IDofEditingAttribute == -1) {

          const item = <IAttributes>{
            ID: this.service.GetList().length,
            name: this.name,
            regularExpression: this.regularexpression
          }

          this.service.AddAttribute(item);
        }
        else {
          this.service.EditItem(this.IDofEditingAttribute, this.name, this.regularexpression);

        }
        document.getElementById("labelError1").style.display = "none";
        document.getElementById("labelError2").style.display = "none";
        this.router.navigate(["AttributeList"]);
      }
      else {


       
        if (namevalidator && regularvalidator) {
          document.getElementById("labelError1").style.display = "block";

          document.getElementById("labelError2").style.display = "block";
          document.getElementById("labelError2").style.color = "red";
          document.getElementById("labelError1").style.color = "red";
        }
        else 
        
          if (!namevalidator) {
            document.getElementById("labelError1").style.display = "block";
            document.getElementById("labelError1").style.color = "red";
            document.getElementById("labelError2").style.display = "none";
          }
        
      else  if (!regularvalidator) {
        document.getElementById("labelError1").style.display = "none";

        document.getElementById("labelError2").style.display = "block";
        document.getElementById("labelError2").style.color = "red";
      }

       
      }

    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * Determines whether back on
   */
  onBack() {
    try {
      this.router.navigate(["AttributeList"]);
    }
    catch (err) {
      console.log(err);
    }
  }

}
