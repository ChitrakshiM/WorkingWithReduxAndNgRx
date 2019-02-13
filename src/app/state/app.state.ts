
import {ProductState} from '../products/State/product.reducer'

//Interface for entire store state
export interface State {  
    products: ProductState;
    user: any;
}