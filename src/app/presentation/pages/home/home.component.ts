import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ProductModal, RegisterProduct, UpdateProduct } from 'src/app/core/domain/product-model/product.model';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterProductUseCase } from 'src/app/core/usecases/product/register-product.usecase';
import { GetProductUseCase } from 'src/app/core/usecases/product/get-product.usecase';
import { ToastModule } from 'primeng/toast';
import { DeleteProductUseCase } from 'src/app/core/usecases/product/delete-product.usecase';
import { UpdateProductUseCase } from 'src/app/core/usecases/product/update-product.usecase';

@Component({
  selector: 'dg-home',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    ConfirmPopupModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  productData: any;

  visible: boolean;
  visibleUpdate: boolean;
  loading: boolean = false;
  registerForm!: FormGroup;
  updatedProductId: string;

  constructor(
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private regProd: RegisterProductUseCase,
    private getProd: GetProductUseCase,
    private delProduct: DeleteProductUseCase,
    private updtProduct: UpdateProductUseCase,
    private messageService: MessageService
  ) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      productName: ['', Validators.required],
      productDescription: ['', Validators.required],
      productId: ['']
    });

    this.showListProducts();
  }

  get name() {
    return this.registerForm.get('productName');
  }

  get idProduct() {
    return this.registerForm.get('productId');
  }

  get description() {
    return this.registerForm.get('productDescription');
  }

  deleteProduct(evt: Event, idRecord: string): void {
    this.confirmationService.confirm({
      target: evt.target,
      message: 'Are you sure that you want to proceed?',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.excludeProduct(idRecord);
      },
      reject: () => {
        console.log('rejeitado')
      }
    });
  }

  openModalProductRegister() {
    this.visible = true;
  }

  openModalUpdateRegister(prodId: string) {
    this.visibleUpdate = true;

    let productSelected = this.productData.filter((r: any) => r.CODE === prodId);
    this.name.setValue(productSelected[0].NAME);
    this.description.setValue(productSelected[0].DESCRIPTION);
    this.idProduct.setValue(productSelected[0].ID);
    this.updatedProductId = prodId;
  }

  registerProduct() {
    this.loading = !this.loading;

    let productData: RegisterProduct = {
      name: this.name.value,
      discription: this.description.value
    }

    this.regProd.execute(productData).subscribe({
      next: (v: any) => {
        this.loading = !this.loading;

        if (v.length > 0) {
          this.visible = false;
          this.messageService.add({ key: 'reg-success', severity: 'success', summary: 'Sucesso', detail: 'Produto cadastrado.' });
          this.showListProducts();
        }

      },
      error: (e: any) => {
        this.loading = !this.loading;
        console.log(e)
      }
    });
  }

  updateProduct() {
    this.loading = !this.loading;

    let productData: UpdateProduct = {
      NAME: this.name.value,
      DESCRIPTION: this.description.value,
      ID: this.updatedProductId,
      CODE: this.idProduct.value
    }

    this.updtProduct.execute(productData).subscribe({
      next: (v: any) => {
        if (v.createdTime) {
          this.loading = false;
          this.registerForm.reset()
          this.visibleUpdate = false;
          this.messageService.add({ key: 'update-success', severity: 'success', summary: 'Sucesso', detail: 'Produto atualizado.' });
          this.showListProducts();
        }
      },
      error: (e: any) => {
        console.warn(e)
      }
    })
  }

  showListProducts() {
    this.getProd.execute().subscribe((r: any) => {
      this.productData = r;
    })
  }

  excludeProduct(prodId: string): void {
    this.messageService.add({ key: 'delete-warning', severity: 'info', summary: 'Excluindo', detail: 'Removendo o produto...' });

    this.delProduct.execute(prodId).subscribe({
      next: (v: any) => {
        if (v.deleted) {
          this.messageService.clear('delete-warning');
          this.messageService.add({ key: 'delete-success', severity: 'success', summary: 'Sucesso', detail: 'Produto excluído.' });
          this.showListProducts();
        }
      },
      error: (e: any) => {
        this.messageService.add({ key: 'delete-error', severity: 'error', summary: 'Erro', detail: 'Erro ao excluir o produto.' });
      }
    })
  }
}


