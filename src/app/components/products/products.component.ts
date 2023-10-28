import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pagable } from 'src/app/model/pageable.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any[] =[];
  public productInfo:any;

  public selectedImageIdx: number = 0;
  public thumbnailImageIdx: number = 0;
  public tempImageFiles: any[] = [];
  public pagable:Pagable= { page:0, size:10, sort:'productId', sortOrder:'DESC' };

  constructor(private productsService:ProductsService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productsService.getAll(this.pagable).subscribe((response:any)=> {
      console.log(response);
      this.productList = response.content;
    })
  }

  openModal(modelRef:any, productObj = null) {
    this.modalService.open(modelRef, { size: "xl" });
    this.productInfo = productObj;
  }

  openViewModal(modelRef:any, productObj = null) {
    this.modalService.open(modelRef, { size: "l" });
    this.productInfo = productObj;
  }
  
  // view image model
  openImageModal(modal: any, imageUrls: string[], thumbnailImageIdx: number) {
    this.tempImageFiles = [...imageUrls];
    this.thumbnailImageIdx = thumbnailImageIdx;
    this.modalService.open(modal, { 
      size: "xl",
      scrollable: true 
    });
  }

  // open image
  openImage(url: string) {
      window.open(url, "_blank")
  }

  delete(productId:any) {
    this.productsService.delete(productId).subscribe(response=>{
      this.getAllProduct();
    })
  } 
  closeModel(modelRef:any) {
    this.modalService.dismissAll(modelRef);
  }
}
