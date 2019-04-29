import { Component, OnInit } from '@angular/core';
import { AttributeListService } from '../attribute-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  /**
   * Page title of confirmation dialog component
   */
  pageTitle: string = "Confirm Removal";
  /**
   * name of attribute want to remove  
   */
  Attributename: string;

  /**
   * Creates an instance of confirmation dialog component.
   */
  constructor(private service: AttributeListService, private router: Router, private rout: ActivatedRoute) {
    try {
      let id = +this.rout.snapshot.paramMap.get("id");

      this.Attributename = this.service.GetItem(id).name;

    }
    catch (err) {
      console.log(err);
    }
  }

  /**
   * on init
   */
  ngOnInit() {
  }
  /**
   * Determines whether confirm on
   */
  onConfirm(): void {
    try {
      let id = +this.rout.snapshot.paramMap.get("id");
      this.service.RemoveItemByID(id);
      this.router.navigate(["AttributeList"]);
    }
    catch (err) {
      console.log(err);

    }

  }

  /**
   * Determines whether cancel on
   */
  onCancel(): void {
    try {
      this.router.navigate(["AttributeList"]);
    }
    catch (err) {
      console.log(err);

    }
  }

}
