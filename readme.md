
# Flask Cupcakes

A small web application for a bakery. This app allows users to view different cupcakes and add their own using a JSON API.


## Badges

[![made-with-python](https://img.shields.io/badge/Made%20with-Python-blue.svg)](https://www.python.org/)

[![made-with-html](https://img.shields.io/badge/Made%20with-HTML-red.svg)](https://shields.io/)

[![made-with-flask](https://img.shields.io/badge/Made%20with-Flask-green.svg)](https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/)


## API Reference

#### Get all cupcakes

```http
  GET /api/cupcakes
```
#### Get single cupcake

```http
  GET /api/cupcakes/[cupcake-id]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cupcake to fetch |

#### Create a cupcake

```http
  POST /api/cupcakes
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `flavor`  | `text` | **Required**. Flavor of cupcake   |
| `size`  | `text` | **Required**. Size of cupcake   |
| `rating`  | `float` | **Required**. Rating of cupcake   |
| `image`  | `text` | Cupcake image URL   |

#### Update a single cupcake

```http
  PATCH /api/cupcakes/[cupcake-id]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cupcake to update |
| `flavor`  | `text` |  Flavor of cupcake   |
| `size`  | `text` | Size of cupcake   |
| `rating`  | `float` | Rating of cupcake   |
| `image`  | `text` | Cupcake image URL   |

#### Delete single cupcake

```http
  DELETE /api/cupcakes/[cupcake-id]
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of cupcake to delete |