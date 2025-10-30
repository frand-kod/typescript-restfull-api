# User API Spec

## Register User

Endpoint : POST /api/users

Request Body:

```json
{
  "username": "frand",
  "password": "secret",
  "name": "Frand Odi "
}
```

Response Body (<span style="color: green;"> success </span>) :

```json
{
  "username": "frand",
  "name": "Frand Odi "
}
```

Response Body (<span style="color: red;"> failed </span>) :

```json
{
  "failed to register!!"
}
```

## Login User

Endpoint : POST /api/users/login

Request Body:

```json
{
  "username": "frand",
  "password": "secret"
}
```

Response Body (<span style="color: green;"> success </span>) :

```json
{
  "username": "frand",
  "name": "Frand Odi ",
  "token": "tokenUUID"
}
```

Response Body (<span style="color: red;"> failed </span>) :

```json
{
"username or password is wrong !!"
}
```

## Get User

Endpoint : GET /api/users/current

Request Header :

- X-API-TOKEN : token

Response Body (<span style="color: green;"> success </span>) :

```json
{
  "status": "success",
  "data": {
    "username?": "frand",
    "name?": "Frand odi"
  }
}
```

Response Body (<span style="color: red;"> failed </span>) :

```json
{
  "status": "failed",
  "message": "invalid or expired token"
}
```

## Update User

Endpoint : PATCH /api/users/current

Request Header :

- X-API-TOKEN : token

Request Body:

```json
{
  "username?": "frand",
  "password?": "secret"
}
```

Response Body (<span style="color: green;"> success </span>) :

```json
{
  "status": "success",
  "data": {
    "username?": "frand",
    "name?": "Frand odi"
  }
}
```

Response Body (<span style="color: red;"> failed </span>) :

```json
{
  "status": "failed",
  "message": "Unauthorize"
}
```

## Logout User

Endpoint : PATCH /api/users/logout

Request Header :

- X-API-TOKEN : token

Response Body (<span style="color: green;"> success </span>) :

```json
{
  "status": "success",
  "message": "logout successfully"
}
```

Response Body (<span style="color: red;"> failed </span>) :

```json
{
  "status": "failed",
  "message": "Unauthorize"
}
```
