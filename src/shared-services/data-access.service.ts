import { CommonMethodsService } from '../shared-services/common-methods.service';
import { ConfigService } from './../config/config.service';
import { Injectable, HttpException } from '@nestjs/common';
import { Pool } from 'pg';
import SCHEMAS from '../constants/schemas';

@Injectable()
export class DataAccessService {
    private pool: Pool;
    constructor(private config:ConfigService,private commonMethods:CommonMethodsService){
        this.pool = new Pool({
            host: this.config.get('DB_HOST'),
            port: this.config.get('DB_PORT'),
            database: this.config.get('DB_NAME'),
            user: this.config.get('DB_USER'),
            password: this.config.get('DB_USER_PASSWORD'),
            max: 20,
            idleTimeoutMillis: 30000,
            connectionTimeoutMillis: 5000,
          });
      
          this.pool.on('error', (err, client) => {
            throw err;
          })
    }

    public executeDBFunction(
        name: string,
        params: object,
        schema = SCHEMAS.Public,
      ) {
        return new Promise((resolve, reject) => {
          this.pool.connect((err, client, done) => {
            if (err) {
              reject(new HttpException(err, 500));
            }
            else if (client) {
              console.log(`select * from ${schema}.${name}(${this.commonMethods.getParamsString(params)})`,params);
              client.query(
                `select * from ${schema}.${name}(${this.commonMethods.getParamsString(params)})`,
                Object.values(params),
                (err, row) => {
                  client.release();
                  console.log(err)
                  return !err ? resolve(row) : reject(new HttpException(err, 500));
                },
              );
            }
          })
        });
      }

}
