import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private afs: AngularFirestore) { }


  loadData() {
    return this.afs
      .collection('categories')
      .snapshotChanges()
      .pipe(
        map((data) => {
          return data.map((mainData) => {
            const data = mainData.payload.doc.data();
            const id = mainData.payload.doc.id;
            return { id, data };
          });
        })
      );
  }
}
