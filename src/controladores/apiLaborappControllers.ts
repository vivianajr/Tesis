import { Request, Response } from 'express';

import database from '../database/connection';


class ApiLaborappControllers{





  constructor(){


  }


  public async get( req:Request, res:Response ): Promise<void>{


    const personas = await database.query('SELECT * FROM Personas')


    res.status(200).json({
      personas
    })

  }

  public async post( req: Request, res: Response ): Promise<void>{



    const resultado = await database.query("INSERT INTO Personas set ?", [req.body]);

    res.status(200).json({
      resultado
    })

  }



}

const apiLaborappControllers = new ApiLaborappControllers();

export default apiLaborappControllers;
