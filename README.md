# portfolio
A modular portfolio system. The fields/containers are placed from a JSON input and different sections can be included. In future versions CSS customisation through the input file will also be an option.

# Technology
This project uses React, SCSS, Typescript and Webpack. NPM is also required.

# Generating the portfolio
To generate the portfolio page after configuring the input Webpack is used (simply run `webpack`). You should intall other dependencies first, with NPM: `npm install`. The static files will be created at `/dist/`.

# Input schema
There is an empty `input.json` file in the root source folder. The JSON file should include an array of `sections`, where each section mentions the section type and its content, and, optionally, an array of media links. Both objects are defined below.

```javascript
// INPUT FILE
{
    "links": LinkObject[]
    "sections": SectionObject[]
}
```

## Links
This section can be used for social media links. The icon URL can be either an absolute URL or relative to the output HTML file. If a Link is placed in the root input file, a section of links will be created in the portfolio. Links can also be used in certain sections (i.e `ProjectObject`)  
A `LinkObject` has the following definition

```javascript
{
    "name": string,
    "iconURL": string,
    "linkURL": string
}
```

## Sections
`SectionObject` has the following keys. Note that `SectionContent` depends on the type, and may be text (with HTML formatting) or an object. All available `SectionContent` variations are shown in the next section.

```javascript
{
    "type": string,
    "content": SectionContent
}
```

The following sections can be used in `input.json`. All string types support HTML formatting.

### Title

| Section type       | Content type         |
| ------------------ | -------------------- |
| title              | string               |

### Subtitle

| Section type       | Content type         |
| ------------------ | -------------------- |
| subtitle           | string               |

### Text Container

| Section type       | Content type         |
| ------------------ | -------------------- |
| text_container     | object               |

```javascript
{
    "title": string,
    "text": string
}
```

### Rating/score container

| Section type       | Content type         |
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

| Section type       | Content type         |
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