import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from '../product.service';
import * as productActions from './product.action';
import { Product } from '../product'
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductService) { }

    @Effect()
    loadProducts$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.Load),
        mergeMap((action: productActions.Load) => this.productService.getProducts().pipe(
            map((products: Product[]) => (new productActions.LoadSuccess(products))),
            catchError(err => of(new productActions.LoadFail(err)))
        ))
    )

    @Effect()
    updateProducts$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.UpdateProduct),
        map((action: productActions.UpdateProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService.updateProduct(product).pipe(
                map(updateProduct => (new productActions.UpdateSuccess(updateProduct))),
                catchError(err => of(new productActions.UpdateFail(err)))
            ))
    )
    @Effect()
    createProduct$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.CreateProduct),
        map((action: productActions.CreateProduct) => action.payload),
        mergeMap((product: Product) =>
            this.productService.createProduct(product).pipe(
                map(newProduct => (new productActions.CreateProductSuccess(newProduct))),
                catchError(err => of(new productActions.CreateProductFail(err)))
            )
        )
    )

    @Effect()
    deleteProduct$: Observable<Action> = this.actions$.pipe(
        ofType(productActions.ProductActionTypes.DeleteProduct),
        map((action: productActions.DeleteProduct) => action.payload),
        mergeMap((productId: number) =>
            this.productService.deleteProduct(productId).pipe(
                map(() => (new productActions.DeleteProductSuccess(productId))),
                catchError(err => of(new productActions.DeleteProductFail(err)))
            )
        )
    )
}