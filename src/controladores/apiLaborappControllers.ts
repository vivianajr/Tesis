import { Request, Response } from 'express';

import database from '../database/connection';


class ApiLaborappControllers{





  constructor(){


  }


  public async get( req:Request, res:Response ): Promise<void>{


    const personas = await database.query('SELECT * FROM temperatura')


    res.status(200).json({
      personas
    })

  }

  public async post( req: Request, res: Response ): Promise<void>{
    console.log(req.body)
    
    //const resultado = await database.query("INSERT INTO Personas set ?", [req.body]);

    res.status(200).json({
    })

  }



}

const apiLaborappControllers = new ApiLaborappControllers();

export default apiLaborappControllers;
