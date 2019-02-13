
import { Action } from '@ngrx/store';
import { Product } from '../product';
import { LoadChildren } from '@angular/router';

export enum ProductActionTypes {
    ToggleProductCode = '[Product] Toggle Product Code',
    SetCurrentProduct = '[Product] Set Current Product',
    ClearCurrentProduct = '[Product] Clear Current Product',
    InitializeCurrentProduct = '[Product] Initialize Current Product',
    Load = '[Product] Load',
    LoadSuccess = '[Product] Load Success',
    LoadFail = '[Product] Load Fail',
    UpdateProduct = '[Product] Update Product',
    UpdateProductSuccess = '[Product] Update Product Success',
    UpdateProductFail = '[Product] Update Fail',
    CreateProduct = '[Product] Create Product',
    CreateProductSuccess = '[Product] Create Product Success',
    CreateProductFail = '[Product] Create Product Fail',
    DeleteProduct = '[Product] Delete Product',
    DeleteProductSuccess = '[Product] Delete Product Success',
    DeleteProductFail = '[Product] Delete Product Fail'
}

export class ToggleProductCode implements Action {
    readonly type = ProductActionTypes.ToggleProductCode;
    constructor(public payload: boolean) { }
}

export class SetCurrentProduct implements Action {
    readonly type = ProductActionTypes.SetCurrentProduct;
    constructor(public payload: Product) { }
}

export class ClearCurrentProduct implements Action {
    readonly type = ProductActionTypes.ClearCurrentProduct;
    constructor(public payload: any = null) { }
}

export class InitializeCurrentProduct implements Action {
    readonly type = ProductActionTypes.InitializeCurrentProduct;
    constructor(public payload: any = null) { }
}

export class Load implements Action {
    readonly type = ProductActionTypes.Load;
    constructor(public payload: any = null) { }
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
    constructor(public payload: Product[]) { }
}
export class LoadFail implements Action {
    readonly type = ProductActionTypes.LoadFail;
    constructor(public payload: string) { }
}

export class UpdateProduct implements Action {
    readonly type = ProductActionTypes.UpdateProduct;
    constructor(public payload: Product) { }
}

export class UpdateSuccess implements Action {
    readonly type = ProductActionTypes.UpdateProductSuccess;
    constructor(public payload: Product) { }
}
export class UpdateFail implements Action {
    readonly type = ProductActionTypes.UpdateProductFail;
    constructor(public payload: string) { }
}

export class CreateProduct implements Action {
    readonly type = ProductActionTypes.CreateProduct;
    constructor(public payload: Product) { }
}

export class CreateProductSuccess implements Action {
    readonly type = ProductActionTypes.CreateProductSuccess;
    constructor(public payload: Product) { }
}

export class CreateProductFail implements Action {
    readonly type = ProductActionTypes.CreateProductFail;
    constructor(public payload: string) { }
}

export class DeleteProduct implements Action {
    readonly type = ProductActionTypes.DeleteProduct;
    constructor(public payload: number) { }
}

export class DeleteProductSuccess implements Action {
    readonly type = ProductActionTypes.DeleteProductSuccess;
    constructor(public payload: number) { }
}

export class DeleteProductFail implements Action {
    readonly type = ProductActionTypes.DeleteProductFail;
    constructor(public payload: string) { }
}



export type ProductActions = ToggleProductCode
    | SetCurrentProduct
    | ClearCurrentProduct
    | InitializeCurrentProduct
    | Load
    | LoadFail
    | LoadSuccess
    | UpdateProduct
    | UpdateSuccess
    | UpdateFail
    | CreateProduct
    | CreateProductSuccess
    | CreateProductFail
    | DeleteProduct
    | DeleteProductSuccess
    | DeleteProductFail;
  
