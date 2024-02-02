import { expect } from 'chai';
import * as sinon from 'sinon';
import { SinonFakeXMLHttpRequestStatic, SinonFakeXMLHttpRequest } from 'sinon';
import { HTTPTransport, Methods } from './HTTPTransport';
  
  describe('HTTPTransport', () => {
    let xhr: SinonFakeXMLHttpRequestStatic;
    let instance: HTTPTransport;
    let requests: SinonFakeXMLHttpRequest[] = [];
    const endpoint = '/user';
    beforeEach(() => {
      xhr = sinon.useFakeXMLHttpRequest();
  
      // @ts-expect-error: Should XMLHttpRequest
      global.XMLHttpRequest = xhr;
  
      xhr.onCreate = (request: SinonFakeXMLHttpRequest) => {
        requests.push(request);
      };
  
      instance = new HTTPTransport(endpoint);
    });
  
    afterEach(() => {
      requests = [];
    });
  
    it('.get() send GET request', () => {
      instance.get('/user');
      const [request] = requests;
      expect(request.method).to.eq(Methods.Get);
    });
  
    it('.post() send POST request', () => {
      instance.post('/user/search');
      const [request] = requests;
      expect(request.method).to.eq(Methods.Post);
    });
  
    it('.put() send PUT request', () => {
      instance.put('/user/profile');
      const [request] = requests;
      expect(request.method).to.eq(Methods.Put);
    });
  
    it('.delete() send DELETE request', () => {
      instance.delete('/chats');
      const [request] = requests;
      expect(request.method).to.eq(Methods.Delete);
    });
  
    it('.patch() send PATCH request', () => {
      instance.patch('/chats');
      const [request] = requests;
      expect(request.method).to.eq(Methods.Patch);
    });
  });