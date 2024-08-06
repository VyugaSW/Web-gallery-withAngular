import { Injectable } from '@angular/core';

export interface Picture{
  id: number;
  path: string;
  name: string;
  year: Date;
  author: string;
  width: number;
  height: number;
  location: string;
}


@Injectable({
  providedIn: 'root'
})
export class PicturesDataService {

  private Data: Picture[] = [
    {id: 1, path: 'assets\\img\\test.jpg', name: 'Test1', year: new Date(), author: 'Test1', 
      width: 200, height: 150, location: 'Test town'},
    {id: 2, path: 'assets\\img\\test.jpg', name: 'Test1', year: new Date(2023), author: 'Test1', 
      width: 200, height: 150, location: 'Test town'},
    {id: 3, path: 'assets\\img\\test.jpg', name: 'Test1', year: new Date(), author: 'Test1', 
      width: 200, height: 150, location: 'Test town'},
    {id: 4, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 5, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 6, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(2023), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 7, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 8, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 9, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 10, path: 'assets\\img\\test.jpg', name: 'Test2', year: new Date(2023), author: 'Test2', 
      width: 200, height: 150, location: 'Test town'},
    {id: 11, path: 'assets\\img\\test.jpg', name: 'Test3', year: new Date(), author: 'Test3', 
      width: 200, height: 150, location: 'Test town'},
    {id: 12, path: 'assets\\img\\test.jpg', name: 'Test3', year: new Date(), author: 'Test3', 
      width: 200, height: 150, location: 'TestDSFSDFDSF town'},
  ]
  constructor() { }

  public getPictureById(id: number): Picture{
    return this.Data.filter(x => x.id == id)[0] ?? null;
  }

  public getAll(){
    return this.Data;
  }

  public getPicturesByAuthor(author: string): Picture[]{
    return this.Data.filter(x => x.author === author) ?? null;
  }
}
