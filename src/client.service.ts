import { Injectable } from '@nestjs/common';
import { createChannel, createClient } from 'nice-grpc';
import * as clientLib from './client';
import { DynamicInvocationInternal } from './types';

@Injectable()
export class ClientService {
  private serviceChannel = createChannel(
    `${process.env.PROTO_HOST}:${process.env.ASIO_MS_PUBLIC_PORT}`,
  );

  private serviceInternalChannel = createChannel(
    `${process.env.PROTO_INTERNAL_HOST}:${process.env.ASIO_MS_PRIVATE_PORT}`,
  );

  private workersChannel = createChannel(
    `${process.env.WORKERS_HOST}:${process.env.ASIO_WORKERS_PORT}`,
  );

  getServiceClient<C>(T: any): C {
    return createClient(T, this.serviceChannel) as C;
  }

  getServiceInternalClient<C>(T: any): C {
    return createClient(T, this.serviceInternalChannel) as C;
  }

  getWorkersClient<C>(T: any): C {
    return createClient(T, this.workersChannel) as C;
  }

  async invokeUnaryInernal(payload: DynamicInvocationInternal): Promise<any> {
    const { service, method, data } = payload;
    const definition = clientLib[`${service}Definition`];
    const client = this.getServiceInternalClient(definition);
    const result = await client[method](data);
    return result;
  }
}
