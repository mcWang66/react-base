import {Subject} from 'rxjs'

class ComRxjsService {
 
  constructor() {
    this.sortObj = {
      title: '',
      sort: true
    }
  
    this.sortSubject$ = new Subject();
  };
  setSort(_title) {
    this.sortObj.title = _title;
    this.sortObj.sort = !this.sortObj.sort;
    this.sortSubject$.next(this.sortObj);
  }
}

export default new ComRxjsService();