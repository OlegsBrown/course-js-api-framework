import { request } from '../../utils/requests.js'

export async function getBooks() {
    it('Retrieve list of all books', async function () {
        await request(this, 'GET', '/books', undefined, false, 
            {
                statusCode : 200,
                expectedFields: ['0.email'],
                expectedValues: [
                                    {path: '0.id', value: 1}
                                ]
            }
        )
    })
}