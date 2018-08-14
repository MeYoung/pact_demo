const verifier = require('pact').Verifier;
const path = require('path');

// 验证生产者满足消费者的需求
describe('Pact Verification', () => {
    it('should validate the expectations of Matching Service', () => {

        const opts = {
            providerBaseUrl: 'http://localhost:8081',
            providerGetUser: 'http://localhost:8081/user/:id',
            pactUrls: [path.resolve(process.cwd(), './pacts/todoapp-todoservice.json')]
            // pactUrls: ['http://sjqasystst04:8081/pacts/provider/TodoService/consumer/TodoApp/latest']
        }

        return verifier.verifyProvider(opts)
            .then(output => {
                console.log('Pact Verification Complete!');
                console.log(output)
            });
    });
});
