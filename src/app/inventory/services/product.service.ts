import { AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dbPath = '/products';
  productRef : AngularFireList<Product>;

  constructor(private db: AngularFireDatabase,  private storage: AngularFireStorage) {
    this.productRef = db.list(this.dbPath);
   }

  getAll(): AngularFireList<Product>{
    return this.productRef;
  }

  getProducts(numberItems: number): AngularFireList<Product> {
    return this.db.list(this.dbPath, ref => 
      ref.limitToLast(numberItems)
    );
  }

  getProducts2(numberItems: number, start?: any): AngularFireList<Product> {
    return this.db.list(this.dbPath, ref => ref.orderByKey().startAt(start).limitToFirst(numberItems + 1));
  }


  pushProduct(product: Product){
    const filePath = `${this.dbPath}/${product.img_file?.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, product.img_file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          product.img_url = downloadURL;
          this.create(product);
        });
      })
    ).subscribe();

    return uploadTask.percentageChanges();
  }

  create(product: Product): any {
    return this.productRef.push(product);
  }

  updateProduct(product:Product): void{
    // this.deleteFileStorage(product?.name)

    // const filePath = `${this.dbPath}/${product?.img_file?.name}`;
    // const storageRef = this.storage.ref(filePath);
    // const uploadTask = this.storage.upload(filePath, product?.img_file);

    // uploadTask.snapshotChanges().pipe(
    //   finalize(() => {
    //     storageRef.getDownloadURL().subscribe(downloadURL => {
    //       product.img_url = downloadURL;
          if(product.key){
            const {key, ...data} = product
            this.update(key, data).then(()=> {
              // alert('Producto editado exitosamente')
            })
            .catch(err => console.log(err))
          }
      //   });
      // })  
    // ).subscribe();
  }

  private update(key: string, value: any): Promise<void> {
    return this.productRef.update(key, value);
  }

  removeProduct(product?: Product): void {
    this.delete(product?.key)
      .then(() => {
        this.deleteFileStorage(product?.img_file?.name);
        // alert('Producto eliminado exitosamente')
      })
      .catch(error => console.log(error));
  }

  private deleteFileStorage(name?: string): void {
    const storageRef = this.storage.ref(this.dbPath);
    if(name){
      storageRef.child(name).delete();
    }else{
      console.log('file name is not definied')
    }
  }

  private delete(key?: string): Promise<void> {
    return this.productRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.productRef.remove();
  }

  
}
