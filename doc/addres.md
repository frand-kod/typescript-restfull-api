# Address API Spec

## Create Address

Endpoint : POST /api/contacts/:idContact/addresses

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jln Nusantara No. 45",
  "city": "Bandung",
  "country": "Indonesia",
  "postal_code": "24125"
}
```

Response Body(success):

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "street": "Jln Nusantara No. 45",
    "city": "Bandung",
    "country": "Indonesia",
    "postal_code": "24125"
  }
}
```

Response Body(failed):

```json
{
  "error": "Adrress failed to create"
}
```

## Get Adreess

Endpoint : GET /api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body(success):

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "street": "Jln Nusantara No. 45",
    "city": "Bandung",
    "country": "Indonesia",
    "postal_code": "24125"
  }
}
```

Response Body(failed):

```json
{
  "status": "failed",
  "message": "Adrress Not found"
}
```

## Update Address

Endpoint : PUT /api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Request Body :

```json
{
  "street": "Jln Nusantara No. 45",
  "city": "Bandung",
  "country": "Indonesia",
  "postal_code": "24125"
}
```

Response Body(success):

```json
{
  "status": "success",
  "data": {
    "id": 1,
    "street": "Jln Nusantara No. 45",
    "city": "Bandung",
    "country": "Indonesia",
    "postal_code": "24125"
  }
}
```

Response Body(failed):

```json
{
  "status": "failed",
  "message": "Adrress failed to create"
}
```

## Remove Address

Endpoint : DELETE /api/contacts/:idContact/addresses/:idAddress

Request Header :

- X-API-TOKEN : token

Response Body(success):

```json
{
  "status": "success",
  "message": "address removed successfully"
}
```

Response Body(failed):

```json
{ "status": "failed", "message": "Adrress failed to remove" }
```

## List Address

Endpoint : GET /api/contacts/:idContact/addresses

Request Header :

- X-API-TOKEN : token

Response Body(success):

```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "street": "Jln Nusantara No. 45",
      "city": "Bandung",
      "country": "Indonesia",
      "postal_code": "24125"
    },
    {
      "id": 2,
      "street": "Jln Nusantara No.50",
      "city": "Yogyakarta",
      "country": "Indonesia",
      "postal_code": "24123"
    }
  ]
}
```

Response Body(failed):

```json
{
  "status": "failed",
  "message": "Adrress Not found"
}
```
