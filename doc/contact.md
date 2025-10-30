## Contact API Spec

## Create Contact

Endpoint : POST /api/contacts

Request Header :

- X-API-TOKEN : token

Request Body:

```json
{
  "first_name": "frand",
  "last_name": "odi",
  "email": "some@mail.com",
  "phone": "0823232332323"
}
```

Response Body(Success):

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "first_name": "frand",
    "last_name": "odi",
    "email": "some@mail.com",
    "phone": "0823232332323"
  }
}
```

Response Body(failed):

````json
{
  "status": "failed",
  "message": "Create contact is failed"
}
``

## Get Contact

Endpoint : GET /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Response Body(Success):

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "first_name": "frand",
    "last_name": "odi",
    "email": "some@mail.com",
    "phone": "0823232332323"
  }
}
````

Response Body(failed):

````json
{
  "status": "failed",
  "message": "Contact not found"
}
``

## Update Contact

Endpoint : PUT /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Request Body:

```json
{
  "first_name": "frand",
  "last_name": "odi",
  "email": "some@mail.com",
  "phone": "0823232332323"
}
````

Response Body(Success):

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "first_name": "frand",
    "last_name": "odi",
    "email": "some@mail.com",
    "phone": "0823232332323"
  }
}
```

Response Body(failed):

````json
{
  "status": "failed",
  "message": "Update failed"
}
``

## Remove Contact

Endpoint : DELETE /api/contacts/:id

Request Header :

- X-API-TOKEN : token

Response Body(Success):
```json
{
  "status": "success",
  "message": "removed succesfully"
}
````

Response Body(failed):

```json
{
  "status": "failed",
  "message": "remove failed"
}
```

## Search Contact

Endpoint : GET /api/contacts

Query Parameter:

- nama : string,contact : first_name | last_name, optional
- phone : string ,contact phone,optional
- email : string ,contact email,optional
- page : number, default 1
- size : number, default 10

Request Header :

- X-API-TOKEN : token

Response Body(Success):

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "first_name": "frand",
      "last_name": "odi",
      "email": "some@mail.com",
      "phone": "0823232332323"
    },
    {
      "id": 2,
      "first_name": "luthfi",
      "last_name": "nanda",
      "email": "one@mail.com",
      "phone": "0823232332323"
    }
  ],
  "paging": {
    "current_page": 1,
    "total_page": 10,
    "size": 10
  }
}
```

Response Body(failed):

```json
{
  "status": "failed",
  "message": "Unauthorize"
}
```
