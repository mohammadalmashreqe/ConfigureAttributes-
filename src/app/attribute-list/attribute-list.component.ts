import { Component, OnInit } from '@angular/core';
import { AttributeListService } from '../attribute-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.css']
})
export class AttributeListComponent implements OnInit {

  /**
   * Page title of attribute list component
   */
  pageTitle: string = "Attributes List";
  /**
   * List  of attributes
   */
  List: IAttributes[] = [];


  /**
   * Error message of attribute list component
   */
  errorMessage:boolean;
  /**
   * Creates an instance of attribute list component.
   * @param service 
   * @param router 
   * @param rout 
   */
  constructor(private service: AttributeListService, private router: Router, private rout: ActivatedRoute, ) {
  
    
  }

  /**
   * on init
   */
  ngOnInit() {
  
    try {
    this.List =this. service.GetList();
    if(this.List.length==0)
    this.errorMessage=true;
    else 
    this.errorMessage=false; 
    }
    catch(err)
    {
      console.log(err);
    }
  }

  /**
   * Determines whether add on
   */
  onAdd(): void { 
    try {
      this.router.navigate(['/Attributes', -1]);
    }
    catch (err) {
      console.log(err);
    }

  }

  /**
   * Export data as a json file 
   */
  onExportData(): void {

    try {

      if(!this.errorMessage)
{
  document.getElementById("ButtonError").style.display="none";

      let data: string = "";
      

        data += JSON.stringify(this.List);


      
      console.log(data);



      let dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(data);

      let exportFileDefaultName = 'data.json';

      let linkElement = document.createElement('a');

      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
    }
    else 
    {
      document.getElementById("ButtonError").style.display="inline";
    }
     
    
  }
    catch (err) {
      console.log(err);
    }

  }

}
