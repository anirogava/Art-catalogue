import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, map, Observable } from 'rxjs';
import { ArtBody, ArtWithId} from '../content/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FireApiService {
  constructor(private store: AngularFirestore, private auth: AuthService) {}

  addArt(body: ArtBody) {
    return from(this.store.collection('content').add(body));
  }

  getArts(): Observable<ArtWithId[]> {
    return this.store
      .collection<ArtBody>('content', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .get()
      .pipe(map((res) => res.docs.map<ArtWithId>((d) => ({ ...d.data(), id: d.id }))));
  }
  getArt(id: string): Observable<ArtBody | undefined> {
    return this.store
      .collection<ArtBody>('content', (ref) =>
        ref.where('uid', '==', this.auth.userId)
      )
      .doc(id)
      .get().pipe(map((res) => res.data()))
  }
}
