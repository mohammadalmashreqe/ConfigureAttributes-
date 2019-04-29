import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributeListService {

  List: IAttributes[] = [];


  /**
   * Creates an instance of attribute list service.
   */
  constructor() { }

  /**
   * Adds attribute
   * @param item 
   */
  public AddAttribute(item: IAttributes): void {
    try {
      this.List.push(item);
    }


    catch (err) {
      console.log(err);
    }

  }

  /**
   * Removes item by id
   * @param ID 
   */
  public RemoveItemByID(ID: number): void {

    try {
      this.List.splice(this.GetItemIndex(ID),1);
      }
      catch(err)
      {
        console.log(err);
      }

  }

  /**
   * Edits item
   * @param Id 
   * @param name 
   * @param regualrExpre 
   */
  public EditItem(Id: number, name: string, regualrExpre: string): void {
    try {
      this.List[this.GetItemIndex(Id)].name = name;
      this.List[this.GetItemIndex(Id)].regularExpression = regualrExpre;
    }
    catch (err) {
      console.log(err);
    }

  }

  /**
   * Gets item index
   * @param ID 
   * @returns item index or -1 if notfound 
   */
  public GetItemIndex(ID: number): number {
    try {
      for (var Index = 0; Index < this.List.length; Index++) {
        if (this.List[Index].ID == ID)
          return Index;
      }
      return -1;
    }
    catch (err) {
      console.log(err);
    }
  }
  /**
   * Gets list
   * @returns list 
   */
  public GetList(): IAttributes[] {
    try {
      return this.List;
    }
    catch (err) {
      console.log(err);
    }
  }
  /**
   * Gets item
   * @param ID 
   * @returns item 
   */
  public GetItem(ID: number): IAttributes {
    try {

      return this.List[this.GetItemIndex(ID)];
    }
    catch (err) {
      console.log(err);
    }

  }


}
