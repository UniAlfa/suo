module.exports = function(server) {

    function wait(ms) {
        var start = Date.now(),
            now = start;
        while (now - start < ms) {
            now = Date.now();
        }
    };

    server.route(
        {
            method: 'GET',
            path: '/api/mock/test',
            handler: function (request, h) {

                var data = {
                    message: 'Test from Mock API'
                };

                return data;
            }
        }
    );

    //Subtract route
    server.route({
        method: 'POST',
        path: '/api/mock/process_suo1',
        handler: function (request, h) {


            const field1 = request.payload.data1;
            const field2 = request.payload.data2;
            const field3 = request.payload.data3;
            const field4 = request.payload.data4;

            var data = {
                status: 'OK',
                result: 'Hello world',
                datagiven: {field1: field1, field2: field2, field3: field3, field4: field4}
            };

            return data;
        }
    });

    server.route({
        method: 'POST',
        path: '/api/mock/process_suo2',
        config: {
            auth: false,
            cors: {
                origin: ['*']
            }
        },
        handler: function (request, h) {

            console.log(request.payload);

            const dealNumber = request.payload['form:dealNumber'];
            const dealTime = request.payload['form:dealTime'];
            const amount1_input = request.payload['form:amount1:amount_input'];
            const comment = request.payload['form:comment'];



            var data = {
                status: 'OK',
                result: 'Hello world',
                datagiven: {dealNumber: dealNumber, dealTime: dealTime, amount1_input: amount1_input, comment: comment}
            };

            console.log('waiting...');
            wait (5000);
            console.log('response...');

            return data;
        }
    });

}
