import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  loadFeatured() {
    return this.afs
      .collection('posts', ref => ref.where('isFeatured', '==', true).limit(4))
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


  loadLatest() {
    return this.afs
      .collection('posts', ref => ref.orderBy('createdAt').limit(4))
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

  loadCategoryPosts(categoryId: string) {
    return this.afs
    .collection('posts', ref => ref.where('category.categoryId', '==', categoryId).limit(4))
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


  loadOnePost(id: string) {
    return this.afs.collection('posts').doc(id).valueChanges();
  }

  loadSimilar(catId: string) {
    return this.afs
    .collection('posts', ref => ref.where('category.categoryId', '==', catId).limit(4))
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


 countViews(postId: string) {
  const viewCount = {
    views: firebase.default.firestore.FieldValue.increment(1)
  }

  this.afs.collection('posts').doc(postId).update(viewCount).then((docRef) => 
  
  console.log('View Count Updated')
  );


 }

}
