# portfolio
A modular portfolio system. The fields/containers are placed from a JSON input and different layouts can be included. In future versions CSS customisation through the input file will also be an option.

# Technology
This project uses React, SCSS, Typescript and Webpack. NPM is also required.

# Generating the portfolio
To generate the portfolio page after configuring the input Webpack is used (simply run `webpack`). You should intall other dependencies first, with NPM: `npm install`. The static files will be created at `/dist/`.

# Input schema
There is an `input.json` file in the `src/components` folder. The JSON file should include an array of `layouts`, where each layout mentions the layout type and its content.

```javascript
// INPUT FILE
{
    "layouts": layoutObject[]
}
```

Example input file

```javascript
{
    "layouts": [{
        "type": "title",
        "content": "Lorem ipsum"
    }, {
        "type": "subtitle",
        "content": "Dolor sit amet"
    }]
}
```

## Layouts
`layoutObject` has the following keys. Note that `layoutContent` depends on the type, and may be text (with HTML formatting) or an object. All available `layoutContent` variations are shown in the next layout. The sections are rendered according to their array index in the input file, top-down.

```javascript
{
    "type": string,
    "content": layoutContent
}
```

The following layouts can be used in `input.json`. All string types support HTML formatting.

### Title

| layout type        | Content type         |
| ------------------ | -------------------- |
| title              | string               |

### Subtitle
Usually only used once, under the title.

| layout type        | Content type         |
| ------------------ | -------------------- |
| subtitle           | string               |

### Text Container
A simple text container.

| layout type        | Content type         |
| ------------------ | -------------------- |
| text_container     | object               |

```javascript
{
    "title": string,
    "text": string
}
```
## Links
This layout can be used for social media links.

| layout type        | Content type         |
| ------------------ | -------------------- |
| links              | object               |

```javascript
{
    "name": string,
    "iconURL": string,
    "linkURL": string,
}
```

### Rating/score container

| layout type        | Content type         |
| ------------------ | -------------------- |
| rating_container   | object               |

```javascript
{
    "title": string,
    "ratings": RatingObject[]
}
```

`RatingObject` definition:

```javascript
{
    "title": string,
    "score": number
}
```

Where `score` is a number between 0 and 5

### Project container

| layout type        | Content type         |
| ------------------ | -------------------- |
| project_container  | object               |

```javascript
{
    "title": string,
    "projects": ProjectObject[]
}
```

`ProjectObject` definition:

```javascript
{
    "title": string,
    "language": string // Abbreviation. e.g 'JS', 'PY'
    "timespan" string | undefined, // e.g '2013-2016'
    "link": LinkObject | undefined,
    "description": string
}
```