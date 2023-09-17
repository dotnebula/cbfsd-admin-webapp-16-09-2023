import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pagable } from 'src/app/model/pageable.model';
import { CategoriesService } from 'src/app/services/catergories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categoriesList:any[] =[];
  public categoryInfo:any;
  public pagable:Pagable= { page:0, size:10, sort:'categoryId', sortOrder:'DESC' };

  constructor(private categoriesService:CategoriesService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAll(this.pagable).subscribe( (response:any)=> {
      // console.log(response);
      this.categoriesList = response.content;
    })
  }
  openProductCategoryDialog(modelRef:any, productCategoryObj = null) {
    this.modalService.open(modelRef);
    this.categoryInfo = productCategoryObj;
  }

  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }

  delete(categoryId:any) {
    this.categoriesService.delete(categoryId).subscribe((response:any ) => {
      this.getAllCategories();
    });
  }
}
