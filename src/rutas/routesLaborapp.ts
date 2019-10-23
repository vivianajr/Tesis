import { Router } from 'express';

import apiLaborappControllers from '../controladores/apiLaborappControllers'

class IndexLaborapp{

  public router: Router;

  constructor(){
    this.router = Router();
    this.config();
  }

  config(): void {

    this.router.get('/', apiLaborappControllers.get );
    this.router.post('/', apiLaborappControllers.post );
    this.router.put('/', );
    this.router.delete('/', );

  }

}

const indexLaborapp = new IndexLaborapp();
export default indexLaborapp.router;
