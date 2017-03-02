import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Post } from './posts';

import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  private posts: Post[] = [
    { title: 'Sreeraj S', description: 'Co-Founder of @UltimateAngular. Developer. Hacker. Community backer. Author and blogger. Console logger.' },
    { title: 'Rajeev G', description: 'Developer Advocate @Telerik / @ProgressSW. Co-founder @UltimateAngular. Author. Developer Expert @google. Lesser half of @RachaelLPurser. @ken_wheeler advocate.' },
    { title: 'Amal Kumar', description: 'JavaScript ninja, image processing expert, software quality fanatic' },
    { title: 'Prince Joseph', description: 'CTO @gethumancom, Google Developer Expert (GDE), Host of @AngularAir, Boston Angular Meetup Co-organizer, Boston College \'00, ♥ Red Sox' },
    { title: 'Prajeesh Balagopal', description: 'I like headphones, art, skateboarding and coding. Angular GDE at @Google, @thoughtram co-founder and creator of @5thingsAngular' },
    { title: 'Al Ameen', description: 'Mr. Rogers of JavaScript. Victor makes Angular. He also toys with eclectic programming technologies and obsesses over fonts and keyboard layouts.' }
  ];

  getPosts() {
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/forum.v1' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('/apis/posts.json');
  }

  // getPost(id) {
  //   return this.posts.find(post => post.id === Number(id));
  // }

  getPost(id: string) {
    return this.http
      .get('/apis/posts/' + id + '.json')
      .map(r => r.json())
      .map(r => {
        return r;
      });
  }

  createPost(post) {
    let body = JSON.stringify({ post: post });
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/forum.v1' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/apis/posts.json', body, options);
  }

  // addPost (post: Post[]) {
  //   this.heroService.addHero(name)
  //                    .subscribe(
  //                      hero  => this.heroes.push(hero),
  //                      error =>  this.errorMessage = <any>error);
  // }


  // fetchAll() {
  //   return this._http
  //     .get('/apis/products')
  //     .map(r => r.json())
  //     .map(r => {
  //       let results: Array<Product> = [];
  //       if (r.results) {
  //         results = r.results.map((v: any) => new Product(v));
  //       }
  //       return { totalCount: r.totalCount, results: results };
  //     });
  // }

  // fetch(id: string) {
  //   return this._http
  //     .get('/api/products/' + id)
  //     .map(r => r.json())
  //     .map(r => {
  //       return new Product(r);
  //     });
  // }

  // create(product: Product) {
  //   let param: { product: Product } = { 'product': product };
  //   return this._http
  //     .post('/api/products/', JSON.stringify(param));
  // }

  // update(id: string, product: Product) {
  //   let param: { product: Product } = { 'product': product };
  //   return this._http
  //     .put('/api/products/' + id, JSON.stringify(param));
  // }

}
