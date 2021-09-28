## Get all categories

### Request

`GET /categories`

    curl -i -H 'Accept: application/json' -X GET -d'_method=GET' http://localhost:7000/categories

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close

    [
      {
        id: "fitness",
        label: "Fitness",
        prosCount: 12
      }
    ]

## Get iPros from specific category with some page and limit rate.

### Request

`GET /ipros?category={category_id}&from={number}&limit={limitNumber}`

    curl -i -H 'Accept: application/json' -X GET -d'_method=GET' http://localhost:7000/ipros?category={category_id}&from={number}&limit={limitNumber}

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close

    [
     
    ]


## Get specific iPro

### Request

`GET /iproo?id{ipro_id}`

    curl -i -H 'Accept: application/json' -X GET -d'_method=GET' http://localhost:7000/ipro?id="juasd-2k28x"

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close

    {}

## Create new iPro

### Request

`POST /iproo`

    curl -i -H 'Accept: application/json' -X POST -d'_method=POST' http://localhost:7000/ipro"

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close

    {}
